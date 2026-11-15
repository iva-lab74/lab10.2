//demo component

import { usePagination } from "../hooks/usePagination";

//building an array with fake data / start with index
const items = Array.from({length: 123}, (_, i) => `Item ${i + 1}`);

//is our hook working
export default function PaginationDemo() {

    const { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, 
        setPage, nextPage, prevPage, goNextPage, goPrevPage, } = usePagination(items.length);
    //just the page iems
    const pageItems = items.slice(startIndex, endIndex);

    return (
        <div>
            <h2>Pagination Demo</h2>
            <p>Total Items: {items.length}</p>

            <ul>
                {pageItems.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <button onClick={prevPage} disabled={!goPrevPage}>Previous</button>
            <span>Page {currentPage} of {totalPages} </span>

            <button onClick={nextPage} disabled={!goNextPage}>Next</button>
        
        
        </div>
    )
}