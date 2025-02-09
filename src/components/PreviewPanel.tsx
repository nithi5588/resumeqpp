import React from "react";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Download } from "lucide-react";
import Professional from "./templates/Professional";
import Creative from "./templates/Creative";
import Minimal from "./templates/Minimal";

import { ResumeData as TypedResumeData } from "@/types/resume";

export interface ResumeData extends Partial<TypedResumeData> {}

interface PreviewPanelProps {
  templateId?: string;
  data?: ResumeData;
}

const PreviewPanel = ({ templateId = "1", data = {} }: PreviewPanelProps) => {
  const handleDownloadWord = async () => {
    const content = document.querySelector(".resume-content");
    if (!content) return;

    const styles = `
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 800px; margin: 0 auto; padding: 40px; }
      h1, h2, h3 { margin-top: 20px; margin-bottom: 10px; }
      p { margin-bottom: 10px; }
      .header { text-align: center; margin-bottom: 30px; }
      .section { margin-bottom: 25px; }
    `;

    const html = `
      <html>
        <head>
          <style>${styles}</style>
        </head>
        <body>
          <div class="container">${content.innerHTML}</div>
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = async () => {
    const content = document.querySelector(".resume-content");
    if (!content) return;

    const printWindow = window.open('', '', 'width=800,height=800');
    if (!printWindow) return;

    const styles = `
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 800px; margin: 0 auto; padding: 40px; }
      @media print {
        body { -webkit-print-color-adjust: exact; }
        .container { padding: 0; }
      }
    `;

    printWindow.document.write(`
      <html>
        <head>
          <style>${styles}</style>
        </head>
        <body>
          <div class="container">${content.innerHTML}</div>
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() { window.close(); };
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };
    const element = document.createElement("a");
    const file = new Blob(
      [
        `<html><head><style>
          body { font-family: Arial, sans-serif; }
          .container { max-width: 800px; margin: 0 auto; padding: 40px; }
        </style></head><body><div class="container">${document.querySelector(".resume-content")?.innerHTML || ""}</div></body></html>`,
      ],
      { type: "application/msword" },
    );
    element.href = URL.createObjectURL(file);
    element.download = "resume.doc";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <Card className="bg-white w-full h-full overflow-hidden shadow-lg relative">
      <div className="absolute top-2 right-2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleDownloadWord}>
              Download as Word
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDownloadPDF}>
              Download as PDF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ScrollArea className="h-full w-full p-8 pt-14">
        <div className="resume-content">
          {templateId === "1" && <Professional data={data} />}
          {templateId === "2" && <Creative data={data} />}
          {templateId === "3" && <Minimal data={data} />}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default PreviewPanel;
