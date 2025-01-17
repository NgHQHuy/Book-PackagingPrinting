"use client";

import u_avatar_default from "@/assets/images/u_avatar_default.jpg";

import { useAppContext } from "@/context/AppContext";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  BookOpenIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppHeader() {
  const pathName = usePathname();
  const { user, setUser } = useAppContext();

  const handleLogout = () => {
    setUser({ role: "guest" });
    sessionStorage.removeItem("_u");
  };

  return (
    <nav
      className={`h-14 flex items-center justify-between px-2 bg-white text-black ${
        pathName !== "/login" && pathName !== "/register" ? "" : "hidden"
      }`}
    >
      <div>
        <Link href="/" className="outline-none">
          <span>LOGO</span>
        </Link>
      </div>
      <div className="flex-grow px-4  md:max-w-[500px]">
        <div className="w-[100%] h-8 px-3 flex items-center border border-gray-500 rounded-full">
          <input
            type="text"
            className="w-full outline-none bg-transparent placeholder:text-sm"
            placeholder="Search"
          />
          <MagnifyingGlassIcon className="size-4 cursor-pointer text-gray-500" />
        </div>
      </div>
      <div className="flex-grow h-full items-center justify-start flex-nowrap text-sm font-[family-name:var(--font-geist-mono)] hidden md:flex">
        <Link
          href="/about"
          className={`group h-full flex items-center cursor-pointer shadow-[inset_0_-2px_0_0_rgba(0,0,0,1)] ${
            !pathName.startsWith("/about") ? "shadow-none" : ""
          }`}
        >
          <span className="p-1 group-hover:bg-slate-100 group-hover:rounded-md">About us</span>
        </Link>
        <div className="mx-2">|</div>
        <Link
          href="/book"
          className={`group h-full flex items-center cursor-pointer shadow-[inset_0_-2px_0_0_rgba(0,0,0,1)] ${
            !pathName.startsWith("/book") ? "shadow-none" : ""
          }`}
        >
          <span className="p-1 group-hover:bg-slate-100 group-hover:rounded-md">Book</span>
        </Link>
        <div className="mx-2">|</div>
        <Link
          href="/packaging"
          className={`group h-full flex items-center cursor-pointer shadow-[inset_0_-2px_0_0_rgba(0,0,0,1)] ${
            !pathName.startsWith("/packaging") ? "shadow-none" : ""
          }`}
        >
          <span className="p-1 group-hover:bg-slate-100 group-hover:rounded-md">Packaging</span>
        </Link>
      </div>
      {user.role === "guest" && (
        <div className="h-8 px-2 items-center border-l-[1px] hidden lg:flex">
          <Link
            href="/login"
            className="hover:underline hover:underline-offset-4"
          >
            <span>Log in</span>
          </Link>
          <span className="mx-1 text-gray-300">-</span>
          <Link
            href="/register"
            className="p-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-200"
          >
            <span>Create account</span>
          </Link>
        </div>
      )}
      {user.role !== "guest" && (
        <div className="px-4 ml-8 hover:text-blue-500 hidden lg:flex">
          <Link href="/cart">
            <ShoppingCartIcon className="size-6" />
          </Link>
        </div>
      )}

      <div className="group w-fit h-[40px] flex items-center overflow-hidden cursor-pointer">
        {user.role !== "guest" && (
          <Image
            src={user.avatar ? user.avatar : u_avatar_default}
            alt="user-avatar"
            width={40}
            height={40}
            objectFit="cover"
            className="rounded-[50%] w-[40px] h-[40px]  hidden lg:block"
          />
        )}

        <Bars3Icon className="size-8 lg:hidden" />

        <div className="absolute w-56 top-10 pt-5 px-2 right-0 box-border opacity-0 invisible transform -translate-y-2 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
          <div
            className="w-full h-fit py-2 rounded-lg bg-white shadow-md before:opacity-10 after:opacity-100 duration-500"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="w-full border-b-[1px]">
              <Link
                href="#"
                className="w-full h-9 px-2 flex items-center text-sm hover:bg-gray-100"
              >
                <UserIcon className="size-5 mr-1" />
                <span>Account</span>
              </Link>
              <Link
                href="/cart"
                className="w-full h-9 px-2 flex items-center text-sm hover:bg-gray-100"
              >
                <ShoppingCartIcon className="size-5 mr-1" />
                <span>Cart</span>
              </Link>
            </div>
            <div className="w-full border-b-[1px]">
              <Link
                href="/book"
                className="w-full h-9 px-2 flex items-center text-sm hover:bg-gray-100"
              >
                <BookOpenIcon className="size-5 mr-1" />
                <span>Book</span>
              </Link>
              <Link
                href="/packaging"
                className="w-full h-9 px-2 flex items-center text-sm hover:bg-gray-100"
              >
                <TagIcon className="size-5 mr-1" />
                <span>Packaging</span>
              </Link>
            </div>
            <div className="w-full border-b-[1px]">
              <Link
                href="/about"
                className="w-full h-9 px-2 flex items-center text-sm hover:bg-gray-100"
              >
                <InformationCircleIcon className="size-5 mr-1" />
                <span>About us</span>
              </Link>
            </div>
            <Link href="/" onClick={handleLogout}>
              <div className="w-full h-9 px-2 flex items-center text-sm hover:bg-gray-100">
                <ArrowRightStartOnRectangleIcon className="size-5 mr-1" />
                <span>Log out</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
