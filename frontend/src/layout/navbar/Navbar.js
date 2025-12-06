import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FiUser, FiBell } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import { IoSearchOutline } from "react-icons/io5";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";
import NavbarPromo from "@layout/navbar/NavbarPromo";
import { SidebarContext } from "@context/SidebarContext";

const Navbar = () => {
  const { t, lang } = useTranslation("common");
  const [searchText, setSearchText] = useState("");
  // Cart removed
  const router = useRouter();

  const userInfo = getUserSession();

  const { storeCustomizationSetting } = useGetSetting();

  const handleSubmit = (e) => {
    e.preventDefault();

    // return;
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };

  return (
    <>
      {/* CartDrawer removed */}
      <div className="bg-white sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
            <Link
              href="/"
              className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
            >
              <div className="relative w-33 h-11">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-12"
                  priority
                  src={"/logo/full-logo.png" || storeCustomizationSetting?.navbar?.logo}
                  alt="PowerQ"
                />
              </div>
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
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
                      className="outline-none text-xl absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none text-[#EF4036]"
                    >
                      <IoSearchOutline />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="pr-5 text-[#EF4036] text-2xl font-bold"
                aria-label="Alert"
              >
                <FiBell className="w-6 h-6 drop-shadow-xl" />
              </button>
             
              <button
                className="pl-5 text-[#EF4036] text-2xl font-bold"
                aria-label="Login"
              >
                {userInfo?.image ? (
                  <Link
                    href="/user/dashboard"
                    className="relative top-1 w-6 h-6"
                  >
                    <Image
                      width={29}
                      height={29}
                      src={userInfo?.image}
                      alt="user"
                      className="bg-white rounded-full"
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
              </button>
            </div> */}
          </div>
        </div>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
