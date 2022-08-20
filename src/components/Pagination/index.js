import React from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

export const Pagination = ({ next, prev, currentPage, maxPage }) => {
    return (
        <Flex
            my={2}
            px={2}
            py={1}
            minWidth={0}
            justifyContent="space-between"
            overflow="hidden"
        >
            <IconButton
                aria-label="previous page"
                variant="ghost"
                icon={<ChevronLeftIcon />}
                borderRadius={20}
                onClick={() => prev()}
                _focus={{ outline: "none", border: "none " }}
            >
                prev
            </IconButton>
            <Text mt={2} fontSize="sm">
                page {currentPage} of {maxPage}
            </Text>
            <IconButton
                aria-label="next page"
                variant="ghost"
                icon={<ChevronRightIcon />}
                borderRadius={20}
                onClick={() => next()}
                _focus={{ outline: "none", border: "none " }}
            >
                Next
            </IconButton>
        </Flex>
    );
};