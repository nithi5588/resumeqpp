import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                Latest Update
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>New templates available</span>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build Your Professional Resume in Minutes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fast, easy, and ATS-friendly resumes to land your dream job. Choose
            from professionally designed templates and create your perfect
            resume.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button className="text-lg px-6 py-6" size="lg">
              Create Your Resume Now
            </Button>
            <a
              href="#templates"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View Templates <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1400&h=900&fit=crop"
              alt="App screenshot"
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
