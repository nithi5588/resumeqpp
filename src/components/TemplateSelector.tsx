import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "../lib/utils";

interface Template {
  id: string;
  name: string;
  thumbnail: string;
}

interface TemplateSelectorProps {
  templates?: Template[];
  selectedTemplateId?: string;
  onTemplateSelect?: (templateId: string) => void;
}

const TemplateSelector = ({
  templates = [
    {
      id: "1",
      name: "Professional",
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
    },
    {
      id: "2",
      name: "Creative",
      thumbnail:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
    },
    {
      id: "3",
      name: "Minimal",
      thumbnail:
        "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=300&h=400&fit=crop",
    },
  ],
  selectedTemplateId = "1",
  onTemplateSelect = (id) => console.log("Template selected:", id),
}: TemplateSelectorProps) => {
  return (
    <Card className="p-6 bg-white w-full max-w-[1512px] shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Choose Template
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Select a template that best suits your professional style
          </p>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {templates.map((template) => (
            <CarouselItem
              key={template.id}
              className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div
                className={cn(
                  "relative cursor-pointer rounded-lg overflow-hidden h-[120px] transition-all duration-200 hover:shadow-lg",
                  selectedTemplateId === template.id
                    ? "ring-2 ring-primary shadow-lg scale-[1.02]"
                    : "hover:scale-[1.02]",
                )}
                onClick={() => onTemplateSelect(template.id)}
              >
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {template.name}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
};

export default TemplateSelector;
