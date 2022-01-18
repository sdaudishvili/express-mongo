import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '@/routes';

const BaseRoutesProvider = () => {
  return (
    <Switch>
      {routes &&
        routes.map((x) =>
          x.routes?.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={() => (
                <x.layout>
                  <route.component />
                </x.layout>
              )}
            />
          ))
        )}
      <Redirect exact from="/" to="/contact" />
    </Switch>
  );
};

export default BaseRoutesProvider;
