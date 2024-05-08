import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";


export default function Home()
{
  const searchRef = useRef()
  const route = useRouter()

  const handlerSearch = (e) =>
  {
    const keywords = searchRef.current.value;
    if (!keywords || !keywords.trim()) return <div>Tolong Kasih Text</div>
    if (e.key == "Enter" || e.type === "click")
    {
      e.preventDefault();
      route.push(`/search?q=${keywords}`)
    }
  }
  return (
    <>
      <Head>
        <title>Search Google By Mfikria</title>
      </Head>
      <div className={`relative min-h-screen`}>
        <div className="flex flex-col items-center mt-24 justify-center">
          <div className="text-white p-2">
            <h1 className="text-2xl">Search Google By Mfikria</h1>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" ref={searchRef} onKeyDown={handlerSearch} />
            <button onClick={handlerSearch}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
          </label>
        </div>
        <div className="flex">oioi</div>
      </div>
    </>
  );
}