import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";

const EmergencyExitLightTesting = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout title="Emergency Exit Light Testing" description="Professional emergency exit light testing and servicing in Melbourne">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/emergency-exit-sign-with-siren-light-direction-emergency-exit_35913-3108-1024x652.jpg.bv.webp?bv_host=www.powerq.com.au"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24 lg:py-32 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Emergency Exit Light Testing In Melbourne
          </h1>
          <div className="w-32 sm:w-40 md:w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* We Believe Section */}
      <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  We at PowerQ Test & Tag Melbourne believe in making relations
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mb-4 sm:mb-6">
                  At PowerQ Test & Tag we are committed to building strong and trusting partnerships. Located in Melbourne, we are your go-to electrical testing and tagging experts providing services that comply with Victoria's regulations. As a team of skilled professionals, we have the power to provide you with remarkable service while also giving you complete assurance that professional test and tag standards are met. Rest easy knowing that our public liability cover and expertise will not let you down when it comes to test and tag services.
                </p>
                <Link href="/contact-us">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase text-sm sm:text-base w-full sm:w-auto">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/green-emergency-exit-sign-ceiling_53876-123089.jpg.bv.webp"
                  alt="Exit Door"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Light Testing Section - Dark Background */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} order-2 lg:order-1`}>
              <div className="relative overflow-hidden lg:h-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/emergency-exit-sign-with-siren-light-direction-emergency-exit_35913-3108-1024x652.jpg.bv.webp?bv_host=www.powerq.com.au"
                  alt="Emergency Exit Sign"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} order-1 lg:order-2`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                Exit Light Testing Melbourne
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mb-3">
                A business should always be confident that the emergency exit light and exit signs are working as expected. Nobody would like a situation at work where emergency lighting or exit signs do not turn on in the event of a power failure or evacuation. Attention is required as people at any workplace should be able to find their way out of the premises in case of an emergency. This is a requirement that is looked at by work covers and insurance providers in case of any workplace incident involving people using emergency light or exit. PowerQ Test & Tag Melbourne offers help to have your compliance for exit and emergency light testing in Melbourne appropriately ticked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regulations Section - Dark Background */}
      <div className="bg-gray-200 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-3">
            It is a regulation In Victoria for businesses to have emergency lights working at the exit doors. Schedule a full test of the emergency lights annually. You need a professional to advice you properly on these rules and regulations to ensure safefy of you and your employees. As for example, If your emergency light setup is supposed to give you two full hours of light in the event of loss of power, the test has to last for at least two hours.
          </p>
        </div>
      </div>

      {/* Exit Light Testing Details Section */}
      <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  The exit light testing
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 mb-4 sm:mb-6">
                The exit light testing is done to ensure that the emergency exit lights stay illuminated for at least 90 minutes on battery power. The test is not complicated as mostly the emergency exit light comes with a small "push to test" button to test the light illuminated while on battery power.
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                The process involves these steps:
                </h3>
                <ol className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">1.</span>
                    <span className="text-base sm:text-lg text-gray-700">Testing of all lights to be operational under mains power.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">2.</span>
                    <span className="text-base sm:text-lg text-gray-700">Checking and replacing any failing mains-powered globes/lights.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">3.</span>
                    <span className="text-base sm:text-lg text-gray-700">A 90-minute mains isolation test to check battery backup.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-red-600 font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">4.</span>
                    <span className="text-base sm:text-lg text-gray-700">During the isolation test, checking to ensure no emergency lighting has failed.</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 lg:h-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[460px]">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Emergency-Exit-Light-Testing.jpg.bv.webp?bv_host=www.powerq.com.au"
                  alt="Emergency Exit Light with Control Panel"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Overlay insets showing control panel details */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                  <div className="text-xs text-gray-700 font-semibold">TEST Button</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmergencyExitLightTesting;
