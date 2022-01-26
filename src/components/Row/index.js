import React from 'react';
import { Tr, Td } from "@chakra-ui/react";

export function Row({ data }) {
    return <>
        <Tr>
            <Td>{ data.id }</Td>
            <Td>{ data.type }</Td>
            <Td>{ data.simpleForm }</Td>
            <Td>{ data.thirdPerson }</Td>
            <Td>{ data.simplePast }</Td>
            <Td>{ data.pastParticiple }</Td>
            <Td>{ data.gerund }</Td>
            <Td>{ data.meaning }</Td>
        </Tr>
    </>;
}
