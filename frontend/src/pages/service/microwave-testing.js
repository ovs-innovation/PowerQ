import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";

const MicrowaveTesting = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout title="Microwave Testing" description="Professional microwave leakage testing services in Melbourne">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/Microwave-Testing.jpg.bv.webp?bv_host=www.powerq.com.au"
          alt="Microwave Testing"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Microwave Testing In Melbourne
          </h1>
          <div className="w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* We Believe Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/02/Microwave-Testing.jpg.bv.webp"
                  alt="Microwave Inspection"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  We at PowerQ Test & Tag Melbourne believe in making relations
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-6">
                  PowerQ Test & Tag Melbourne firmly believes in building strong customer relationships. Located in Melbourne, our team is backed by ample experience and competence to conduct efficient electrical testing and tagging services with full compliance to the regulations specific to Victoria. Furthermore, we possess the necessary public liability cover that gives you the assurance of safety when you choose us for our test and tag services. Rest assured, we abide by all applicable regulations pertinent to your industry sector.
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

      {/* Standards Banner */}
      <div className="bg-gray-800 text-white py-6">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 text-center">
          <p className="text-lg">
            PowerQ Test & Tag Melbourne uses proper radiation detection equipment in accordance with Australian safety standards for microwave testing.
          </p>
        </div>
      </div>

      {/* Microwave Safety Testing Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Microwave Safety Testing Melbourne
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <p className="text-lg text-gray-700 leading-8 mb-6">
                  Regular use and age can lead to radiation leakage from dirt buildup and contained particles. These radiations can be dangerous if not monitored and suggest regular tests to inspect for potential leaks or damage. Older microwave models require more frequent testing due to wear and tear.
                </p>
                <p className="text-lg text-gray-700 leading-8 mb-6">
                  PowerQ Test & Tag Melbourne recommends regular testing of a microwave to ensure that you and your family, or employees are safe. Our professional technicians use compliant radiation detection equipment for physical damage inspection and emission assessment.
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/02/Microwave-Testing.jpg.bv.webp"
                  alt="Microwave Testing Inspection"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/02/Microwave-Testing.jpg.bv.webp"
                  alt="Microwave Repair"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Banner */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 text-center">
          <p className="text-lg font-medium text-gray-900">
            We will also provide certification tags after the testing exercise and will issue a schedule for the next servicing to keep things up to date.
          </p>
        </div>
      </div>

      {/* Microwave Appliance Testing Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/02/Microwave-Testing.jpg.bv.webp"
                  alt="Kitchen Control"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Microwave Appliance Testing includes:
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl mt-1">1.</span>
                    <span className="text-lg text-gray-700">An electrical safety test to ensure appliance safety compliance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl mt-1">2.</span>
                    <span className="text-lg text-gray-700">A physical inspection and correct functioning assessment to check for damage and deterioration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl mt-1">3.</span>
                    <span className="text-lg text-gray-700">A power output and electrical cords inspection for compliance with acceptable standards of electrical flow and magnetization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl mt-1">4.</span>
                    <span className="text-lg text-gray-700">A radiation emissions inspection to evaluate radiation levels.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MicrowaveTesting;
