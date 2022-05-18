import React from "react";
import { Input, Box, Text } from "@chakra-ui/react";
import { useSearchVerbs } from "./hooks/useSearchVerbs";

export function Search() {
    const { handleChange, handleSubmit, message } = useSearchVerbs();

    return (
        <form onSubmit={handleSubmit}>
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
                    autoComplete="off"
                />
                <Text mb={8}>{message}</Text>
            </Box>
        </form>
    );
}