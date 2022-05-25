import React from "react";
import { Tr as ChakraTr } from "@chakra-ui/react";
import { Consumer } from "./utils";

const TrInner = (props) => {
  const { headers, children, inHeader, ...rest } = props;

  if (headers && inHeader) {
    React.Children.map(props.children, (child, i) => {
      if (child) {
        headers[i] = (child).props.children;
      }
    });
  }

  const childProps = (idx) =>
    inHeader ? { key: idx } : { key: idx, columnKey: idx };

  return (
    <ChakraTr {...rest}>
      {children &&
        React.Children.map(
          children,
          (child, idx) =>
            React.isValidElement(child) &&
            React.cloneElement(child, childProps(idx))
        )}
    </ChakraTr>
  );
};

export const Tr = (props) => (
  <Consumer>{(headers) => <TrInner {...props} headers={headers} />}</Consumer>
);
