import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Plus, Trash2, Edit } from "lucide-react";
import FormDialog from "./FormDialog";

interface Entry {
  id: string;
  title: string;
  description: string;
}

import {
  ProfileData,
  ExperienceData,
  EducationData,
  SkillData,
  ProjectData,
  AchievementData,
} from "@/types/resume";

type SectionType =
  | "profile"
  | "experience"
  | "education"
  | "skills"
  | "projects"
  | "achievements";
type EntryData = Partial<
  | ProfileData
  | ExperienceData
  | EducationData
  | SkillData
  | ProjectData
  | AchievementData
>;

interface FormSectionProps {
  title?: string;
  section: SectionType;
  entries?: EntryData[];
  onAdd?: (data: EntryData) => void;
  onEdit?: (id: string, data: EntryData) => void;
  onDelete?: (id: string) => void;
}

const FormSection = ({
  title = "Section Title",
  section,
  entries = [],
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
}: FormSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<Entry | null>(null);
  return (
    <Card className="p-6 bg-white w-full max-w-[460px] mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Button
          onClick={() => setDialogOpen(true)}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Entry
        </Button>
      </div>

      <FormDialog
        isOpen={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setEditingEntry(null);
        }}
        onSubmit={(data) => {
          if (editingEntry) {
            onEdit(editingEntry.id, data);
          } else {
            onAdd(data);
          }
        }}
        initialData={editingEntry || undefined}
        sectionTitle={editingEntry ? `Edit ${title}` : `Add ${title}`}
        section={section}
      />

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="p-4 border rounded-lg bg-gray-50 space-y-2"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1 flex-1">
                {section === "profile" && (
                  <>
                    <Label>{entry.name}</Label>
                    <p className="text-sm text-gray-600">{entry.email}</p>
                  </>
                )}
                {section === "experience" && (
                  <>
                    <Label>{entry.title}</Label>
                    <p className="text-sm text-gray-600">{entry.company}</p>
                    <p className="text-sm text-gray-500">
                      {entry.startDate} - {entry.endDate || "Present"}
                    </p>
                  </>
                )}
                {section === "education" && (
                  <>
                    <Label>{entry.degree}</Label>
                    <p className="text-sm text-gray-600">{entry.institution}</p>
                    <p className="text-sm text-gray-500">
                      {entry.startDate} - {entry.endDate}
                    </p>
                  </>
                )}
                {section === "skills" && (
                  <>
                    <Label>{entry.category}</Label>
                    <p className="text-sm text-gray-600">
                      {entry.skills?.join(", ")}
                    </p>
                  </>
                )}
                {section === "projects" && (
                  <>
                    <Label>{entry.title}</Label>
                    <p className="text-sm text-gray-600">{entry.description}</p>
                    <p className="text-sm text-gray-500">
                      {entry.technologies?.join(", ")}
                    </p>
                  </>
                )}
                {section === "achievements" && (
                  <>
                    <Label>{entry.title}</Label>
                    <p className="text-sm text-gray-600">{entry.issuer}</p>
                    <p className="text-sm text-gray-500">{entry.date}</p>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingEntry(entry);
                    setDialogOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(entry.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {entries.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No entries yet. Click 'Add Entry' to get started.
        </div>
      )}
    </Card>
  );
};

export default FormSection;
