
import Nav from '@/componets/Nav'
import Resoult from '@/componets/Resoult'
import Head from 'next/head'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'


export default function search()
{
    const [data, setData] = useState([])
    const searchParams = useSearchParams()
    const search = searchParams.get('q')


    useEffect(() =>
    {
        fetchData()
    }, [search])

    const fetchData = async () =>
    {
        try
        {
            const dataApi = await fetch(`/api/search/${search}`)
            const apiFatch = await dataApi.json()
            setData(apiFatch.l)
        } catch (error) { console.error("data No Fetch", error) }
    }

    if (!search || "") return <div>Url q Kosong</div>
    if (!data) return <div>Loding ...</div>
    return (
        <div className='p-4'>
            <Head>
                <title>Search || {search}</title>
            </Head>
            <Nav search={search} />
            <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-white text-sm'>
                <div className='grid grid-cols-2 gap-5'>
                    <a href={`/search?q=${search}`} className='underline'>All</a>
                    <Link href={`/search/imagePage?q=${search}`} className='underline'>Image</Link>
                </div>
            </div>
            <div className='w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 p-3'>
                <p className='text-white text-sm mb-5 mt-3'>Your Search {search} About {data.searchInformation && data.searchInformation.formattedTotalResults} results ({data.searchInformation && data.searchInformation.formattedSearchTime} seconds)</p>
                <Resoult data={data} />
            </div>
        </div>
    )
}