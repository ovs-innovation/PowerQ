import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";

const ThreePhaseTesting = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout title="Three Phase Testing" description="Professional three phase electrical testing services in Melbourne">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/04/3-Phase-to-240V-power-board-scaled.jpg.bv.webp"
          alt="Three Phase Testing"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Three Phase Testing In Melbourne
          </h1>
          <div className="w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Three Phase Testing Melbourne
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-6">
                  PowerQ Test & Tag Melbourne is the industry leader for Three-Phase Testing in Melbourne, offering full compliance services that abide by Victoria's test and tag regulations. Our experienced team of professionals guarantee top-notch service with full public liability cover, giving customers piece of mind in knowing they are receiving the highest quality work. We are confident our electrical testing and tagging services meet all applicable standards so you can have confidence when having us complete your Three-Phase Testing.
                </p>
                <Link href="/contact-us">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[320px] md:min-h-[380px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Three-Phase-Testing-Melbourne_-1.jpg.bv.webp?bv_host=www.powerq.com.au"
                  alt="Electrician with laptop"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standards Footer Section */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <p className="text-xl font-bold text-gray-900 text-center">
            The Australian Standards AS/NZS 3760:2010 recognizes three important tests for compliance of equipment using three phase switch or socket
          </p>
        </div>
      </div>

      {/* Three Important Tests Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* <div className="relative rounded-xl overflow-hidden transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/04/3-Phase-to-240V-power-board-scaled.jpg.bv.webp"
                  alt="Three Phase Testing Equipment"
                  width={800}
                  height={600}
                  className=" object-cover rounded-xl"
                />
              </div> */}
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[320px] md:min-h-[380px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/04/c1aad3ee-82a1-43d4-a720-304935d55bd5-688x1024.jpeg"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Three Phase Testing Melbourne
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-4">
                  These tests are required to successfully complete a three phase testing inspection:
                </p>
                
                <div className="space-y-6">
                  {/* Test 1 */}
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Earth Continuity</h3>
                    <p className="text-lg text-gray-700">
                      The Earth Continuity test measures the resistance supplied by the equipment or machine's earth wire. For current to pass to earth from the equipment as quickly as feasible, the resistance needs to very low.
                    </p>
                    <p className="text-lg font-semibold text-red-600">
                      The maximum resistance allowed for this test is below 1Ω.
                    </p>
                  </div>

                  {/* Test 2 */}
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Insulation resistance</h3>
                    <p className="text-lg text-gray-700 leading-7 ">
                      The Insulation Resistance test measures the resistance provided by the machine/equipment's insulation. This resistance is measured in Ohms (Ω).
                    </p>
                    <p className="text-lg font-semibold text-red-600">
                      The minimum ohms required for a successful test is 1MΩ (megaohm) which equated to 1.000.000 ohms.
                    </p>
                  </div>

                  {/* Test 3 */}
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Earth Leakage</h3>
                    <p className="text-lg text-gray-700 leading-7 mb-2">
                      An Earth Leakage test is used to ensure that the leakage between the main conductors and the earth pin stays below the limit. This is critical in order to ensure the leakage doesn't cause electrocution. The earth leakage testing measures the extent of current flow which is measured in amperes (amps).
                    </p>
                    <p className="text-lg font-semibold text-red-600">
                      The test results should not exceed 5mA (milliamps), or 0.005 amps for it to pass the test.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-lg text-gray-700 leading-8 mb-6">
                    Another test that can be carried out on 3-Phase equipment is RCD trip time test while testing RCD safety switches. The maximum trip time for 3-Phase RCDs must not exceed 300 milliseconds (ms).
                  </p>
                  <Link href="/request-a-quote">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      BOOK OUR SERVICES
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RCD Trip Time Test Section */}
     
    </Layout>
  );
};

export default ThreePhaseTesting;

