import { useState } from "react";

export function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
    //initial page
    const [currentPage, setCurrentPage] = useState(initialPage);
    //rounds up page, 1 0f 1
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    const startIndex = (currentPage - 1) * itemsPerPage;
    //doesnt go over the amount of items
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    //items on the page
    const itemsOnCurrentPage = endIndex - startIndex;
    //only above page 1 ever
    const PrevPage = currentPage > 1;
    // next button only untill the last total pages
    const NextPage = currentPage < totalPages;
    // main function for jumping to a certain page 
    const setPage = (pageNumber) => {
        //guard
        const safePageNumber = Math.min(Math.max( 1, pageNumber), totalPages);
        setCurrentPage(safePageNumber);
    };

    

    //call them so they can be used 
    return { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage };
}