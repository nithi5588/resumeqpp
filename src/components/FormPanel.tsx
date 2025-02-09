import React, { useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import FormSection from "./FormSection";
import { useState } from "react";

interface FormPanelProps {
  onUpdateForm?: (data: any) => void;
  initialData?: any;
}

const FormPanel: React.FC<FormPanelProps> = ({
  onUpdateForm = () => {},
  initialData = {},
}) => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("resumeFormData");
    return saved
      ? JSON.parse(saved)
      : {
          profile: [],
          education: [],
          skills: [],
          experience: [],
          projects: [],
          achievements: [],
          ...initialData,
        };
  });

  useEffect(() => {
    // Load initial data if provided
    if (Object.keys(initialData).length > 0) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleAdd = (section: string, data: any) => {
    const newEntry = {
      id: Date.now().toString(),
      ...data,
    };
    setFormData((prev) => {
      const newData = {
        ...prev,
        [section]: [...prev[section], newEntry],
      };
      localStorage.setItem("resumeFormData", JSON.stringify(newData));
      onUpdateForm(newData);
      return newData;
    });
  };

  const handleEdit = (section: string, id: string, data: any) => {
    setFormData((prev) => {
      const newData = {
        ...prev,
        [section]: prev[section].map((entry: any) =>
          entry.id === id ? { ...entry, ...data } : entry,
        ),
      };
      localStorage.setItem("resumeFormData", JSON.stringify(newData));
      onUpdateForm(newData);
      return newData;
    });
  };

  const handleDelete = (section: string, id: string) => {
    setFormData((prev) => {
      const newData = {
        ...prev,
        [section]: prev[section].filter((entry: any) => entry.id !== id),
      };
      localStorage.setItem("resumeFormData", JSON.stringify(newData));
      onUpdateForm(newData);
      return newData;
    });
  };

  return (
    <div className="w-full md:w-[500px] h-full bg-gray-50 border-r overflow-hidden">
      <ScrollArea className="h-full px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">Resume Details</h1>

        <Tabs defaultValue="profile" className="w-full">
          <div className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile">
            <FormSection
              title="Profile Details"
              section="profile"
              entries={formData.profile}
              onAdd={(data) => handleAdd("profile", data)}
              onEdit={(id, data) => handleEdit("profile", id, data)}
              onDelete={(id) => handleDelete("profile", id)}
            />
          </TabsContent>

          <TabsContent value="education">
            <FormSection
              title="Education"
              section="education"
              entries={formData.education}
              onAdd={(data) => handleAdd("education", data)}
              onEdit={(id, data) => handleEdit("education", id, data)}
              onDelete={(id) => handleDelete("education", id)}
            />
          </TabsContent>

          <TabsContent value="skills">
            <FormSection
              title="Skills"
              section="skills"
              entries={formData.skills}
              onAdd={(data) => handleAdd("skills", data)}
              onEdit={(id, data) => handleEdit("skills", id, data)}
              onDelete={(id) => handleDelete("skills", id)}
            />
          </TabsContent>

          <TabsContent value="experience">
            <FormSection
              title="Work Experience"
              section="experience"
              entries={formData.experience}
              onAdd={(data) => handleAdd("experience", data)}
              onEdit={(id, data) => handleEdit("experience", id, data)}
              onDelete={(id) => handleDelete("experience", id)}
            />
          </TabsContent>

          <TabsContent value="projects">
            <FormSection
              title="Projects"
              section="projects"
              entries={formData.projects}
              onAdd={(data) => handleAdd("projects", data)}
              onEdit={(id, data) => handleEdit("projects", id, data)}
              onDelete={(id) => handleDelete("projects", id)}
            />
          </TabsContent>

          <TabsContent value="achievements">
            <FormSection
              title="Certifications & Achievements"
              section="achievements"
              entries={formData.achievements}
              onAdd={(data) => handleAdd("achievements", data)}
              onEdit={(id, data) => handleEdit("achievements", id, data)}
              onDelete={(id) => handleDelete("achievements", id)}
            />
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  );
};

export default FormPanel;
