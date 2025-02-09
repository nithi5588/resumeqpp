import React, { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import Header from "./Header";
import TemplateSelector from "./TemplateSelector";
import FormPanel from "./FormPanel";
import PreviewPanel from "./PreviewPanel";
import LandingPage from "./landing/LandingPage";

interface HomeProps {
  initialTemplateId?: string;
  initialData?: any;
}

const Home = ({
  initialTemplateId = "1",
  initialData = {
    personalInfo: {
      name: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      location: "New York, NY",
    },
    experience: [
      {
        title: "Senior Developer",
        company: "Tech Corp",
        duration: "2020 - Present",
        description: "Led development of core products",
      },
    ],
    education: [
      {
        degree: "BS Computer Science",
        institution: "University of Technology",
        year: "2018",
      },
    ],
    skills: ["React", "TypeScript", "Node.js", "AWS"],
  },
}: HomeProps) => {
  const { user } = useAuth();
  const [selectedTemplateId, setSelectedTemplateId] =
    useState(initialTemplateId);
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    return saved ? JSON.parse(saved) : {};
  });

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
  };

  const handleFormUpdate = (data: any) => {
    setResumeData(data);
    localStorage.setItem("resumeData", JSON.stringify(data));
  };

  if (!user) {
    return <LandingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Template Selector */}
      <div className="p-4">
        <TemplateSelector
          selectedTemplateId={selectedTemplateId}
          onTemplateSelect={handleTemplateSelect}
        />
      </div>

      {/* Main content area with split view */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-180px)]">
        {/* Form Panel */}
        <FormPanel onUpdateForm={handleFormUpdate} />

        {/* Preview Panel */}
        <div className="flex-1 p-4 bg-gray-100">
          <PreviewPanel templateId={selectedTemplateId} data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
