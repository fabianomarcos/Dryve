/* eslint-disable react/jsx-indent */
import React from 'react';

import { Container } from './styles';

interface IProps {
    icon: JSX.Element;
    name: string;
    quantity: number;
}

const RowLeadsCard: React.FC<IProps> = ({ icon, name, quantity = 0 }) => {
    return (
        <Container>
            {icon}
            {name}
            <span>{quantity}</span>
        </Container>
    );
};

export default RowLeadsCard;
