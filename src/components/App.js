import React from 'react';
import './App.less';
import Dashboard from '../containers/Dashboard';
import Auth from './Auth';
//import { makeStyles } from '@material-ui/core';

import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const App = () => (
  <Auth>
    <Dashboard />
  </Auth>
);

export default App;