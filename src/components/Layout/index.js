import React from 'react';
import { Container } from '@chakra-ui/react'
import { Title } from "components/Title";
import { Footer } from "components/Footer";
import { PaginationCmp } from 'components/Pagination'

export function Layout({ children }) {
    return (
        <>
            <Container maxW='6xl' mt={10} centerContent>
                <Title />
                {children}
                <PaginationCmp />
            </Container>
            <Footer />
        </>
    );
}
