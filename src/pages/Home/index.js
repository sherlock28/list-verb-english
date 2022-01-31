import React from 'react';
import { Search } from "components/Search";
import { Results } from "components/Results";
import { Title } from "components/Title";

export function HomePage() {
    return (<>
        <Title />
        <Search />
        <Results />
    </>);
}
