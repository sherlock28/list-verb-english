import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "pages/Home";
import { NotFoundPage } from "pages/NotFoundPage";

export function Routes() {
    return (
      <>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    );
  }