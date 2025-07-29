import React from 'react';
import { Shield, Heart, Clock } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const highlights = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Bright Orange Yolks",
      description: "Country chicken eggs with exceptional nutrition"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Natural Feed",
      description: "No chemicals, antibiotics, or hormones"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Daily Fresh",
      description: "Collected fresh daily from our farm"
    }
  ];

  return (
    <section className="pt-20 bg-gradient-to-br from-orange-50 to-yellow-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Fresh, Nutritious, & 
                <span className="text-orange-500 block">Cheeky!</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the difference of truly fresh eggs from happy, free-range hens. 
                Our eggs feature bright orange yolks that are a testament to superior nutrition and care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Our Story
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh eggs with bright orange yolks"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-orange-200 rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-yellow-200 rounded-full opacity-30 z-0"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-orange-500 mb-3">{highlight.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;