import Nav from '@/componets/Nav'
import ResoultImg from '@/componets/ResoultImg'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function imagePage()
{
    const searchParams = useSearchParams()
    const image = searchParams.get("q")
    const [data, setData] = useState([])

    useEffect(() =>
    {
        fetchData()
    }, [])
    const fetchData = async () =>
    {
        try
        {
            const dataApi = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/google-search/img?key=1010101&cx=9009009&q=${image}`)
            const apiFetch = await dataApi.json()
            setData(apiFetch)
        } catch (error) { console.error("data Is", error) }
    }
    return (
        <div>
            <Nav search={image} />
            <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-white text-sm'>
                <div className='grid grid-cols-2 gap-5'>
                    <Link href={`/search?q=${image}`} className='underline'>All</Link>
                    <Link href={`/search/imagePage?q=${image}`} className='underline'>Image</Link>
                </div>
            </div>
            <div className='w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 p-3'>
                <p className='text-white text-sm mb-5 mt-3'>Your Search {image} About {data.searchInformation && data.searchInformation.formattedTotalResults} results ({data.searchInformation && data.searchInformation.formattedSearchTime} seconds)</p>
            </div>
            <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-white text-sm'>
                <ResoultImg api={data} />
            </div>
        </div >
    )
}
