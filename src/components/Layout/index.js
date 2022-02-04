import React from 'react';
import { Container } from '@chakra-ui/react'

export function Layout({ children }) {
    return <Container maxW='6xl' mt={10} centerContent>
        {children}
    </Container>;
}
