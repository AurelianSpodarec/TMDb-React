import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const usePagination = ({ activePage, totalPages }:any) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [currentPage, setCurrentPage] = useState(activePage || 1);

    const location = useLocation();
    let pathName = location.pathname;

    // set page function? when stuff first loads?

    const goToNextPage = () => {
        if(currentPage === totalPages) return
        setSearchParams({ 
           page: String(currentPage + 1)
       })
    };

    const goToPreviousPage = () => {
        if(currentPage === 1) return
        setSearchParams({ 
            page: String(currentPage - 1)
        })
    };
    
    const goToPage = (page:any) => {
        setCurrentPage(page);
    };

    return {
        goToNextPage,
        goToPreviousPage,
        goToPage
    }

}

export default usePagination;