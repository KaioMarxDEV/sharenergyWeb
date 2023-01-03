import Image from 'next/image';
import Link from 'next/link';
import { Cat, Dog, HouseSimple, Users } from 'phosphor-react';
import { SetStateAction, useState } from 'react';

export default function SideBar() {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div
      className="fixed top-0 z-10 flex h-16 w-screen items-center justify-between bg-gray-900 text-white shadow-lg shadow-slate-800 
       md:h-screen md:w-16 md:flex-col md:items-center md:justify-start"
    >
      <Image
        className="ml-2 h-12 w-12 rounded-full md:mt-2 md:mb-10  md:pl-0"
        src="/logo.png"
        width={75}
        height={75}
        alt="Logo"
      />
      <div className="flex gap-2 pr-2 md:flex-col md:gap-6 md:pr-0">
        <Link
          onClick={() => handleClick('dashboard')}
          href="/dashboard"
          className="group"
        >
          <HouseSimple
            className={
              activeLink === 'dashboard'
                ? 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-share-blue p-1 transition-all duration-300 ease-linear'
                : 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear'
            }
            size={32}
          />
        </Link>
        <Link
          onClick={() => handleClick('cats')}
          href="/cats"
          className="group"
        >
          <Cat
            className={
              activeLink === 'cats'
                ? 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-share-blue p-1 transition-all duration-300 ease-linear'
                : 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear'
            }
            size={32}
          />
        </Link>
        <Link
          onClick={() => handleClick('dogs')}
          href="/dogs"
          className="group"
        >
          <Dog
            className={
              activeLink === 'dogs'
                ? 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-share-blue p-1 transition-all duration-300 ease-linear'
                : 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear'
            }
            size={32}
          />
        </Link>
        <Link
          onClick={() => handleClick('users')}
          href="/users"
          className="group"
        >
          <Users
            className={
              activeLink === 'users'
                ? 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-share-blue p-1 transition-all duration-300 ease-linear'
                : 'relative mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear'
            }
            size={32}
          />
        </Link>
      </div>
    </div>
  );
}
