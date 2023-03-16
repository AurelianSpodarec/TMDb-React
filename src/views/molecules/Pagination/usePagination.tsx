import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const usePagination = ({ activePage, totalPages }:any) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [currentPage, setCurrentPage] = useState(activePage || 1);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pageValue = parseInt(params.get('page')) || 1;

    const goToNextPage = () => {
        if(pageValue === totalPages) return
        setSearchParams({ 
            ...params,
            page: String(pageValue + 1)
        })
    };

    const goToPreviousPage = () => {
        if(pageValue === 1) return
        setSearchParams({ 
            ...params,
            page: String(pageValue - 1)
        })
    };
    
    const goToPage = (page:any) => {
        setSearchParams({ 
            page: String(page)
        })
    };

    return {
        goToNextPage,
        goToPreviousPage,
        goToPage
    }
}

export default usePagination;