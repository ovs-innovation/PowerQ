import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// internal import
import useGetSetting from "@hooks/useGetSetting";

const services = [
  { label: "Electrical Testing & Tagging", href: "/service/electrical-testing-tagging" },
  { label: "Fire Extinguishers", href: "/service/fire-extinguishers" },
  { label: "RCD/Safety Switches", href: "/service/rcd-safety-switches" },
  { label: "Three Phase Testing", href: "/service/three-phase-testing" },
  { label: "Microwave Testing", href: "/service/microwave-testing" },
  { label: "Emergency Exit Light Testing", href: "/service/emergency-exit-light-testing" },
  { label: "Smoke Alarm Service", href: "/service/smoke-alarm-service" },
];

const Navbar = () => {
  const router = useRouter();
  const [openService, setOpenService] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const { storeCustomizationSetting } = useGetSetting();

  return (
    <>
      <div className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="h-14 sm:h-16 flex items-center gap-4 sm:gap-6">
            {/* Logo left */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative w-24 h-8 sm:w-32 sm:h-10">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-full object-contain"
                  priority
                  src={"/logo/full-logo.png" || storeCustomizationSetting?.navbar?.logo}
                  alt="PowerQ"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex ml-auto items-center gap-4 xl:gap-6 text-sm xl:text-[15px] font-semibold text-gray-900 relative">
              <Link href="/" className="hover:text-red-500 transition whitespace-nowrap">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-red-500 transition whitespace-nowrap">
                About Us
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setOpenService(true)}
                onMouseLeave={() => setOpenService(false)}
              >
                <button
                  className="flex items-center gap-1 hover:text-red-500 transition no-green-button whitespace-nowrap"
                  onClick={() => setOpenService((prev) => !prev)}
                >
                  Service <span className="text-xs">▼</span>
                </button>
                <div
                  className={`absolute right-0 top-full pt-2 w-72 bg-white text-gray-900 shadow-xl rounded-md overflow-hidden z-30 transition-all duration-200 ease-out origin-top ${
                    openService
                      ? "opacity-100 scale-100 visible translate-y-0"
                      : "opacity-0 scale-95 invisible pointer-events-none translate-y-1"
                  }`}
                >
                  {services.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                      onClick={() => setOpenService(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/pricing" className="hover:text-red-500 transition whitespace-nowrap">
                Pricing
              </Link>
              <Link href="/faq" className="hover:text-red-500 transition whitespace-nowrap">
                Faq
              </Link>
              <Link href="/request-a-quote" className="hover:text-red-500 transition whitespace-nowrap">
                Request A Quote
              </Link>
              <Link href="/blog" className="hover:text-red-500 transition whitespace-nowrap">
                Blog
              </Link>
              <Link href="/contact-us" className="hover:text-red-500 transition whitespace-nowrap">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden ml-auto text-gray-900 hover:text-red-500 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="py-4 space-y-1 border-t border-gray-200">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="px-4">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                >
                  <span>Service</span>
                  <span className={`transform transition-transform ${mobileServiceOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileServiceOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-1">
                    {services.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                        onClick={() => {
                          setMobileServiceOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/pricing"
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Faq
              </Link>
              <Link
                href="/request-a-quote"
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request A Quote
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500 transition rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
