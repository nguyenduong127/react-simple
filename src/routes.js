import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Home1, NotFound } from 'containers';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      { /* Home1 (main) route */ }
      <Route path="home1" component={Home1} />
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
