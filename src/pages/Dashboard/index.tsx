/* eslint-disable react/jsx-indent */
import React from 'react';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { Content, Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            <Content>
                <SideMenu />
                {children}
            </Content>
        </Container>
    );
};

export default Dashboard;
