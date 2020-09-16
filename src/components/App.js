import React from 'react';
import './App.css';
import Auth from './Auth';
import { makeStyles } from '@material-ui/core';

import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Auth></Auth>
  );
}

export default App;