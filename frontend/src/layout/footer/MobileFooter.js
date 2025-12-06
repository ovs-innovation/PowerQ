import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FiHome, FiUser, FiAlignLeft } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

//internal imports
import { getUserSession } from "@lib/auth";
import { SidebarContext } from "@context/SidebarContext";
import CategoryDrawer from "@components/drawer/CategoryDrawer";

const MobileFooter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { toggleCategoryDrawer } = useContext(SidebarContext);
  const userInfo = getUserSession();
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`);
      setSearchText("");
      setShowSearch(false);
    } else {
      router.push(`/`);
      setSearchText("");
      setShowSearch(false);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full">
        <CategoryDrawer className="w-6 h-6 drop-shadow-xl" /> 
      </div>
      <footer className="lg:hidden fixed z-30 top-0 bg-white flex items-center justify-between w-full h-20 sm:h-24 px-3 sm:px-10">
        <button
          aria-label="Bar"
          onClick={toggleCategoryDrawer}
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-[#EF4036]">
            <FiAlignLeft className="w-6 h-6 drop-shadow-xl" />
          </span>
        </button>
        <Link
          href="/"
          className="flex items-center justify-center"
          rel="noreferrer"
          aria-label="Home"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24">
            <Image
              src="/logo/full-logo.png"
              alt="PowerQ"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 96px"
              quality={95}
              priority
            />
          </div>
        </Link>
        <button
          aria-label="Search"
          onClick={() => setShowSearch((prev) => !prev)}
          className="h-9 w-9 flex items-center justify-center text-[#EF4036] text-lg"
        >
          <IoSearchOutline className="w-6 h-6 drop-shadow-xl" />
        </button>
        {/* <button
          aria-label="User"
          type="button"
          className="text-xl text-[#EF4036] indicator justify-center"
        >
          {userInfo?.image ? (
            <Link href="/user/dashboard" className="relative top-1 w-6 h-6">
              <Image
                width={29}
                height={29}
                src={userInfo.image}
                alt="user"
                className="rounded-full"
              />
            </Link>
          ) : userInfo?.name ? (
            <Link
              href="/user/dashboard"
              className="leading-none font-bold font-serif block"
            >
              {userInfo?.name[0]}
            </Link>
          ) : (
            <Link href="/auth/login">
              <FiUser className="w-6 h-6 drop-shadow-xl" />
            </Link>
          )}
        </button> */}
      </footer>
      {showSearch && (
        <div className="fixed z-30 top-16 left-0 w-full bg-white px-3 py-2 shadow">
          <form
            onSubmit={handleSubmit}
            className="relative pr-12 bg-white overflow-hidden shadow-sm rounded-md w-full"
          >
            <label className="flex items-center py-0.5">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-[#F3F4F6] focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                placeholder={t("search-placeholder")}
              />
            </label>
            <button
              aria-label="Search"
              type="submit"
              className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
            >
              <IoSearchOutline />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(MobileFooter), { ssr: false });
