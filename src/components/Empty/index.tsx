/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { Container } from './styles';

interface IHeaderProps {
    openModal: () => void;
}

const Empty: React.FC = () => {
    return (
        <Container>
            Nenhum dado encontrado <strong>:(</strong>
        </Container>
    );
};

export default Empty;
