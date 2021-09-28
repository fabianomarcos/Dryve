/* eslint-disable react/jsx-indent */
import React from 'react';
import { IDataCars, ISchedule } from '../../../interfaces/types';
import {
    formatDateForDisplay,
    formatDateInDays,
} from '../../../utils/functions';

import { Container, TestDriverExpired, TestDriverScheduled } from './styles';

interface IProps {
    data: IDataCars;
    schedule: ISchedule;
    expired: boolean;
}

const RowTestDriver: React.FC<IProps> = ({
    data,
    schedule,
    expired = false,
}) => {
    return (
        <Container expired={expired}>
            <img src={data.image} alt={data.model_name} />
            <div>
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
                    {formatDateInDays(schedule.date)}
                </TestDriverExpired>
            ) : (
                <TestDriverScheduled>
                    <span>Agendado</span>
                    {formatDateForDisplay(schedule.date)}
                </TestDriverScheduled>
            )}
        </Container>
    );
};

export default RowTestDriver;
