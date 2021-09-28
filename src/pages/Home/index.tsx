/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useMemo } from 'react';

import api from '../../services/api';

import Graphic from '../../components/Graphic';
import HeaderCard from '../../components/HeaderCard';
import { generalIcons } from '../../components/icons/icons';
import LastLeads from '../../components/LastLeads';
import TestDriver from '../../components/TestDriver';

import { IDataCars, IStatusTestDriver } from '../../interfaces/types';

import {
    Container,
    ContentHeaderCards,
    ContainerGraphic,
    ContentTestDriver,
} from './styles';

interface IProps {
    title: string;
}

const Home: React.FC<IProps> = ({ title }) => {
    const [cars, setCars] = useState<IDataCars[]>([]);
    const expiredTestDrivers = useMemo(
        () => cars.filter(c => c.expired),
        [cars],
    );
    const validTestDrivers = useMemo(
        () => cars.filter(c => !c.expired),
        [cars],
    );

    useEffect(() => {
        (async () => {
            const response = await api.get<IDataCars[]>('/cars');

            const statusTestDrive = await api.get<IStatusTestDriver[]>(
                '/test-driver',
            );

            const carsFormatted = response.data.map(d => {
                const car = statusTestDrive.data.find(
                    status => status.vehicle_uuid === d.vehicle_uuid,
                );
                return { ...d, expired: car?.expired || false };
            });

            setCars(carsFormatted);
        })();
    }, []);

    const { taxi, tags, calendar } = generalIcons;
    return (
        <Container>
            <h1>{title}</h1>
            <ContentHeaderCards>
                <HeaderCard title="Vendas publicadas" data="26" icon={taxi} />
                <HeaderCard title="Preço médio" data="R$ 41.5k" icon={tags} />
                <HeaderCard title="Km médio" data="68.800 km" icon={taxi} />
                <HeaderCard
                    title="Idade média do estoque"
                    data="4 anos"
                    icon={calendar}
                />
            </ContentHeaderCards>

            <ContainerGraphic>
                <Graphic />
                <LastLeads />
            </ContainerGraphic>

            <ContentTestDriver>
                <TestDriver
                    title="Test-drives vencidos"
                    cars={expiredTestDrivers}
                />
                <TestDriver
                    title="Test-drives do dia"
                    cars={validTestDrivers}
                />
            </ContentTestDriver>
        </Container>
    );
};

export default Home;
