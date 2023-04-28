import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AdminNavbar = () => {
  const [userMenu, setUserMenu] = useState(false);
  return (
    <div className="navbar bg-teal-600 p-4">
      <div className="flex-1 px-8">
        <Image src="/logo.png" alt="me" width="128" height="128" />
      </div>
      <div className="flex-none">
        <ul className="flex flex-col font-medium p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-lg">
          <li>
            <Link href="#" className="block py-2 text-white p-0">
              Menu A
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 text-white p-0">
              Menu B
            </Link>
          </li>
          <li>
            <div
              className="flex justify-center items-center space-x-3 cursor-pointer"
              onClick={() => setUserMenu(!userMenu)}
            >
              <div className="font-semibold dark:text-white text-gray-900 text-lg">
                <div className="cursor-pointer">User Name</div>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                <Image
                  src=""
                  alt=""
                  className="w-full h-full object-cover"
                  width="40"
                  height="40"
                />
              </div>
            </div>
            {userMenu && (
              <div className="absolute w-40 px-5 py-3 bg-slate-800 rounded-lg shadow border dark:border-transparent mt-5">
                <ul className="space-y-3 text-white text-sm">
                  <li className="font-medium">
                    <a
                      href="#"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <Link href="/app/account">Account Settings</Link>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a
                      href="#"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                    >
                      <div className="mr-3 text-red-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      <Link href="/">Logout</Link>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
