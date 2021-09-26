/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import Graphic from '../../components/Graphic';
import HeaderCard from '../../components/HeaderCard';
import { generalIcons } from '../../components/icons/icons';
import LastLeads from '../../components/LastLeads';
import TestDriver from '../../components/TestDriver';
import { IDataCars } from '../../interfaces/IDataCars';
import api from '../../services/api';

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

    useEffect(() => {
        (async () => {
            const response = await api.get<IDataCars[]>('/cars');
            setCars(response.data);
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
                <TestDriver title="Test-drives vencidos" cars={cars} />
                <TestDriver title="Test-drives do dia" cars={cars} />
            </ContentTestDriver>
        </Container>
    );
};

export default Home;
