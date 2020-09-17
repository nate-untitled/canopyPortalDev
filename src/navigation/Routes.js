import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** Container components */
import Dashboard from '../containers/Dashboard';
import Auth from '../components/Auth';

/** private route component */
import PrivateRoute from './PrivateRoute';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <PrivateRoute exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/" component={Auth} />
        </React.Fragment>
      </Router>
    );
  }
}

export default AppRouter;