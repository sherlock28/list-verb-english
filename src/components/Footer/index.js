import React from 'react';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GoMail } from "react-icons/go";

export function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            mt={10}
            padding={8}
            minW={'100vw'}>
            <Container
                as={Stack}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© {(new Date()).getFullYear()} Copyright: Victor Rodolfo Cáceres</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton 
                        label={'Email'} 
                        href={'mailto:caceresvictorrodolfo@gmail.com'} 
                        target="_blank"
                        rel="noopener noreferrer">
                        <GoMail />
                    </SocialButton>
                    <SocialButton 
                        label={'Linkedin'} 
                        href={'https://www.linkedin.com/in/vcaceres'} 
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </SocialButton>
                    <SocialButton 
                        label={'Github'} 
                        href={'https://github.com/sherlock28'} 
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};