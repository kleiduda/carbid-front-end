import { Phone } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                CB
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Carbid
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Offer
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}