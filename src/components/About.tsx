import React from 'react';
import { Users, Target, Award, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural & Pure",
      description: "Our hens roam freely and eat natural, homemade feed of grains, seeds, and flowers."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "Every egg is carefully cleaned, UV sanitized, and checked for quality before delivery."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description: "We're committed to serving our local community with the freshest, healthiest eggs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparency",
      description: "Complete traceability from hen to home, ensuring you know exactly what you're eating."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Cheeky Eggs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a passion for nutrition and a commitment to quality,
            Cheeky Eggs brings you the freshest, most nutritious eggs straight
            from our local farm.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Started with a simple belief that every family deserves access to
              truly fresh, nutritious eggs. We noticed the difference between
              farm-fresh eggs with their vibrant orange yolks and the pale,
              lackluster eggs found in most stores.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our hens live their best life – roaming freely, eating natural
              feed, and laying eggs that are bursting with nutrition. The bright
              orange yolks are nature's way of showing you the superior quality
              and nutritional content of our eggs.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-800 mb-2">Our Mission</h4>
              <p className="text-gray-600">
                Providing fresh, safe, and healthier eggs to our local community
                while maintaining the highest standards of animal welfare and
                environmental sustainability.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/15645663/pexels-photo-15645663.jpeg"
              alt="Happy free-range chickens"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;