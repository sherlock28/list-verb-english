import React from "react";
import {
    Pagination,
    usePagination,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
    PaginationContainer,
    PaginationPageGroup,
} from "@ajna/pagination";
import { Box } from '@chakra-ui/react'

export function PaginationCmp() {
    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages
    } = usePagination({
        pagesCount: 8,
        initialState: { currentPage: 1 },
    });

    return (
        <Box mt={10}>
            <Pagination
                pagesCount={pagesCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            >
                <PaginationContainer>
                    <PaginationPrevious
                        padding={2}
                        margin={2}
                        onClick={() =>
                            console.log("Click on previous page")
                        }
                    >Previous</PaginationPrevious>
                    <PaginationPageGroup>
                        {pages.map((page) => (
                            <PaginationPage
                                padding={2}
                                margin={2}
                                key={`pagination_page_${page}`}
                                page={page}
                                onClick={() =>
                                    console.log("Change page to", page)
                                }
                                _current={{
                                    bg: "gray.400",
                                    fontSize: "sm",
                                    w: 7
                                }}
                            />
                        ))}
                    </PaginationPageGroup>
                    <PaginationNext
                        padding={2}
                        margin={2}
                        onClick={() =>
                            console.log("Click on next page")
                        }
                    >Next</PaginationNext>
                </PaginationContainer>
            </Pagination>
        </Box>
    );
};
