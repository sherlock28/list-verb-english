import React, { useState, useEffect } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi'
import { Box, Button } from '@chakra-ui/react'

export function ScrollToTop() {
    const [isVisible, setIsVisable] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisable(true);
        } else {
            setIsVisable(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <Box
            pos="fixed"
            bottom="10" right="30"
            zIndex={100}>
            <Button
                onClick={scrollToTop}
                padding={0}
                margin={0}
                bg={'gray.400'}
                color={'whiteAlpha.900'}
                borderRadius={50}
                _hover={{ bg: 'gray.700' }}
                _focus={{ outline: 'none' }}
                opacity={() => isVisible ? 1 : 0}>
                <BiArrowFromBottom />
            </Button>
        </Box>
    );
}
