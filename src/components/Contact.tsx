import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone & WhatsApp",
      details: ["+91-9741422349", "+91-7019956025"],
      action: "Call or WhatsApp us"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["cheekyeggs@gmail.com"],
      action: "Send us an email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Farm Address",
      details: ["Cheeky Eggs Farm", "Devanahalli, Bangalore Rural District", "Karnataka - 562110"],
      action: "Visit our farm"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Sat: 6:00 AM - 8:00 PM", "Sunday: 7:00 AM - 6:00 PM"],
      action: "Order within hours"
    }
  ];

  const socialMedia = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@cheekyeggs",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "CheekyEggsFarm",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      handle: "+91-9741422349",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our eggs or want to place an order? 
            We're here to help! Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-500">{info.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                    ))}
                    <p className="text-sm text-orange-500 mt-2">{info.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91-9876543210"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your egg requirements or ask any questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${social.color}`}
              >
                {social.icon}
                <span className="font-medium">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;