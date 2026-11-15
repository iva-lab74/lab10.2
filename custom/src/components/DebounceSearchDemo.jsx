import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebounceSearchDemo() {
    const [text, setText] = useState("");

    //delayed copying
    const debounced = useDebounce(text, 500);
    
    useEffect(() => {
        console.log("Searching for:", debounced);

    }, [debounced]); //fires on the pause

    return (
        <div>
            <h2> Debounce Search Demo</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type to search..." />
            <p>Current Input: {text}</p>
            <p>Debounced Value: {debounced}</p>
        </div>
    );
}
