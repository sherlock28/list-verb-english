import React from 'react';
import { Container } from '@chakra-ui/react'
import { Title } from "components/Title";
import { Footer } from "components/Footer";
import { PaginationCmp } from 'components/Pagination';
import { ScrollToTop } from 'components/ScrollToTop';

export function Layout({ children }) {
    return (
        <>
            <Container maxW='6xl' mt={10} centerContent position='relative' zIndex={1}>
                <Title />
                {children}
                <PaginationCmp />
            </Container>
            <ScrollToTop />
            <Footer />
        </>
    );
}
