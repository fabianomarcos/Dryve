/* eslint-disable react/jsx-indent */
import React from 'react';
import { IDataCars } from '../../../interfaces/IDataCars';

import { Container } from './styles';

interface IProps {
    data: IDataCars;
}

const RowTestDriver: React.FC<IProps> = ({ data }) => {
    return (
        <Container>
            <img src={data.image} alt={data.model_name} />
            <div>
                <strong>{data.model_name}</strong>
                <span>{data.version_name}</span>
                <span>{`${data.version_name} - ${data.fuel_type}`}</span>
                <span>
                    {`${data.mileage} - R$ ${data.ad_selling_price.toFixed(2)}`}
                </span>
            </div>
            <div>
                <span>Vencido</span>
                <span>Há 2 dias</span>
            </div>
        </Container>
    );
};

export default RowTestDriver;
