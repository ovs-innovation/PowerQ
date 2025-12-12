import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const { storeCustomizationSetting } = useGetSetting();

  return (
    <>
      <div className="bg-white sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="h-16 flex items-center gap-6">
            {/* Logo left */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative w-32 h-10">
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

            {/* Nav right with service-style font */}
            <nav className="ml-auto flex items-center gap-6 text-[15px] font-semibold text-gray-900 relative">
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-red-500 transition">
                About Us
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setOpenService(true)}
                onMouseLeave={() => setOpenService(false)}
              >
                <button
                  className="flex items-center gap-1 hover:text-red-500 transition no-green-button"
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
              <Link href="/pricing" className="hover:text-red-500 transition">
                Pricing
              </Link>
              <Link href="/faq" className="hover:text-red-500 transition">
                Faq
              </Link>
              <Link href="/request-a-quote" className="hover:text-red-500 transition">
                Request A Quote
              </Link>
              <Link href="/blog" className="hover:text-red-500 transition">
                Blog
              </Link>
              <Link href="/contact-us" className="hover:text-red-500 transition">
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
