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
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/emergency-exit-sign-with-siren-light-direction-emergency-exit_35913-3108-1024x652.jpg.bv.webp?bv_host=www.powerq.com.au"
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
        />
        
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-12 lg:py-16">
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why choose PowerQ for Test & Tag in Melbourne
            </h1>
            <div className="w-52 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-8">
              PowerQ is the leading provider of testing and tagging services in Melbourne. Our conveniently scheduled after-hours services ensure safety for businesses, restaurants, workshops, offices, schools, shops and more. We conduct detailed electrical testing and tagging inspections for our clients so that their properties are up to code and fully compliant with occupational health and safety regulations.
            </p>
          </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-xl border-2 border-transparent hover:border-gray-300 shadow-lg hover:shadow-2xl p-4 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center transition-colors duration-300 group-hover:text-gray-700">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-6 text-center">{feature.description}</p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      

      {/* We Believe Section */}
      <div className="bg-white py-10 lg:py-14">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-gray-200">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.avif"
                  alt="Electrician at work"
                  width={800}
                  height={600}
                  className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  We at PowerQ Test & Tag Melbourne believe in making relations
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                  At PowerQ Test & Tag Melbourne, we believe in fostering relationships that last. As an experienced team of skilled electrical test and tag technicians based in Melbourne, we guarantee peace of mind when you engage us for our test and tag services. We are dedicated to promoting safety in the workplace with full compliance to the relevant regulations for Victoria. We make sure to have all the correct credentials with full public liability cover and competency. We provide a flawless service every single time!
                </p>
                <Link href="/request-a-quote">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-red-500">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-red-50 py-10 lg:py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 relative">
          <div className={`text-center mb-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <span className="text-red-600 font-semibold text-lg uppercase tracking-wide">Why Choose Us</span>
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
          <h2 className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            Who We Are
          </h2>
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl border-l-4 border-red-600 transition-all duration-500 cursor-pointer">
              <p className="text-lg text-gray-700 leading-8 mb-2">
                PowerQ Test & Tag Melbourne is your trusted partner for professional electrical test and tag services. Our team of highly trained experts is dedicated to ensuring the safety of businesses and homes across Melbourne. At PowerQ, we prioritize safety and compliance, following strict regulations and industry standards to keep your appliances and equipment properly tested and tagged. Our efficient processes minimize downtime and disruption, allowing your business to operate smoothly. With a commitment to exceptional customer service, detailed reporting, and best practices, we provide end-to-end solutions for all your test and tag needs. Whether for a workplace, commercial facility, or residential setting, PowerQ Test & Tag Melbourne delivers reliable, hassle-free compliance services to keep your environment safe.
              </p>
            </div>
            <div className="text-center mt-6">
              <Link href="/request-a-quote">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-red-500 text-lg uppercase">
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-10 lg:py-14 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 hover:border-gray-200">
                {/* Decorative left border */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-red-400 rounded-l-xl"></div>
                
                <div className="pl-6">
                  {/* Label */}
              
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    About Us
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-8 mb-6 relative">
                    <span className="absolute -left-4 top-0 text-red-600 text-4xl font-serif opacity-20">"</span>
                    At Our company, we provide 24/7 testing and tagging services anytime you need in Melbourne. We are trusted by our customers for our fair prices, swiftness, trustworthiness, and professional knowledge on safety protocols. Our main objective is to make sure that everyone in the workplace is safe and secure through efficient testing and tagging Melbourne wide.
                  </p>
                  
                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">24/7 Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Fair Prices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Trustworthy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Professional</span>
                    </div>
                  </div>
                  
                  <Link href="/contact-us">
                    <button className="group/btn bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-red-500 flex items-center gap-2">
                      <span>Contact us</span>
                      <svg className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/03/Emergency-Test-and-Tag-Tarneit.jpeg"
                  alt="PowerQ Test & Tag Promotional"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;

