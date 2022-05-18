import React, { useState } from "react";
import { listOfVerbs } from "data/listOfVerbs";

const Context = React.createContext({});

export function VerbsContextProvider({ children }) {
    const [filteredVerbs, setFilteredVerbs] = useState(listOfVerbs);
    
    return (
        <Context.Provider value={{ filteredVerbs, setFilteredVerbs }}>
            {children}
        </Context.Provider>
    );
}

export default Context;