import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall, FiClipboard } from "react-icons/fi";
import Layout from "@layout/Layout";

const ElectricalTestingTagging = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout title="Electrical Testing & Tagging" description="Professional electrical testing and tagging services in Melbourne">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/electrician-working_53876-16064.jpg.bv.webp"
          alt="Electrical Cord Test and Tag"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Electrical Cord Test and Tag in Melbourne
          </h1>
          <div className="w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* Why Do Testing Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why do Testing and Tagging
              </h2>
              <p className="text-lg text-gray-700 leading-8 mb-6">
              Testing and tagging of equipment is essential in order to ensure that they operate safely and do not pose a risk to people, property or the work environment. Testing should be conducted regularly as electrical appliances have the potential to cause serious injury or death if they are not maintained properly. Even events which are less severe can result in skin burns, organ damage, etc. To stay safe, employers and self-employed personnel must have their equipment tested/tagged regularly. Doing so can help avoid potentially fatal results and keep workers safe. If your employees regularly use electrical equipment, testing and tagging is a must! <br/>
              We strongly suggest testing and tagging as a necessary precaution for any equipment in use.
              </p>
              {/* <Link href="/request-a-quote">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  READ MORE
                </button>
              </Link> */}
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15086-768x512.jpg.bv.webp"
                  alt="Electrical testing"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Electrical Cord Testing Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Electrical-Cord-Testing-in-Melbourne-1024x682.jpg.bv.webp?bv_host=www.powerq.com.au"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Electrical Cord Testing Melbourne
                </h2>
                <p className="text-lg text-gray-700 leading-8 mb-6">
                  Are you looking for a trusted Electrical Test and Tag services in Melbourne? At{" "}
                  <Link
                    href="/"
                    className="text-red-600 font-semibold hover:text-red-700 underline"
                  >
                    PowerQ Test &amp; Tag Melbourne
                  </Link>
                  , we provide a complete inspection and check on electrical cords for any bent or damaged pins, missing securing nuts and more. We also ensure that the form of the cord has not been twisted, there is no discolouration, foreign objects attached to the outer insulation of the cord. Upon completion of testing, we provide a full report with all test results and actions taken.
                </p>
               
                <p className="text-lg text-gray-900 font-semibold leading-8">
                  We can also inspect other equipment to ensure complete safety at workplace.
                </p>
                <Link href="/contact-us">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Contact Us
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

export default ElectricalTestingTagging;

