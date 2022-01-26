import React from 'react';
import { Row } from "../Row";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
} from '@chakra-ui/react'
import { listOfVerbs } from "../../data/listOfVerbs";

export function Results() {
    return (<Table size='sm'>
        <Thead>
            <Tr>
                <Th isNumeric>To convert</Th>
                <Th>Type</Th>
                <Th>Simple Form</Th>
                <Th>Third Person</Th>
                <Th>Simple Past</Th>
                <Th>Past Participle</Th>
                <Th>Gerund</Th>
                <Th>Meaning</Th>
            </Tr>
        </Thead>
        <Tbody>
            {listOfVerbs.map(item => <Row key={item.id} data={item} />)}
        </Tbody>
    </Table>)
}
