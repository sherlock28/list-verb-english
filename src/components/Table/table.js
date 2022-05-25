import React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";
import { Provider } from "./utils";

export const Table = (props) => {
    const { className, ...rest } = props;
    const classes = `${className || ""} responsiveTable`;

    return (
        <Provider value={{}}>
            <ChakraTable {...rest} className={classes} />
        </Provider>
    );
};
