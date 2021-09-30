/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { Container } from './styles';

interface IProps {
    errorMessage?: string;
    showIcon?: boolean;
}

const Empty: React.FC<IProps> = ({ errorMessage, showIcon = true }) => {
    return (
        <Container>
            {errorMessage || 'Nenhum dado encontrado'}{' '}
            {showIcon && <strong>:(</strong>}
        </Container>
    );
};

export default Empty;
