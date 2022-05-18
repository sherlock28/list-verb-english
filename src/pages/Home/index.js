import React from 'react';
import { Search } from "components/Search";
import { Results } from "components/Results";
import { Title } from "components/Title";
import { useSearchVerbs } from "hooks/useSearchVerbs";

export function HomePage() {
    const { filteredVerbs } = useSearchVerbs();

    return (
        <>
            <Title />
            <Search />
            <Results verbs={filteredVerbs}/>
        </>
    );
}
