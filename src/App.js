import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Content from './Content';
import { makeStyles } from '@material-ui/core';
import { withAuthenticator } from '@aws-amplify/ui-react'

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
        <Content></Content>
      </main>
    </div>
  );
}

export default withAuthenticator(App);