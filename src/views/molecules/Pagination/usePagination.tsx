import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


const usePagination = (data:any) => {
    let [searchParams, setSearchParams] = useSearchParams();
    
    const location = useLocation();
    const existingSearchParams = new URLSearchParams(location.search);
    // @ts-ignore
    const pageValue = parseInt(existingSearchParams.get('page') || 1, 10);
    
    const totalPages = data && data.total_pages;
    const currentPage = data && data.page

    const firstPage = currentPage === 1;
    const lastPage = currentPage === totalPages;

    const totalResults = data.total_results
    const resultsFrom = firstPage ? 1 : data.page * 20 - 20
    const resultsTo = data.page * 20

     // Page Helpers 
    // ==========================================

    function snapToTop() {
        window.scrollTo(0, 0);
    }
    
    const updateSearchParams = (newPageValue:any) => {
        existingSearchParams.set("page", String(newPageValue));
        setSearchParams(existingSearchParams);
        snapToTop()
    };


    // Page Functionality 
    // ==========================================

    const goToNextPage = () => {
        if (pageValue === data.totalPages) return;
        updateSearchParams(pageValue + 1);
    };

    const goToPreviousPage = () => {
        if(pageValue === 1) return;
        updateSearchParams(pageValue - 1);
    };
    
    const goToPage = ({ page }:any) => {
        existingSearchParams.set("page", String(page));
        setSearchParams(existingSearchParams.toString());
    };

    return {
        currentPage,
        firstPage,
        lastPage,
        totalPages,
        totalResults,
        resultsFrom,
        resultsTo,
        goToNextPage,
        goToPreviousPage,
        goToPage
    }
}

export default usePagination;