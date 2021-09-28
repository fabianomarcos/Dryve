/* eslint-disable react/jsx-indent */
import React from 'react';
import { Divider } from '../../Divider/styles';

import { Container, Image } from './styles';

interface IProps {
    pathIcon: string;
    name: string;
    quantity: number;
}

const RowLeadsCard: React.FC<IProps> = ({ pathIcon, name, quantity = 0 }) => {
    return (
        <>
            <Container>
                <Image>
                    <img src={pathIcon} alt="" />
                </Image>
                {name}
                <span>{quantity}</span>
            </Container>
            <Divider />
        </>
    );
};

export default RowLeadsCard;
