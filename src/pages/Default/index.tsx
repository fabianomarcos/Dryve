/* eslint-disable react/jsx-indent */
import React from 'react';

import dryve from '../../assets/dryve.svg';
import { Container } from './styles';

const DefaultPage: React.FC = () => {
    return (
        <Container>
            <img src={dryve} alt="Teste Front-end" />
        </Container>
    );
};

export default DefaultPage;
