import { useEffect, useState } from "react"

const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: "smooth"
        }, [scrollTop])
    })
    const handleNextPage = () => {
        setPage((prevState) => prevState + 10)
        scrollTop
    }

    
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 10)
        scrollTop
    }
    return(
        <div className="flex justify-center items-center text-xl">
        <div className="join">
            {page <= 1 ? null:<button className="join-item btn" onClick={handlePrevPage}>«</button>}
            <button className="join-item btn">{page}</button>
            {page >= lastPage ? null :<button className="join-item btn" onClick={handleNextPage}>»</button>}
            </div>
        </div>
    )
}

export default Pagination;