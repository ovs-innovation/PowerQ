import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@layout/Layout";
import { FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaFireAlt, FaHeartbeat, FaHome, FaBatteryHalf } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";

const SmokeAlarmService = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout title="Smoke Alarm Service" description="Professional smoke alarm testing and servicing in Melbourne">
      {/* Hero Section */}
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://tse1.mm.bing.net/th/id/OIP.xKtOsKOJ7RHAc2zssfcVIwHaEK?cb=ucfimg2&ucfimg=1&w=1366&h=768&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Smoke Alarm Service"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Smoke Alarm Service In Melbourne
          </h1>
          <div className="w-52 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      {/* We Believe Section - Dark Background */}
      <div className="bg-red-400 text-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl lg:text-3xl font-bold mb-6">
                We at PowerQ Test & Tag Melbourne believe in making relations
              </h2>
              <p className="text-lg text-gray-200 leading-8 mb-6">
                Based in Melbourne, PowerQ Test & Tag Melbourne offers <span className="text-blue-400 underline">electrical testing</span> and <span className="text-blue-400 underline">tagging</span> services in Melbourne with full compliance to test and tag regulations that apply for Victoria. We are an experienced team of smart and skilled professionals, with full public liability cover and competence in test and tag services. We assure you complete peace of mind when you engage us as we follow all test and tag regulations that apply to your industry. We pride ourselves on delivering prompt, reliable, and affordable services tailored to meet your specific needs. Trust PowerQ Test & Tag Melbourne to ensure the safety and compliance of your electrical equipment.
              </p>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/WEB-DEVELOPMENT-4-1024x512.png.bv.webp?bv_host=www.powerq.com.au"
                  alt="Smoke Alarm"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inspect and Test Section */}
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/fire-gda479faea_640.jpg.bv.webp?bv_host=www.powerq.com.au"
                  alt="First Alert Smoke Alarm"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Inspect and Test Stand Alone Smoke Alarms
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why should I have a smoke alarm?
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      When you're asleep you lose your sense of smell. A working smoke alarm will alert you if there is smoke from a fire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      A small fire can grow to involve an entire room in two to three minutes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      A working smoke alarm provides early warning and time to escape safely.
                    </span>
                  </li>
                </ul>
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

      {/* Smoke Alarms Are Compulsory Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Smoke Alarms Are Compulsory In Every Home
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            By law, all residential properties must have working smoke alarms complying with Australian Standards AS 3786.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-7 text-center">
                Residential homes constructed after 1 August 1997, or homes which have undergone a major renovation or extension, must have smoke alarms connected to 240-volt mains power with battery backup.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-7 text-center">
                Residential homes constructed before 1 August 1997 may have battery-operated smoke alarms.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-7 text-center">
                Residential homes constructed after 1 May 2014, or homes which have undergone a major renovation or extension, must have smoke alarms interconnected (if there is a requirement for more than one smoke alarm).
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl p-6 shadow-lg">
           
            <p className="text-lg text-gray-700 leading-7">
            New Smoke Alarm Laws in Victoria. The recently changed Residential Tenancy Regulations has made it mandatory for landlords to conduct regular gas and electric safety checks on their rental properties. Gas and electric safety checks must be done at least every 2 years and smoke alarms must be tested annually.
            </p>
          </div>
        </div>
      </div>

      {/* If You Don't Have Smoke Alarm Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gray-100 rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Smoke alarm facts
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      If you don't have a working smoke alarm installed in your home and a fire occurs:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                          <FaFireAlt className="text-2xl" />
                        </div>
                        <span className="text-lg text-gray-700">
                          You are more likely to incur property loss and damage.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      All smoke alarms:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                          <FaHeartbeat className="text-2xl" />
                        </div>
                        <span className="text-lg text-gray-700">
                          You are more likely to suffer serious injury or death.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                          <FaHome className="text-2xl" />
                        </div>
                        <span className="text-lg text-gray-700">
                          Need to be tested monthly.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                          <FaBatteryHalf className="text-2xl" />
                        </div>
                        <span className="text-lg text-gray-700">
                          Contain a battery.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/03/Need-to-be-replaced-after-10-years.jpg.bv.webp?bv_host=www.powerq.com.au"
                  alt="House Fire"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
                {/* Red Info Box Overlay */}
                <div className="absolute top-6 right-6 bg-red-600 rounded-xl p-5 shadow-xl max-w-[360px]">
                  <ul className="space-y-3 text-white text-lg font-semibold">
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-white" />
                      <span>Need to be cleaned annually</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle className="text-white" />
                      <span>Need to be replaced after 10 years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smoke Alarm Location and Interconnection Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Smoke alarms should not be located in kitchens and bathrooms.
              </h2>
              <ol className="space-y-4 ml-6">
                <li className="text-lg text-gray-700 leading-7">
                  <span className="font-semibold">1.</span> The Australasian Fire and Emergency Services Council (AFAC) recommends smoke alarms be replaced with interconnected alarms in all sleeping areas, living spaces, paths of travel (hallways, stairways) and garages if they are under the home's main roof.
                </li>
                <li className="text-lg text-gray-700 leading-7">
                  <span className="font-semibold">2.</span> New Smoke Alarm Laws in Victoria. The recently changed Residential Tenancy Regulations has made it mandatory for landlords to conduct regular gas and electric safety checks on their rental properties. Gas and electric safety checks must be done at least every 2 years and smoke alarms must be tested annually.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Smoke alarms powered by 240-volt mains must be interconnected by an electrician.
              </h2>
              <p className="text-lg text-gray-700 leading-7 ml-6">
                <span className="font-semibold">3.</span> Battery operated, including long life battery alarms, can be interconnected by purchasing interconnected wireless smoke alarms. Electricians are not required to install these smoke alarms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Smoke Alarms Must Be Installed In Section */}
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Smoke Alarms Must Be Installed In:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                All residential buildings where people sleep
              </h3>
              <p className="text-lg text-gray-700 text-center">
                (houses, units, flats and townhouses).
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Buildings used for short term accommodation
              </h3>
              <p className="text-lg text-gray-700 leading-7 text-center">
                (boarding house, guest house, hostel, bed and breakfast accommodation, cabins in caravan parks, tourist parks, holiday resorts, and similar tourist accommodation Victorian fire and rescue services recommend smoke alarms connected to 240-volt mains power with a battery backup or alarms powered by a 10 year long-life battery. When more than one smoke alarm is installed, they should be interconnected so that when any alarm activates, all smoke alarms will sound.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions:
          </h2>
          <div className="space-y-4">
            <Disclosure defaultOpen>
              {({ open }) => (
                <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                  <Disclosure.Button className="flex w-full justify-between items-center p-6 text-left">
                    <span className="text-lg font-semibold text-gray-900">
                      Why should I test my smoke alarm?
                    </span>
                    {open ? (
                      <FaChevronUp className="text-green-600 text-xl" />
                    ) : (
                      <FaChevronDown className="text-green-600 text-xl" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-6 text-gray-700">
                    A working smoke alarm is your first line of defence in the event of a fire. You should test your smoke alarm regularly to ensure the battery is not flat and that the alarm will sound when you need it most.
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                  <Disclosure.Button className="flex w-full justify-between items-center p-6 text-left">
                    <span className="text-lg font-semibold text-gray-900">
                      Why does my smoke alarm beep once every 60 seconds or intermittently?
                    </span>
                    {open ? (
                      <FaChevronUp className="text-green-600 text-xl" />
                    ) : (
                      <FaChevronDown className="text-green-600 text-xl" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-6 text-gray-700">
                  This could mean that the battery is going flat and needs replacing.
                  Note: Replace the entire smoke alarm if it still beeps after installing a new battery.
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                  <Disclosure.Button className="flex w-full justify-between items-center p-6 text-left">
                    <span className="text-lg font-semibold text-gray-900">
                      Why do 240-volt smoke alarms have a battery?
                    </span>
                    {open ? (
                      <FaChevronUp className="text-green-600 text-xl" />
                    ) : (
                      <FaChevronDown className="text-green-600 text-xl" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-6 text-gray-700">
                  240-volt smoke alarms connected to mains power are required to have a battery to provide back-up power in the event of a power outage.
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                  <Disclosure.Button className="flex w-full justify-between items-center p-6 text-left">
                    <span className="text-lg font-semibold text-gray-900">
                      What can I do if my smoke alarm operates every time I make toast or have a shower?
                    </span>
                    {open ? (
                      <FaChevronUp className="text-green-600 text-xl" />
                    ) : (
                      <FaChevronDown className="text-green-600 text-xl" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-6 text-gray-700">
                  Do not remove the battery. A primary reason why smoke alarms do not operate when needed is because batteries have been removed after repeated false alarms. What you should do is:
                  <br />
                   Check the type of smoke alarm installed – if it is an ionisation type, consider replacing it with a photoelectric type smoke alarm.
                  <br />
                  Consider installing an exhaust fan in the kitchen or bathroom.
                  <br />
                  Consider relocating the smoke alarm away from the kitchen or bathroom.
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </div>

      {/* Rental Properties Section */}
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
            Rental Properties:
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-7 mb-4">
              Residential rental providers are responsible for fitting smoke alarms in rented properties.1
            </p>
            <p className="text-lg text-gray-700 leading-7 mb-4">
              Victoria's Residential Tenancies Act, Section 68 (1), states "A residential rental provider must ensure that rented premises are provided and maintained in good repair." A landlord must repair or replace a non-functioning smoke alarm once notified by the tenant.2
              </p>
            <p className="text-lg text-gray-700 leading-7 mb-6">
              It is the responsibility of renters to test the smoke alarm each month and it is the responsibility of the landlord or owner to clean the smoke alarm and replace the battery annually (if applicable)
            </p>
            <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
              <p>1.Consumer Affairs Victoria, Renting a home: <br />  A guide for tenants, p. 20, 32</p>
              <p>2. Residential Tenancies Amendment Act 2018</p>
              <p>3. Australasian Fire and Emergency Service</p>
              <p>4.  Authorities Council, Smoke Alarm in Residential Accommodation, 2018, p. 4.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What is Included/Excluded Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What is included in our smoke alarm service:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Safety check</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Battery replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Cleaning of smoke alarm for better protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Smoke alarm positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Digitally recorded</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Service report</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What is excluded from our smoke alarm inspection?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaTimesCircle className="text-red-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">We do not install any new or replace any old smoke alarm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimesCircle className="text-red-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">We do not connect or run new wiring to connect new smoke alarm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTimesCircle className="text-red-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">We do not service or replace any smoke alarms that are preinstalled but not in service or out of date.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SmokeAlarmService;
