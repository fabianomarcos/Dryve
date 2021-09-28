/* eslint-disable react/jsx-indent */
import React from 'react';
import { IDataCars } from '../../../interfaces/types';
import {
    formatDateForDisplay,
    formatDateInDays,
} from '../../../utils/functions';

import {
    Container,
    TestDriverExpired,
    TestDriverScheduled,
    Image,
} from './styles';

interface IProps {
    data: IDataCars;
    expired: boolean;
}

const RowTestDriver: React.FC<IProps> = ({ data, expired = false }) => {
    return (
        <Container>
            <Image image={data.image} />
            <div className="content">
                <strong>{data.model_name}</strong>
                <span>{data.version_name}</span>
                <span>{`${data.version_name} - ${data.fuel_type}`}</span>
                <span>
                    {`${data.mileage} - R$ ${data.ad_selling_price.toFixed(2)}`}
                </span>
            </div>
            {expired ? (
                <TestDriverExpired>
                    <span>Vencido</span>
                    {formatDateInDays(data.date_test)}
                </TestDriverExpired>
            ) : (
                <TestDriverScheduled>
                    <span>Agendado</span>
                    {formatDateForDisplay(data.date_test)}
                </TestDriverScheduled>
            )}
        </Container>
    );
};

export default RowTestDriver;
