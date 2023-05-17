"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {PhotoIcon, PlayIcon, NewspaperIcon} from "@heroicons/react/24/outline"

const SearchHeader = () => {
  const searchQuery = useSearchParams().get("q")
  const pathname = usePathname()
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchQuery)
  

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    if (!searchValue) return;
    router.push(`${pathname}?q=${searchValue}`);
  };
  
  const handleChange =(value)=> {
    setSearchTerm(value)
  }

  const selectOption = (option)=> {
    router.push(`/search/${option}?q=${searchQuery}`)
  }
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="flex w-full p-6 items-center">
        <Link href={"/"}>
          <Image src={"/google-logo.png"} width={120} height={40} className="cursor-pointer" alt=""/>
        </Link>
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
          onSubmit={handleSearch}
        >
          <input type="text" className="flex-grow w-full focus:outline-none" onChange={e=> handleChange(e.target.value)} value={searchTerm} />
          <XMarkIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
        </form>
      </div>
      {/* options */}
      <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
        <div className="flex space-x-6">
          <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${pathname === "/search/web" && "!border-blue-500"}`} onClick={e=>selectOption("web")}>
            <MagnifyingGlassIcon className="h-4"/>
            <p className="hidden sm:inline-flex">Todo</p>            
          </div>
          <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${pathname === "/search/images" && "!border-blue-500"}`} onClick={e=>selectOption("images")}>
            <PhotoIcon className="h-4"/>
            <p className="hidden sm:inline-flex">Imágenes</p>            
          </div>
          <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${pathname === "/search/videos" && "!border-blue-500"}`} onClick={e=>selectOption("videos")}>
            <PlayIcon className="h-4"/>
            <p className="hidden sm:inline-flex">Videos</p>            
          </div>
          <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${pathname === "/search/news" && "!border-blue-500"}`} onClick={e=>selectOption("news")}>
            <NewspaperIcon className="h-4"/>
            <p className="hidden sm:inline-flex">Noticias</p>            
          </div>
        </div>
        <div className="link">
          <p>Herramientas</p>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
