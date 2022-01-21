import React from 'react';
import { Row } from "../Row";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
} from '@chakra-ui/react'

const listItem = ['item1', 'item2', 'item3'];

export function Results() {
    return (<Table size='sm'>
        <Thead>
            <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
            </Tr>
        </Thead>
        <Tbody>
            {listItem.map((item, index) => <Row key={index} data={item} />)}

        </Tbody>
    </Table>)
}
