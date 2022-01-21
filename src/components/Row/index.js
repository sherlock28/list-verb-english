import React from 'react';
import { Tr, Td } from "@chakra-ui/react";

export function Row({ data }) {
    return <>
        <Tr>
            <Td>{ data }</Td>
            <Td>{ data }</Td>
            <Td>{ data }</Td>
        </Tr>
    </>;
}
