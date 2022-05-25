import React from "react";
import { Thead as ChakraThead } from "@chakra-ui/react";

export const Thead = (props) => {
    const { children, ...rest } = props;

    return (
        <ChakraThead {...rest}>
            {React.isValidElement(children) &&
                React.cloneElement(children, { inHeader: true })}
        </ChakraThead>
    );
};
