import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-900 pt-10 pb-16 relative">
      {/* Red vertical bar on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#ED1C24]"></div>
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/full-logo.png"
                alt="PowerQ"
                width={260}
                height={90}
                className="w-auto h-20"
                priority
              />
            </div>
            <p className="text-sm leading-7 text-gray-700">
              At PowerQ, we specialize in providing top-quality fire extinguishers
              and comprehensive fire safety services. Whether you're looking to
              purchase reliable fire protection equipment or need expert
              installation and maintenance, we've got you covered.
            </p>
            
            <div className="flex gap-3 pt-2">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#ED1C24] text-white flex items-center justify-center hover:bg-[#C53030] transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#ED1C24] text-white flex items-center justify-center hover:bg-[#C53030] transition"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#ED1C24] text-white flex items-center justify-center hover:bg-[#C53030] transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-black">Contact Info</h3>
            <div className="text-sm space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <FiPhoneCall className="text-[#ED1C24] mt-1 flex-shrink-0" />
                <a href="tel:0433723389" className="font-medium hover:text-[#ED1C24] transition">0433SAFETY / 0433723389</a>
              </div>
              <div className="flex items-start gap-2">
                <FiMail className="text-[#ED1C24] mt-1 flex-shrink-0" />
                <p className="font-medium">info@powerq.com.au</p>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className="text-[#ED1C24] mt-1 flex-shrink-0" />
                <p>
                  43 Wonnangatta Crescent,
                  <br />
                  Weir Views VIC 3338
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-black">Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/service/electrical-testing-tagging" className="hover:text-[#ED1C24] transition">Electrical Testing &amp; Tagging</Link></li>
              <li><Link href="/service/fire-extinguishers" className="hover:text-[#ED1C24] transition">Fire Extinguishers</Link></li>
              <li><Link href="/service/rcd-safety-switches" className="hover:text-[#ED1C24] transition">RCD/Safety Switches</Link></li>
              <li><Link href="/service/three-phase-testing" className="hover:text-[#ED1C24] transition">Three Phase Testing</Link></li>
              <li><Link href="/service/microwave-testing" className="hover:text-[#ED1C24] transition">Microwave Testing</Link></li>
              <li><Link href="/service/emergency-exit-light-testing" className="hover:text-[#ED1C24] transition">Emergency Exit Light Testing</Link></li>
              <li><Link href="/service/smoke-alarm-service" className="hover:text-[#ED1C24] transition">Smoke Alarm Service</Link></li>
            </ul>
          </div>

          {/* General Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-black">General Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/" className="hover:text-[#ED1C24] transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#ED1C24] transition">About us</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#ED1C24] transition">Contact us</Link></li>
              <li><Link href="/request-a-quote" className="hover:text-[#ED1C24] transition">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-black">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/privacy-policy" className="hover:text-[#ED1C24] transition">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#ED1C24] transition">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

