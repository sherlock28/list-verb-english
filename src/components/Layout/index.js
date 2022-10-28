import React from 'react';
import { Container } from '@chakra-ui/react'
import { Title } from "components/Title";
import { Footer } from "components/Footer";
import { ScrollToTop } from 'components/ScrollToTop';
import { ToggleTheme } from "components/ToggleTheme";

export function Layout({ children }) {
    return (
        <>
            <Container
                maxW='6xl'
                mt={10}
                centerContent
                position='relative'
                zIndex={1}
                minH='80vh'
            >
                <ToggleTheme />
                <Title />
                {children}
            </Container>
            <ScrollToTop />
            <Footer />
        </>
    );
}
