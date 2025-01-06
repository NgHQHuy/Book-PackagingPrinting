"use client";
import React, { FormEvent, useEffect, useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const { setUser } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("_u")) router.push("/");
    else setIsCheckingAuth(false);
  }, []);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ role: "user" });
    sessionStorage.setItem("_u", JSON.stringify({ role: "user" }));
    router.push("/");
  };
  if (isCheckingAuth)
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-gray-300 italic">
        <span>Loading...</span>
      </div>
    );
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-fit p-4 grid justify-center bg-white rounded-none shadow-lg sm:w-[400px] sm:rounded-xl">
        <div className="w-full flex justify-center pb-4">
          <span className="text-2xl font-semibold font-[family-name:var(--font-geist-mono)]">
            Join with us!
          </span>
        </div>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="w-60 h-8 box-border px-1 flex items-center rounded-md bg-white border duration-500 hover:border-gray-500">
            <input
              type="text"
              className="w-full outline-none placeholder:text-xs"
              placeholder="Email, phone or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="w-60 h-8 mt-4 box-border flex items-center px-1 rounded-md bg-white border duration-500 hover:border-gray-500">
            <input
              type="password"
              className="w-full outline-none placeholder:text-xs"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex justify-end mt-1">
            <Link
              href="/forgotpw"
              className="text-xs text-purple-500 cursor-pointer hover:underline hover:underline-offset-1"
            >
              Forgot password?
            </Link>
          </div>
          <div className="w-full my-4 flex justify-center">
            <button
              type="submit"
              className="group w-fit h-7 flex items-center justify-center pl-3 border rounded-full text-green-400 border-green-400 duration-200 hover:bg-green-400 hover:text-white"
            >
              <span className="font-medium">Log in</span>
              <ChevronRightIcon className="size-6" />
            </button>
          </div>
        </form>
        <div className="w-60 flex items-center">
          <div className="h-[1px] flex-grow bg-gray-300"></div>
          <div className="w-fit mx-2">
            <span className="text-[13px] text-gray-400">OR</span>
          </div>
          <div className="h-[1px] flex-grow bg-gray-300"></div>
        </div>
        <Link href="/register">
          <div className="flex items-center w-60 h-8 box-border px-2 border rounded-md border-gray-300 hover:bg-gray-100">
            <PlusIcon className="size-4" />
            <div className="flex-grow text-center text-sm">
              <span>Create new account</span>
            </div>
          </div>
        </Link>
        <Link href="" className="my-2">
          <div className="flex items-center w-60 h-8 box-border px-2 border rounded-md border-gray-300 hover:bg-gray-100">
            <div>
              <svg viewBox="-3 0 262 262" fill="#000000" className="size-4">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="flex-grow text-center text-sm">
              <span>Continue with Google</span>
            </div>
          </div>
        </Link>
        <div className="w-60 flex justify-end items-end text-sm">
          <span>Later, back to&nbsp;</span>
          <Link
            href="/"
            className="text-blue-500 hover:underline hover:underline-offset-1"
          >
            {" "}
            Home page
          </Link>
        </div>
      </div>
    </div>
  );
}
