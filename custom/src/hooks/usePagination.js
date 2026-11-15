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

    //call them so they can be used 
    return { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage };
}