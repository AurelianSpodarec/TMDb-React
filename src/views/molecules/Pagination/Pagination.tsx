import usePagination from "./usePagination";
import PageItem from "./_components/PageItem";

function Pagination({ data }:any) {
    if(!data) return <></>
    const pager = usePagination(data);

    return (
        <div className="text-white">
        <div className="flex justify-center items-center">
        
            <button 
                type="button" 
                aria-label="Pagination: Previous page" 
                onClick={pager.goToPreviousPage} 
                className={`rounded h-14 px-6 ${pager.firstPage ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}
            >
                Prev
            </button>

            <div className="flex">
                <PageItem onClick={() => pager.goToPage("1")} label="1" />
                <PageItem activePage={pager.currentPage} label={pager.currentPage} />
                <PageItem onClick={() => pager.goToPage(pager.totalPages)} label={pager.totalPages} />
            </div>

            <button 
                type="button" 
                aria-label="Pagination: Next Page" 
                onClick={pager.goToNextPage} 
                className={`rounded h-14 px-6 ${pager.lastPage ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}
            >
                Next
            </button>

        </div>
        </div>
    )
}

export default Pagination;