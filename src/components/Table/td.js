import React from "react";
import { Td as ChakraTd } from "@chakra-ui/react";
import { Consumer } from "./utils";

const TdInner = (props) => {
  const { narrowHeaders, columnKey = 0, ...rest } = props;
  const classes = `${props.className || ""} pivoted`;

  return (
    <ChakraTd data-testid="td" {...rest} className={classes}>
      <div data-testid="td-before" className="tdBefore">
        {narrowHeaders[columnKey]}
      </div>
      {props.children ?? <div>&nbsp;</div>}
    </ChakraTd>
  );
};

export const Td = (props) => (
  <Consumer>
    {(headers) => <TdInner {...props} narrowHeaders={headers} />}
  </Consumer>
);
