"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import {TbGridDots} from "react-icons/tb"

export default function Home() {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    if (!searchValue) return;
    router.push(`/search/web?q=${searchValue}`);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <header>
        <div className="flex flex-row-reverse p-5 ">
          <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Imágenes</p>
            <TbGridDots className="h-10 w-10 cursor-pointer transition duration-300 hover:bg-gray-200 rounded-full p-2"/>
          </div>
        </div>
      </header>

      <form
        className="flex flex-col items-center mt-10 flex-grow"
        onSubmit={handleSearch}
      >
        <Image src="/google-logo.png" width={300} height={100} alt="" />
        <div className="w-full mt-5 max-w-md sm:max-w-xl lg:max-w-2xl relative">
          <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
            <input
              type="text"
              className="flex-grow focus:outline-none"
            />
            <MicrophoneIcon className="h-5" />
          </div>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Buscar con Google</button>
          <button className="btn">Voy a tener suerte</button>
        </div>
      </form>

      <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 hidden md:block">
        <div className="px-8 py-3 border-b-5 border-black">
          <p>Chile</p>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-4 px-8 py-3">
            <p className="link">Sobre Google</p>
            <p className="link">Publicidad</p>
            <p className="link">Negocios</p>
          </div>

          <div className="flex space-x-4 px-8 py-3">
            <p className="link">Privacidad</p>
            <p className="link">Condiciones</p>
            <p className="link">Preferencias</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
