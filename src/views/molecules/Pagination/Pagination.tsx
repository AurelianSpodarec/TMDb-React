import usePagination from "./usePagination";
import PageItem from "./_components/PageItem";

//TODO: On page change snap to the top
function Pagination({ data }:any) {
    if(!data) return <></>
    const currentPage = data.page;
    const totalPages = data.total_pages;
    const pager = usePagination({ currentPage, totalPages});

    return (
        <div className="text-white">
        <div className="flex justify-center items-center">
        
            <button type="button" aria-label="Pagination: Previous page" onClick={pager.goToPreviousPage} className={`rounded h-14 px-6 ${pager.currentPage === 1 ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}>
                Prev
            </button>

            <div className="flex">
                <PageItem label="1" />
                <PageItem activePage={currentPage} label={currentPage} />
                <PageItem label={totalPages} />
            </div>

            <button type="button" aria-label="Pagination: Next Page" onClick={pager.goToNextPage} className={`rounded h-14 px-6 ${pager.currentPage === totalPages ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}>
                Next
            </button>

        </div>
        </div>
    )
}

export default Pagination;