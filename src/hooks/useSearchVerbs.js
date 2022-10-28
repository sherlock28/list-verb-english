import { useState, useEffect, useContext } from "react";
import { listOfVerbs } from "data/listOfVerbs";
import VerbsContext from "context/VerbsContext";

export function useSearchVerbs() {
    const { filteredVerbs, setFilteredVerbs } = useContext(VerbsContext);

    const [message, setMessage] = useState("");
    const [target, setTarget] = useState("");

    const handleChange = e => {
        setTarget(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // filter();
    }
    
    // eslint-disable-next-line
    useEffect(() => filter(), [target]);

    const filter = () => {
        setFilteredVerbs(listOfVerbs.filter(verb => verb.simpleForm.toLowerCase().indexOf(target.toLowerCase()) !== -1));

        if (filteredVerbs.length === 0) {
            setMessage("Verbo no encontrado");
        }
        if (filteredVerbs.length === 0 && target === "") {
            setMessage("");
        }
        return;
    }

    return {
        handleChange, handleSubmit, filteredVerbs, message
    }
}
