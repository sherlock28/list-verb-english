import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "pages/Home";
import { NotFoundPage } from "pages/NotFoundPage";
import { VerbsContextProvider } from "context/VerbsContext";

export function Routes() {
  return (
    <>
      <VerbsContextProvider>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </VerbsContextProvider>
    </>
  );
}