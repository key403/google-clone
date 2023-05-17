"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const Results = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter()

  switch (pathname) {
    case "/search/web":
      return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
          {data.map((item) => (
            <div key={item.url} className="max-w-xl mb-8">
              <div className="group truncate">
                <a href={item.url} className="text-sm">
                  {item.url}
                </a>
                <h2 className="text-xl text-blue-800 font-medium group-hover:underline line-clamp-1">
                  <a href={item.url}>{item.title}</a>
                </h2>
              </div>

              <p className="line-clamp-2">{item.snippet}</p>
            </div>
          ))}
        </div>
      );
    case "/search/images":
      return (
        <div className="mt-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 gap-x-7 gap-y-5">
          {data.map((item) => (
            <div key={item.id}>
              <div className="bg-gray-200">
                <a href={item.url} target="_blank" className="group">
                  <img
                    src={item.thumbnail_url}
                    className="h-44 group-hover:shadow-xl w-full object-contain transition-shadow"
                    alt=""
                  />
                </a>
              </div>
              <div className="mt-2 group truncate">
                <a href={item.source_url} target="_blank">
                  <p className="text-xs group-hover:underline">{item.source}</p>
                  <h2 className="group-hover:underline text-sm">
                    {item.title}
                  </h2>
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/search/videos":
      return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
          {data.map((item,i) => {
            return (
              <div key={item.videoId} className="max-w-xl mb-8">
                <div className="group">
                  <a href={item.hostPageUrl} className="text-sm">
                    {item.publisher[0]?.name}.com
                  </a>
                  <h2 className="text-xl text-blue-800 font-medium group-hover:underline line-clamp-1">
                    <a href={item.hostPageUrl}>{item.name}</a>
                  </h2>
                </div>

                <div className="flex space-x-4 mt-2">
                  <div className="w-1/4 relative z-0 rounded-lg overflow-hidden">
                    <a href={item.hostPageUrl}>
                      <img src={item.thumbnailUrl} alt={item.name} />
                    </a>
                    <PlayCircleIcon className="h-10 text-neutral-100/90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="w-3/4 text-sm">
                    <p className="line-clamp-2">{item.description}</p>
                    <p className="mt-5">
                      {item.publisher[0]?.name} ·{" "}
                      <span className="text-gray-600">
                        {item.creator?.name} ·{" "}
                        {item.datePublished?.slice(0, 10)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    case "/search/news":
      return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
          {data.map((item) => (
            <div key={item.title} className="flex space-x-4 max-w-xl justify-between">
              <div className="mb-8">
                <div className="group">
                  <a href={item.link} className="text-sm flex items-center">
                    <img src={item.source_favicon_url} className="h-4 mr-2" alt="" />
                    <div>
                      {item.source_url}
                    </div>
                  </a>
                  <h2 className="text-xl mt-1 text-blue-800 font-medium group-hover:underline">
                    <a href={item.link}>{item.title}</a>
                  </h2>
                  <p className="pt-3 text-gray-600">{item.published_datetime_utc.slice(0,10)}</p>
                </div>
              </div>

              <img src={item.photo_url} className="h-24 w-24 object-cover rounded-lg cursor-pointer" alt="" onClick={e=> router.push(`${item.link}`)} />
            </div>
          ))}
        </div>
      );
  }
};

export default Results;
