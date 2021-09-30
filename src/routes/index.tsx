/* eslint-disable react/jsx-indent */
import React from 'react';

import { Switch, Route } from 'react-router-dom';

// pages
import Contacts from '../pages/Contacts';
import ContactsForm from '../pages/Contacts/Form';
import Home from '../pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/opportunities" component={Home} />
        <Route path="/schedule" component={Home} />
        <Route path="/vehicles" component={Home} />
        <Route path="/publish" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/analytics" component={Home} />
        <Route path="/financing" component={Home} />
        <Route path="/contacts/edit" component={ContactsForm} />
    </Switch>
);

export default Routes;
