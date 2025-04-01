'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";
import Image from 'next/image';
import '../../styles/globals.css';

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image 
            src="/images/TheHUNT-logo.png" 
            alt="The Hunt logo" 
            width={80} 
            height={40}
            className="w-20 h-auto"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!user ? (
            <Link href="/api/auth/login">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          ) : (
            <>
              <Link href="/api/auth/logout">
                <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg">
                  Logout
                </button>
              </Link>
              <Image 
                src={user.picture} 
                alt={user.name} 
                width={32} 
                height={32}
                className="rounded-full ml-4"
              />
            </>
          )}
        </div>
        <div className="items-center justify-between w-full flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-row p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-xl text-black bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 md:text-blue-500" aria-current="page">
                Home
              </Link>
            </li>
            {/* Other menu items similarly updated */}
          </ul>
        </div>
      </div>
    </nav>
  );
}