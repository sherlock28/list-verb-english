import React from 'react';
import { Table, Thead, Tbody, Tr, Th } from "components/Table";
import "./table.css";
import { Row } from "../Row";
import { Pagination } from "components/Pagination";
import { usePagination } from "hooks/usePagination";

export function Results({ verbs }) {
    const { next, prev, currentData, currentPage, maxPage } = usePagination(
        verbs,
        20
    );
    return (
        <>
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
                    {currentData()?.map(item => <Row key={item.id} data={item} />)}
                </Tbody>
            </Table>
            <Pagination next={next} prev={prev} currentPage={currentPage} maxPage={maxPage} />
        </>
    )
}
