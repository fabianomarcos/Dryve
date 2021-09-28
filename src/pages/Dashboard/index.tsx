/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import Contacts from '../Contacts';
import Home from '../Home';
import { Content, Container } from './styles';

const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('Contatos');
    return (
        <Container>
            <Header />
            <Content>
                <SideMenu currentPage={currentPage} />
                <Home title={currentPage} />
                {/* <Contacts title={currentPage} /> */}
            </Content>
        </Container>
    );
};

export default Dashboard;
