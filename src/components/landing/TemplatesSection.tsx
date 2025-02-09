import { Button } from "../ui/button";

const templates = [
  {
    name: "Professional",
    description: "Clean and modern design for corporate roles",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
  },
  {
    name: "Creative",
    description: "Stand out with a unique and bold layout",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=500&fit=crop",
  },
  {
    name: "Minimal",
    description: "Simple and elegant for any profession",
    image:
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=400&h=500&fit=crop",
  },
];

export default function TemplatesSection() {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Resume Templates
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our collection of professionally designed templates to
            get started.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {templates.map((template) => (
            <article
              key={template.name}
              className="flex flex-col items-start justify-between bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative w-full">
                <img
                  src={template.image}
                  alt={template.name}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <div className="max-w-xl p-6">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {template.name}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {template.description}
                  </p>
                </div>
                <Button className="mt-6 w-full">Use This Template</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
