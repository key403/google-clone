import Results from "@/components/Results";
import React from "react";

const page = async ({ searchParams }) => {
  const url =
    `https://real-time-news-data.p.rapidapi.com/search?query=${searchParams.q}&country=US&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
    },
  };

  const response = await fetch(url,{...options, cache:"no-store"});
  if (!response.ok) {
    return <div></div>;
  }
  const json = await response.json();
  const results = [...json?.data];

  return (
    <div>
      <Results data={results} />
    </div>
  );
};

export default page;
