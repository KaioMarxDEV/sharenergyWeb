import Image from 'next/image';
import Link from 'next/link';
import { Cat, Dog, HouseSimple, Users } from 'phosphor-react';

export default function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 m-0 flex h-screen w-16 flex-col 
       bg-gray-900 pt-10 text-white shadow-lg shadow-slate-800"
    >
      <Image
        className="mx-auto mb-4 rounded-full"
        src="/logo.png"
        width={48}
        height={48}
        alt="Logo"
      />
      <Link href="/dashboard" className="group">
        <HouseSimple
          className="relative mx-auto mt-2 mb-2 flex h-12 w-12 items-center justify-center 
          rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear 
          hover:rounded-xl group-hover:bg-share-blue"
          size={32}
        />
      </Link>
      <Link href="/cats" className="group">
        <Cat
          className="relative mx-auto mt-2 mb-2 flex h-12 w-12 items-center justify-center 
          rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear 
          hover:rounded-xl group-hover:bg-share-blue"
          size={32}
        />
      </Link>
      <Link href="/dogs" className="group">
        <Dog
          className="relative mx-auto mt-2 mb-2 flex h-12 w-12 items-center justify-center 
          rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear 
          hover:rounded-xl group-hover:bg-share-blue"
          size={32}
        />
      </Link>
      <Link href="/users" className="group">
        <Users
          className="relative mx-auto mt-2 mb-2 flex h-12 w-12 items-center justify-center 
          rounded-3xl bg-gray-600 p-1 transition-all duration-300 ease-linear 
          hover:rounded-xl group-hover:bg-share-blue"
          size={32}
        />
      </Link>
    </div>
  );
}
