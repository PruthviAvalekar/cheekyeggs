import React from "react";
import { Star, Check, X, Phone } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Starter Pack",
      count: 6,
      price: 79,
      originalPrice: 90,
      description: "Perfect for trying our premium eggs",
      popular: false,
      features: ["6 Fresh Eggs", "Quality Assured", "Farm Fresh"],
    },
    {
      id: 2,
      name: "Family Pack",
      count: 10,
      price: 130,
      originalPrice: 150,
      description: "Ideal for small families",
      popular: true,
      features: [
        "10 Fresh Eggs",
        "Farm Fresh",
        "Farm Fresh",
        "Best Value",
      ],
    },
    {
      id: 3,
      name: "Bulk Pack",
      count: 30,
      price: 350,
      originalPrice: 450,
      description: "Best value for large families",
      popular: false,
      features: [
        "30 Fresh Eggs",
        "Farm Fresh",
        "Farm Fresh",
        "Great for Baking",
        "Great for Baking",
      ],
    },
  ];

  const comparison = [
    { feature: "Yolk Color", cheeky: "Bright Orange", ordinary: "Pale Yellow" },
    {
      feature: "Freshness",
      cheeky: "1 Day from Laying",
      ordinary: "7-14 Days Old",
    },
    {
      feature: "Feed Quality",
      cheeky: "Natural Grains & Seeds",
      ordinary: "Commercial Feed",
    },
    { feature: "Chemicals", cheeky: "Zero", ordinary: "May Contain" },
    { feature: "Taste", cheeky: "Rich & Creamy", ordinary: "Bland" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Egg Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated egg packs. Contact us directly to place your order
            and arrange pickup from our farm in Devanahalli.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                product.popular
                  ? "border-orange-500 transform scale-105"
                  : "border-gray-200"
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} fill="currentColor" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-orange-500">
                      ₹{product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  <div className="text-gray-600">
                    <span className="text-3xl font-bold text-gray-800">
                      {product.count}
                    </span>{" "}
                    eggs
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-orange-700 font-medium mb-2">
                    Contact us to place your order
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <Phone size={16} />
                    <span className="text-sm">+91-9741422349 / +91-7019956025</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Cheeky Eggs Over Ordinary Eggs?
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-800">
                    Feature
                  </th>
                  <th className="text-center p-4 font-semibold text-orange-600">
                    Cheeky Eggs
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-600">
                    Ordinary Eggs
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-800">
                      {item.feature}
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center space-x-1 text-green-600">
                        <Check size={16} />
                        <span>{item.cheeky}</span>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center space-x-1 text-red-500">
                        <X size={16} />
                        <span>{item.ordinary}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;