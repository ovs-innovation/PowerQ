import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-900 pt-10 pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/full-logo.png"
                alt="PowerQ"
                width={180}
                height={60}
                className="w-auto h-14"
                priority
              />
            </div>
            <p className="text-sm leading-7">
              At PowerQ, we specialize in providing top-quality fire extinguishers
              and comprehensive fire safety services. Whether you’re looking to
              purchase reliable fire protection equipment or need expert
              installation and maintenance, we’ve got you covered.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="text-sm space-y-2">
              <p className="font-medium">0433SAFETY / 0433723389</p>
              <p className="font-medium">info@powerq.com.au</p>
              <p>
                43 Wonnangatta Crescent,
                <br />
                Weir Views VIC 3338
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/service/electrical-testing-tagging" className="hover:text-red-600">Electrical Testing &amp; Tagging</Link></li>
              <li><Link href="/service/fire-extinguishers" className="hover:text-red-600">Fire Extinguishers</Link></li>
              <li><Link href="/service/rcd-safety-switches" className="hover:text-red-600">RCD/Safety Switches</Link></li>
              <li><Link href="/service/three-phase-testing" className="hover:text-red-600">Three Phase Testing</Link></li>
              <li><Link href="/service/microwave-testing" className="hover:text-red-600">Microwave Testing</Link></li>
              <li><Link href="/service/emergency-exit-light-testing" className="hover:text-red-600">Emergency Exit Light Testing</Link></li>
              <li><Link href="/service/smoke-alarm-service" className="hover:text-red-600">Smoke Alarm Service</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6 md:col-span-1">
            <div>
              <h3 className="text-lg font-semibold">General Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-red-600">About us</Link></li>
                <li><Link href="/contact-us" className="hover:text-red-600">Contact us</Link></li>
                <li><Link href="/request-a-quote" className="hover:text-red-600">Request a Quote</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-red-600">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-red-600">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

