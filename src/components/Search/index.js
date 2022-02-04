import React, { useState } from "react";
import { Input, Box, Text } from "@chakra-ui/react";

export function Search() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("search")
    }

    const handleChange = e => {
        setQuery(e.target.value);
        // search();
    }

    return (
        <form onSubmit={handleSearch}>
            <Box d="flex" flexDir="column" justifyContent="center">
                <Input
                    name="queryField"
                    onChange={handleChange}
                    variant="flushed"
                    type="search"
                    placeholder="Verb..."
                    size="lg"
                    w={["100%", "340px", "440px", "500px"]}
                    my={8}
                />
            </Box>
        </form>
    );
}