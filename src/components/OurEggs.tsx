import React from 'react';
import { Check, Award, Shield, Sparkles } from 'lucide-react';

const OurEggs: React.FC = () => {
  const features = [
    { label: "Egg Quality", value: "Laid by local, free-range hens" },
    { label: "Yolk Color", value: "Bright orange (indicator of nutrition)" },
    { label: "Feed", value: "Natural/homemade feed of grains, seeds, flowers" },
    { label: "Storage & Safety", value: "Cleaned, UV sanitized, checked for cracks" },
    { label: "Freshness", value: "Available within 1 day of laying" },
    { label: "Free From", value: "Antibiotics, hormones, and chemicals" }
  ];

  const certifications = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "FSSAI Registered",
      description: "Licensed and compliant with all Indian safety standards"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Checked",
      description: "Multiple safety checks for cleanliness and quality"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "UV Sanitized",
      description: "Advanced cleaning and sanitization process"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Eggs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every egg we deliver represents our commitment to quality, nutrition, and freshness. 
            Here's what makes our eggs truly special.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Egg Quality Details</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">{feature.label}:</span>
                      <span className="text-gray-600 ml-2">{feature.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <img
                src="https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh eggs with bright orange yolks"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Why Orange Yolks Matter</h4>
              <p className="text-orange-100">
                The vibrant orange color of our egg yolks isn't just beautiful – it's a sign of superior nutrition. 
                Orange yolks contain higher levels of beta-carotene, omega-3 fatty acids, and other essential nutrients 
                that come from our hens' natural, varied diet.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certificates & Quality Assurance</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">FSSAI Compliance</h4>
            <p className="text-blue-700">
              Our eggs are FSSAI licensed and meet all Indian safety standards for food products. 
              Each batch goes through multiple safety checks for cleanliness and quality before reaching your home. 
              We maintain complete traceability from farm to your table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEggs;