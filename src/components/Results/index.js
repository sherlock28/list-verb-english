import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "components/Table";
import "./table.css";
import { Row } from "../Row";

export function Results({ verbs }) {
    return (
        <Table variant="striped" colorScheme="blue" size="md">
            <Thead>
                <Tr>
                    <Th>Id</Th>
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
