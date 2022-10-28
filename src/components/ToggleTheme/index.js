import React from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function ToggleTheme() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box
            as={'header'}
            position={'relative'}
            left={["40vw"]}
        >
            <IconButton
                size="lg"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                _focus={{ outline: "none", border: "none " }}
            />
        </Box>
    )
}
