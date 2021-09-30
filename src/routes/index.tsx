/* eslint-disable react/jsx-indent */
import React from 'react';

import { Switch, Route } from 'react-router-dom';

// pages
import Contacts from '../pages/Contacts';
import ContactsForm from '../pages/Contacts/Form';
import Home from '../pages/Home';
import Default from '../pages/Default';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/opportunities" component={Default} />
        <Route path="/schedule" component={Default} />
        <Route path="/vehicles" component={Default} />
        <Route path="/publish" component={Default} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/analytics" component={Default} />
        <Route path="/financing" component={Default} />
        <Route path="/contacts/edit" component={ContactsForm} />
        <Route path="/register" component={ContactsForm} />
    </Switch>
);

export default Routes;
