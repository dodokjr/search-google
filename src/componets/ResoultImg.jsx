import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ResoultImg({api}) {
  return (
    <div className="grid grid-cols-2 gap-4 ">
        {api.items && api.items.map((r ,i) => {
            return(
                <Link href={`${r.image.contextLink}`} className="cursor-pointer text-color-dark dark:text-color-primary hover:text-color-accent transition-all">
                  <img src={r.image.thumbnailLink} width={r.image.thumbnailWidth} height={r.image.thumbnailHeight} className="w-100 max-h-64 object-cover"/>
                  <span className='text-sm truncate'>{r.displayLink}</span>
                  <h1 className='font-bold'>{r.title}</h1>
                  <p className=''></p>
                </Link>
            )
        })}
    </div>
  )
}
