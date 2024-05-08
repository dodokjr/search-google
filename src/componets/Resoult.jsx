import React from 'react'

export default function Resoult({data}) {
  return (
    <>
    {data.items && data.items.map((r,i) => {
      return(
        <div class="mb-8 max-w-xl" key={i}>
      <div class="group flex flex-col">
        <span className='text-sm truncate'>{r.link}</span>
        <a class="text-2xl text-black truncate" href={r.link}><h1>{r.title}</h1></a>
        </div>
        <p class="text-pretty p-2">{r.snippet}</p>
        </div>
      )
    })}
</>
  )
}