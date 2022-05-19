import React from 'react';
import { Row } from "../Row";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
} from '@chakra-ui/react'

export function Results({ verbs }) {
    return (
        <Table size='md'>
            <Thead>
                <Tr>
                    <Th isNumeric></Th>
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
                {verbs?.map(item => <Row key={item.id} data={item} />)}
            </Tbody>
        </Table>
    )
}
