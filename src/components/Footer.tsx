import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'eggs', label: 'Our Eggs' },
    { id: 'shop', label: 'Shop' },
    { id: 'contact', label: 'Contact' },
  ];

  const features = [
    { icon: <Heart className="w-5 h-5" />, text: "100% Natural" },
    { icon: <Shield className="w-5 h-5" />, text: "FSSAI Certified" },
    { icon: <Heart className="w-5 h-5" />, text: "Farm Fresh" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🥚</span>
              </div>
              <span className="text-xl font-bold">Cheeky Eggs</span>
            </div>
            <p className="text-gray-300">
              Fresh, nutritious, and cheeky! Providing the best farm-fresh eggs with bright orange yolks 
              from our local farm.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="text-orange-400">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 +91-9741422349 / +91-7019956025</p>
              <p>✉️ cheekyeggs@gmail.com</p>
              <p>📍 Devanahalli, Bangalore Rural District</p>
              <p>🕒 Mon-Sat: 6AM-8PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quality Promise</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>✓ FSSAI Licensed & Certified</p>
              <p>✓ UV Sanitized & Quality Checked</p>
              <p>✓ Farm Fresh Daily</p>
              <p>✓ No Chemicals or Hormones</p>
              <p>✓ Free-Range & Natural Feed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Cheeky Eggs. All rights reserved. Made with ❤️ for fresh egg lovers.</p>
          <p className="mt-2 text-sm">
            FSSAI License No: 12345678901234 | 
            <span className="text-orange-400 ml-1">Committed to Quality & Freshness</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;