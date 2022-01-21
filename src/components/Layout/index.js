import React from 'react';
import { Container } from '@chakra-ui/react'

export function Layout({ children }) {
    return <Container>
        {children}
    </Container>;
}
