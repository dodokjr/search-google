import { useRouter, useSearchParams } from 'next/navigation';
import React, { useRef, useState } from 'react'

export default function Nav({search}) {
    const searchRef = useRef()
    const route = useRouter()
    const searchParams = useSearchParams();
  const searchTerm = searchParams.get("q");
    const [input , setInput] = useState(searchTerm || "")
  
    const handlerSearch = (e) =>
    {
      if (!input || !input.trim()) return <div>Tolong Kasih Text</div>
      if (e.key == "Enter" || e.type === "click")
      {
        e.preventDefault();
        route.push(`/search?q=${input}`)
      }
    }
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-color-accent mb-3">
  <div className=" px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-color-primary hover:text-color-dark hover:scale-y-75 hover:opacity-100" href="/">
        Logo
      </a>
    </div>
    <div className="lg:flex flex-grow items-center p-2">
      <ul className="flex flex-col lg:flex-row list-none mr-auto gap-2">
        <li className="nav-item">
        <label className="input input-bordered flex items-center  justify-center gap-2">
  <input type="text" className="grow" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Search" />
  <button onClick={() => setInput("")}>X</button>
  <button onClick={handlerSearch}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
</label>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
