import { useState } from "react";
import { Button } from "../ui/button";
import AuthDialog from "../auth/AuthDialog";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TemplatesSection from "./TemplatesSection";

export default function LandingPage() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-indigo-600">
                Resume Builder
              </span>
            </a>
          </div>
          <div className="flex gap-x-4 lg:gap-x-12">
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Features
            </a>
            <a
              href="#templates"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Pricing
            </a>
          </div>
          <div className="flex lg:flex-1 lg:justify-end gap-x-4">
            <Button variant="ghost" onClick={() => setShowAuth(true)}>
              Log in
            </Button>
            <Button onClick={() => setShowAuth(true)}>Sign up</Button>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <TemplatesSection />
      </main>

      <AuthDialog isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  );
}
