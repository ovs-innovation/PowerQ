import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";

const FireExtinguishers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout title="Fire Extinguishers" description="Professional fire extinguisher testing and servicing in Melbourne">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Fire-Safety-Training-for-Oil-Gas-960x640-1.jpg.bv.webp"
          alt="Fire Extinguisher Testing"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24 lg:py-32 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Fire Extinguisher Testing Melbourne
          </h1>
          <div className="w-32 sm:w-40 md:w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* We Believe Section */}
      <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Fire-Safety-Training-for-Oil-Gas-960x640-1.jpg.bv.webp"
                  alt="Fire Extinguishers"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Stats Box */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white rounded-lg p-2 sm:p-4 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden">
                      <Image
                        src="https://www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.avif"
                        alt="Client"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-green-600">1.2 K</div>
                      <div className="text-xs sm:text-sm text-gray-700 font-medium">Satisfied Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white p-4 sm:p-6 lg:p-10 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  We at PowerQ Test & Tag Melbourne believe in making relations
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mb-4 sm:mb-6">
                At  <Link
                    href="/"
                    className="text-red-600 font-semibold hover:text-red-700 underline"
                  >
                    PowerQ Test &amp; Tag Melbourne
                  </Link>, our focus is on building relationships. We provide cost-effective electrical testing and tagging services with full compliance to test and tag regulations in Victoria. Our team of experienced professionals use their smarts and skills to guarantee you peace of mind that we follow all necessary regulations for your industry. With us, you get the assurance of quality service backed by full public liability cover. Furthermore, we possess the necessary public liability cover that gives you the assurance of safety when you choose us for our test and tag services. Rest assured, we abide by all applicable regulations pertinent to your industry sector.
                </p>
                <Link href="/contact-us">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase text-sm sm:text-base w-full sm:w-auto">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Fire Extinguisher Testing Melbourne
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  Keep your fire equipment serviced and maintained
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mb-4 sm:mb-6">
                  Are you looking for reliable fire extinguisher testing services in Melbourne? PowerQ Test & Tag Melbourne provides comprehensive servicing and maintenance of fire protection systems to ensure that your fire extinguishers work when required. We have experience in inspection, assessment and testing of manufacturer's equipment. After completion we provide a report along with compliance certificates for the tests conducted. <Link href="/contact-us" className="text-red-600 underline hover:text-red-800">Contact us</Link> today to get your fire extinguishers tested!
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  It is extremely important to service and maintain your fire equipment
                </h3>
                <Link href="/request-a-quote">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase text-sm sm:text-base w-full sm:w-auto">
                  Request A Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Fire-Safety-Training-for-Oil-Gas-960x640-1.jpg.bv.webp"
                  alt="Fire Extinguisher Inspection"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-red-50 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center leading-tight">
            Why Choose PowerQ for Fire Extinguisher Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Comprehensive Testing</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-7">
                We perform thorough inspections and testing to ensure your fire extinguishers meet all safety standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Expert Team</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-7">
                Our certified technicians have years of experience in fire safety equipment testing and maintenance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Compliance Guaranteed</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-7">
                All our services comply with Australian Standards and workplace safety regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FireExtinguishers;

