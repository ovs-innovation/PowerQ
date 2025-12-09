import React, { useState } from "react";
import Image from "next/image";
import Layout from "@layout/Layout";

const services = [
  "Electrical Testing & Tagging",
  "Fire Extinguishers",
  "RCD/Safety Switches",
  "Three Phase Testing",
  "Microwave Testing",
  "Emergency Exit Light Testing",
  "Smoke Alarm Service",
];

const RequestAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    schedule: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, submit to API or email service.
    // For now, just log.
    console.log("Quote request:", formData);
    alert("Thank you! We have received your request.");
  };

  return (
    <Layout title="Request A Quote" description="Request a quote for Test & Tag services in Melbourne">
      {/* Hero */}
      <div className="relative bg-[#111] text-white min-h-[380px] flex items-center">
        <Image
          src="https://www.powerq.com.au/wp-content/uploads/al_opt_content/IMAGE/www.powerq.com.au/wp-content/uploads/2025/02/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15086-768x512.jpg.bv.webp"
          alt="Request a Quote"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 py-16 w-full text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 uppercase">
            Request A Quote
          </h1>
          <div className="w-40 h-0.5 bg-white item-center mx-auto" />
        </div>
      </div>

      {/* Form + Info */}
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 py-12 lg:py-16 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Request a Quote - Equipment Test and Tag in Melbourne
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
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

              <div className="flex items-center justify-start">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white border border-red-200 rounded-xl shadow-lg p-6 flex flex-col items-center gap-4">
            <div className="relative w-full h-[280px]">
              <Image
                src="https://tse4.mm.bing.net/th/id/OIP.IHdt5om2-oXm0t8NfXTNWgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Need our services"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm text-gray-700">
              Need our services? Share your details and we’ll get back to you with a tailored quote for your
              Test &amp; Tag requirements in Melbourne.
            </p>
            <a
              href="tel:0433723389"
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RequestAQuote;

