/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { Content, Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <Container>
            <Header />
            <Content littleSideMenu={pathname === '/register'}>
                <SideMenu showLittleMenu={pathname === '/register'} />
                {children}
            </Content>
        </Container>
    );
};

export default Dashboard;
