/* eslint-disable react/jsx-indent */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <Router>
            <Dashboard>
                <Routes />
            </Dashboard>
        </Router>
    </>
);

export default App;
