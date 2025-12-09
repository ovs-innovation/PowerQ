import React, { useState } from "react";
import Image from "next/image";
import Layout from "@layout/Layout";
import { FiClock, FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

const services = [
  "Electrical Testing & Tagging",
  "Fire Extinguishers",
  "RCD/Safety Switches",
  "Three Phase Testing",
  "Microwave Testing",
  "Emergency Exit Light Testing",
  "Smoke Alarm Service",
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    schedule: "",
    message: "",
  });
  const [notRobotChecked, setNotRobotChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notRobotChecked) {
      alert("Please confirm you're not a robot.");
      return;
    }
    console.log("Contact request:", formData);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <Layout title="Contact Us" description="Get in touch with PowerQ">
      <div className="relative bg-[#111] text-white min-h-[380px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/Microwave-Testing.jpg.bv.webp"
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-24 lg:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <div className="w-40 h-0.5 bg-white mx-auto" />
        </div>
      </div>

      <div className="bg-[#f7f7f7] py-12 px-4 sm:px-10">
        <div className="max-w-screen-2xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl shadow-md border border-gray-300 p-8 text-center space-y-3 hover:shadow-lg hover:border-green-500/30 transition-all duration-300 group">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl group-hover:bg-green-100 group-hover:scale-110 transition-transform duration-300">
                <FiClock />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Our Hours</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Mon - Fri: 9am - 7pm</p>
              <p className="text-sm text-gray-600">Sat - Sun: 10am - 2pm</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-300 p-8 text-center space-y-3 hover:shadow-lg hover:border-green-500/30 transition-all duration-300 group">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl group-hover:bg-green-100 group-hover:scale-110 transition-transform duration-300">
                <FiMapPin />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Location</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              43 Wonnangatta Cres, Melton South
              <br />
              VIC 3338, Australia
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-300 p-8 text-center space-y-3 hover:shadow-lg hover:border-green-500/30 transition-all duration-300 group">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl group-hover:bg-green-100 group-hover:scale-110 transition-transform duration-300">
                <FiPhoneCall />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
            <p className="text-sm text-gray-600">Phone: 0433SAFETY / 0433723389</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-300 p-8 text-center space-y-3 hover:shadow-lg hover:border-green-500/30 transition-all duration-300 group">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl group-hover:bg-green-100 group-hover:scale-110 transition-transform duration-300">
                <FiMail />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Email</h3>
            <p className="text-sm text-gray-600">info@powerq.com.au</p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 py-12 lg:py-16 grid lg:grid-cols-2 gap-8">
          <div className="w-full h-[520px] rounded-lg overflow-hidden shadow border">
            <iframe
              title="PowerQ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.2553889358!2d144.577!3d-37.688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6fbce4f4e0fbf%3A0x9c7c44a1e1e0e7e7!2s43%20Wonnangatta%20Cres%2C%20Melton%20South%20VIC%203338%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-300 p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none bg-white"
                  required
                >
                  <option value="">Select Service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />

              <select
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none bg-white"
                required
              >
                <option value="">When do you want service to be done</option>
                <option>As soon as possible</option>
                <option>Within 1-2 weeks</option>
                <option>Within a month</option>
                <option>Flexible / Not sure</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (Optional)"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />

              <div className="flex justify-start">
                <button
                  type="button"
                  onClick={() => setNotRobotChecked((v) => !v)}
                  role="checkbox"
                  aria-checked={notRobotChecked}
                  className={`inline-flex items-center gap-3 bg-white border rounded px-3 py-2.5 shadow-sm cursor-pointer hover:shadow transition-shadow ${
                    notRobotChecked ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 border-2 rounded-sm flex-shrink-0 flex items-center justify-center ${
                      notRobotChecked ? "border-blue-500 bg-blue-500" : "border-gray-400 bg-white"
                    }`}
                  >
                    {notRobotChecked && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6.5 4.5 9 10 3.5"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <span className="text-sm text-gray-900 font-normal whitespace-nowrap">I'm not a robot</span>

                  <div className="flex items-center gap-1.5 ml-1">
                    <div className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L16 6H13V10H11V6H8L12 2Z" fill="#4285F4" />
                        <path d="M12 22L8 18H11V14H13V18H16L12 22Z" fill="#9E9E9E" />
                      </svg>
                    </div>

                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] text-gray-900 font-medium">reCAPTCHA</span>
                      <span className="text-[9px] text-gray-500">Privacy - Terms</span>
                    </div>
                  </div>
                </button>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

