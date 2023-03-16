import usePagination from "./usePagination";

function Pagination({ page, totalPages }:any) {
    const pager = usePagination({page, totalPages});

    return (
        <div className="text-white">
            pagination
            <div>
                <button onClick={pager.goToNextPage}>Next</button>
            </div>
            <div>
                <button onClick={pager.goToPreviousPage}>Prev</button>
            </div>
        </div>
    )
}

export default Pagination;