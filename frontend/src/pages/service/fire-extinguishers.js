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
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Fire-Safety-Training-for-Oil-Gas-960x640-1.jpg.bv.webp"
          alt="Fire Extinguisher Testing"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Fire Extinguisher Testing Melbourne
          </h1>
          <div className="w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* We Believe Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 lg:h-full min-h-[320px] md:min-h-[380px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Fire-Safety-Training-for-Oil-Gas-960x640-1.jpg.bv.webp"
                  alt="Fire Extinguishers"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Stats Box */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src="https://www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.avif"
                        alt="Client"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">1.2 K</div>
                      <div className="text-sm text-gray-700 font-medium">Satisfied Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl p-2 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
                  We at PowerQ Test & Tag Melbourne believe in making relations
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-6">
                At  <Link
                    href="/"
                    className="text-red-600 font-semibold hover:text-red-700 underline"
                  >
                    PowerQ Test &amp; Tag Melbourne
                  </Link>, our focus is on building relationships. We provide cost-effective electrical testing and tagging services with full compliance to test and tag regulations in Victoria. Our team of experienced professionals use their smarts and skills to guarantee you peace of mind that we follow all necessary regulations for your industry. With us, you get the assurance of quality service backed by full public liability cover. Furthermore, we possess the necessary public liability cover that gives you the assurance of safety when you choose us for our test and tag services. Rest assured, we abide by all applicable regulations pertinent to your industry sector.
                </p>
                <Link href="/contact-us">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-4 lg:py-6">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Fire Extinguisher Testing Melbourne
                </h2>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                  Keep your fire equipment serviced and maintained
                </h3>
                <p className="text-lg text-gray-700 leading-8 ">
                  Are you looking for reliable fire extinguisher testing services in Melbourne? PowerQ Test & Tag Melbourne provides comprehensive servicing and maintenance of fire protection systems to ensure that your fire extinguishers work when required. We have experience in inspection, assessment and testing of manufacturer's equipment. After completion we provide a report along with compliance certificates for the tests conducted. <Link href="/contact-us" className="text-red-600 underline hover:text-red-800">Contact us</Link> today to get your fire extinguishers tested!
                </p>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
                  It is extremely important to service and maintain your fire equipment
                </h3>
                <Link href="/request-a-quote">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase">
                  Request A Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 lg:h-full min-h-[320px] md:min-h-[380px] lg:min-h-[460px]">
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
      <div className="bg-gradient-to-br from-red-50 via-white to-red-50 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <h2 className="text-3xl lg:text-3
          xl font-bold text-gray-900 mb-8 text-center">
            Why Choose PowerQ for Fire Extinguisher Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Testing</h3>
              <p className="text-gray-700 leading-7">
                We perform thorough inspections and testing to ensure your fire extinguishers meet all safety standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-700 leading-7">
                Our certified technicians have years of experience in fire safety equipment testing and maintenance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Guaranteed</h3>
              <p className="text-gray-700 leading-7">
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

