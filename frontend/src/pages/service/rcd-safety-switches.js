import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";

const RCDSafetySwitches = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout title="RCD/Safety Switches" description="Professional RCD and safety switch testing services in Melbourne">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15086-768x512.jpg.bv.webp"
          alt="RCD Safety Switches"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            RCD/ Safety Switches In Melbourne
          </h1>
          <div className="w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* We Believe Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[320px] md:min-h-[380px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/man-electrical-technician-working-switchboard-with-fuses-installation-connection-electrical-equipment-close-up_169016-5076-1024x655.jpg.bv.webp?bv_host=www.powerq.com.au"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white  transition-all duration-500">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-3">
                  We at PowerQ Test & Tag Melbourne believe in making relations
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-3">
                  At PowerQ Test & Tag Melbourne, our focus is on building relationships. We provide cost-effective electrical testing and tagging services with full compliance to test and tag regulations in Victoria. Our team of experienced professionals use their smarts and skills to guarantee you peace of mind that we follow all necessary regulations for your industry. With us, you get the assurance of quality service backed by full public liability cover.
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

      {/* Safety Switch Testing Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-red-500 rounded-xl p-4 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full min-h-[320px] md:min-h-[380px] lg:min-h-[440px] flex flex-col justify-start">
                <h2 className="text-3xl lg:text-3xl font-bold text-white mb-3">
                  Safety Switch Testing Melbourne
                </h2>
                <p className="text-lg text-gray-200 leading-8 ">
                  Are you looking for a reliable safety switch testing service in Melbourne? Look no further! Residual Current Device (RCD) testing is an essential part of electrical safety maintenance in your property, and we are here to provide it. RCDs are highly sensitive devices that disconnect a circuit or power source as soon as they detect an imbalance in electric current, providing necessary protection and preventing injuries or fatalities. At our service centre, our professionals will take care of all your safety switch testing needs with confidence and accuracy.
                </p>
                <div className="bg-red-100 rounded-lg p-4 mt-2">
                  <p className="text-gray-900 font-medium">
                    We recommend regular RCD tests to ensure the safety of life at work and home that could be endangered in case of an unfortunate contact with a faulty wiring.
                  </p>
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[320px] md:min-h-[380px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15086-768x512.jpg.bv.webp"
                  alt="RCD Testing"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RCD Testing Details Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative pb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[340px] md:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/03/woman-turning-off-light-switch-1024x816.jpg"
                  width={900}
                  height={700}
                  className="w-full h-full object-cover rounded-xl"
                  priority
                />
              </div>
              <div className="absolute right-1 -bottom-28 lg:right-2 rounded-xl overflow-hidden shadow-2xl w-4/6 sm:w-3/5 lg:w-2/3">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/2025/03/concrete-wall-with-meters-pipes-1024x683.jpg"
                  alt="Electrical distribution boxes"
                  width={700}
                  height={520}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white transition-all duration-500">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 ">
                  RCD or Safety Switches play a vital role in your safety from any hazards with electrical equipment and appliances you use at workplace or at home.
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-4">
                  RCDs should be tested periodically to check their performance for trip current and time are within the specified limits. At PowerQ Test & Tag Melbourne, we provide accurate testing of your RCDs as required by the Australia/New Zealand Standards AS/NZS 3760:2010. Using a range of high-quality test instruments, our technicians test for trip current and time to ensure they are within specified limits. To satisfy safety obligations, we recommend safety switch tests are done biannually.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 ">
                  RCD tests to ensure compliance include:
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">1.</span>
                    <span className="text-lg text-gray-700">The push button test</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">2.</span>
                    <span className="text-lg text-gray-700">Visual inspection and operational testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">3.</span>
                    <span className="text-lg text-gray-700">Tripping time to test for trip time as prescribed by Australian standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">4.</span>
                    <span className="text-lg text-gray-700">Two fast trip and two non-trip tests Tripping current test</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">5.</span>
                    <span className="text-lg text-gray-700">Inspection of switchboard door, hinge, lock and weatherproof seal</span>
                  </li>
                </ul>
                <Link href="/request-a-quote">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </Layout>
  );
};

export default RCDSafetySwitches;

