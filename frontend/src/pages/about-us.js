import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";
import { FiClock, FiCalendar, FiFileText, FiDollarSign } from "react-icons/fi";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FiClock className="w-12 h-12" />,
      title: "Fast & Efficient",
      description: "PowerQ offers fast and efficient Test & Tag services, ensuring your equipment is safe and compliant with minimal disruption.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FiCalendar className="w-12 h-12" />,
      title: "Experience",
      description: "Experience You Can Trust With years of industry expertise, PowerQ delivers reliable Test & Tag services backed by a proven track record.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: <FiFileText className="w-12 h-12" />,
      title: "Comprehensive Reporting",
      description: "PowerQ provides detailed, easy-to-understand reports after every Test & Tag service, ensuring you have a complete record.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <FiDollarSign className="w-12 h-12" />,
      title: "Affordable Price",
      description: "PowerQ Test & Tag Melbourne offers competitive and affordable pricing for electrical testing and tagging services.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <Layout title="About Us" description="About PowerQ Test & Tag Melbourne">
      {/* Hero Section - Why Choose PowerQ */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[600px] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-32 h-32 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-40 w-24 h-24 bg-green-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-20 lg:py-28">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Why choose PowerQ for Test & Tag in Melbourne
            </h1>
            <div className="w-32 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-8">
              PowerQ is the leading provider of testing and tagging services in Melbourne. Our conveniently scheduled after-hours services ensure safety for businesses, restaurants, workshops, offices, schools, shops and more. We conduct detailed electrical testing and tagging inspections for our clients so that their properties are up to code and fully compliant with occupational health and safety regulations.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-6 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* We Believe Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Image
                src="https://www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.avif"
                alt="Electrician at work"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We at PowerQ Test & Tag Melbourne believe in making relations
              </h2>
              <p className="text-lg text-gray-700 leading-8 mb-8">
                At PowerQ Test & Tag Melbourne, we believe in fostering relationships that last. As an experienced team of skilled electrical test and tag technicians based in Melbourne, we guarantee peace of mind when you engage us for our test and tag services. We are dedicated to promoting safety in the workplace with full compliance to the relevant regulations for Victoria. We make sure to have all the correct credentials with full public liability cover and competency. We provide a flawless service every single time!
              </p>
              <Link href="/request-a-quote">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className={`text-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <span className="text-green-600 font-semibold text-lg">Why Choose Us</span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            Who We Are
          </h2>
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <p className="text-lg text-gray-700 leading-8 mb-8">
              PowerQ Test & Tag Melbourne is your trusted partner for professional electrical test and tag services. Our team of highly trained experts is dedicated to ensuring the safety of businesses and homes across Melbourne. At PowerQ, we prioritize safety and compliance, following strict regulations and industry standards to keep your appliances and equipment properly tested and tagged. Our efficient processes minimize downtime and disruption, allowing your business to operate smoothly. With a commitment to exceptional customer service, detailed reporting, and best practices, we provide end-to-end solutions for all your test and tag needs. Whether for a workplace, commercial facility, or residential setting, PowerQ Test & Tag Melbourne delivers reliable, hassle-free compliance services to keep your environment safe.
            </p>
            <div className="text-center">
              <Link href="/request-a-quote">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg uppercase">
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-700 leading-8 mb-8">
                At Our company, we provide 24/7 testing and tagging services anytime you need in Melbourne. We are trusted by our customers for our fair prices, swiftness, trustworthiness, and professional knowledge on safety protocols. Our main objective is to make sure that everyone in the workplace is safe and secure through efficient testing and tagging Melbourne wide.
              </p>
              <Link href="/contact-us">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contact us
                </button>
              </Link>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-400 rounded-xl overflow-hidden shadow-2xl p-8 min-h-[500px] flex flex-col justify-between">
                <div className="text-white mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-2">WE AT POWERQ TEST & TAG</h3>
                  <p className="text-2xl font-semibold">Believe In Making Relations</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-white font-bold text-2xl mb-2">PowerQ</div>
                    <div className="text-white text-sm">Test & Tag Service</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-3xl mb-2">0433723389</div>
                    <div className="text-white text-sm">WWW.POWERQ.COM.AU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
