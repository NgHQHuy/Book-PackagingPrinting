"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    if (sessionStorage.getItem("_u")) router.push("/");
    else setIsCheckingAuth(false);
  }, []);
  
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
            Create account
          </span>
        </div>
        <form>
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
          <div className="w-60 h-8 mt-4 box-border px-1 flex items-center rounded-md bg-white border duration-500 hover:border-gray-500">
            <input
              type="text"
              className="w-full outline-none placeholder:text-xs"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="w-60 h-8 mt-4 box-border flex items-center px-1 rounded-md bg-white border duration-500 hover:border-gray-500">
            <input
              type="password"
              className="w-full outline-none placeholder:text-xs"
              placeholder="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full my-4 flex justify-center">
            <button
              type="submit"
              className="group w-fit h-7 flex items-center justify-center px-2 border rounded-full text-green-400 border-green-400 duration-200 hover:bg-green-400 hover:text-white"
            >
              <span className="font-medium">Create</span>
            </button>
          </div>
        </form>
        <div className="w-60 flex justify-center items-end text-sm">
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
