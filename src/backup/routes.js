import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Home1, Login, NotFound } from 'containers';
import { Layout, LoginLayout, MainLayout } from 'layouts'

// eslint-disable-next-line import/no-dynamic-require
if (typeof System.import === 'undefined') System.import = module => Promise.resolve(require(module));

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={Layout} >
      { /* default */ }
      <IndexRoute component={App} />

      {/* { /* login route */ }
      <Route component={LoginLayout} >
        <Route path="login" component={Login} />
      </Route>

      <Route component={MainLayout} >
         <Route path="home" component={Home} />
         <Route path="home1" component={Home1} />
      </Route>

      { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} /> */}
    </Route>
  );
};
