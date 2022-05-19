import React from 'react';
import { Search } from "components/Search";
import { Results } from "components/Results";
import { useSearchVerbs } from "hooks/useSearchVerbs";

export function HomePage() {
    const { filteredVerbs } = useSearchVerbs();

    return (
        <>
            <Search />
            <Results verbs={filteredVerbs}/>
        </>
    );
}
