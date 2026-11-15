import { useEffect, useState } from "react";

//useState(delayed value), useEffect(running the timer)
export function useDebounce(value, delay = 500) {
    
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        
        const timer= setTimeout(() => setDebouncedValue(value), delay);
        //cleanup
        return () => clearTimeout(timer);

    //only runs when one of these changes
    }, [value, delay]);

    //call the value
    return debouncedValue;

   
}