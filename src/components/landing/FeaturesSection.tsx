import { CheckCircle2 } from "lucide-react";

const features = [
  {
    name: "Professional Templates",
    description: "Choose from a variety of professionally designed templates.",
  },
  {
    name: "ATS-Friendly",
    description: "Ensure your resume passes Applicant Tracking Systems.",
  },
  {
    name: "Easy Customization",
    description:
      "Customize every aspect of your resume with our intuitive editor.",
  },
  {
    name: "Real-Time Preview",
    description: "See changes instantly as you build your resume.",
  },
  {
    name: "Multiple Formats",
    description: "Download your resume in PDF, Word, or plain text formats.",
  },
  {
    name: "AI Assistance",
    description: "Get smart suggestions to improve your resume content.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Build Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create a standout resume
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our resume builder combines professional design with powerful
            features to help you create the perfect resume.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircle2
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
