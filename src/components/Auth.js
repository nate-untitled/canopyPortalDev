import React from 'react';
import './App.css';
import NavBar from '../containers/NavBar';
import Content from '../containers/Content';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
        <nav>
            <NavBar></NavBar>
        </nav>
        <main>
            <Content></Content>
        </main>
    </div>
    ) : (
      <AmplifyAuthenticator />
  );
}

export default AuthStateApp;