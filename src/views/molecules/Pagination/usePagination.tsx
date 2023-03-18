import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";



const usePagination = ({ activePage, totalPages }:any) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [currentPage, setCurrentPage] = useState();

    const location = useLocation();
    const existingSearchParams = new URLSearchParams(location.search);
    const pageValue = parseInt(existingSearchParams.get('page') || 1);

    function snapToTop() {
        window.scrollTo(0, 0);
    }
    
    const updateSearchParams = (newPageValue: number) => {
        existingSearchParams.set("page", String(newPageValue));
        setSearchParams(existingSearchParams.toString());
        setCurrentPage(String(newPageValue));
        snapToTop();
    };

    const goToNextPage = () => {
        if (pageValue === totalPages) return;
        updateSearchParams(pageValue + 1);
        snapToTop();
    };

    const goToPreviousPage = () => {
        if(pageValue === 1) return;
        updateSearchParams(pageValue - 1);
        snapToTop()
    };
    
    const goToPage = ({ page }:any) => {
        existingSearchParams.set("page", String(page));
        setSearchParams(existingSearchParams.toString());
        snapToTop()
    };

    return {
        currentPage,
        goToNextPage,
        goToPreviousPage,
        goToPage
    }
}

export default usePagination;