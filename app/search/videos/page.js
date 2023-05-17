import Results from "@/components/Results";
import React from "react";

const page = async ({ searchParams }) => {
  const url = `https://bing-video-search1.p.rapidapi.com/videos/search?q=${searchParams.q}&safeSearch=off`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "bing-video-search1.p.rapidapi.com",
    },
  };

  const response = await fetch(url,{...options, cache:"no-store"});
  if (!response.ok) {
    return <div></div>;
  }
  const json = await response.json();
  const results = [...json?.value];

  return (
    <div>
      <Results data={results} />
    </div>
  );
};

export default page;
