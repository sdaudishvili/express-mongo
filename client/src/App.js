/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import theme from './theme';
import { ScrollReset, AuthGuard, BaseRoutesProvider } from './components';
import './assets/scss/index.scss';
import { UserProvider } from './context/userContext';

const history = createBrowserHistory();

const App = () => {
  console.log(process.env.TEST);
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider dense={false}>
        <UserProvider>
          <Router history={history}>
            <ScrollReset />
            {/* <AuthGuard> */}
            <BaseRoutesProvider />
            {/* </AuthGuard> */}
          </Router>
        </UserProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
