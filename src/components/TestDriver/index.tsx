/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { Container } from './styles';

import Divider from '../Divider';
import { IDataCars } from '../../interfaces/types';
import RowTestDriver from './RowTestDriver';

interface IProps {
    title: string;
    cars: IDataCars[];
}

const TestDriver: React.FC<IProps> = ({ title, cars }) => {
    return (
        <Container>
            <h4>{title}</h4>
            <Divider />
            {cars?.length > 0 &&
                cars.map((car: IDataCars) => (
                    <>
                        <RowTestDriver
                            key={car.brand_uuid}
                            data={car}
                            expired={car.expired}
                        />
                        <Divider />
                    </>
                ))}
        </Container>
    );
};

export default TestDriver;
