/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { Container } from './styles';

import RowLeadsCard from './RowLeadsCard/cardMenu';
import api from '../../services/api';
import { ILastLeads } from '../../interfaces/types';

interface IHeaderProps {
    openModal: () => void;
}

const LastLeads: React.FC = () => {
    const [leads, setLeads] = React.useState<ILastLeads[]>([]);

    React.useEffect(() => {
        (async () => {
            const response = await api.get<ILastLeads[]>(
                '/last-leads-by-portal',
            );

            const leadsOrdered = response.data.sort((a, b) =>
                a.quantity > b.quantity ? -1 : 1,
            );

            setLeads(leadsOrdered);
        })();
    }, []);

    return (
        <Container>
            <p>Leads por portal (últimos 30 dias)</p>
            {leads?.length > 0 &&
                leads.map((lead: ILastLeads) => (
                    <RowLeadsCard
                        key={lead.id}
                        pathIcon={lead.image}
                        name={lead.name}
                        quantity={lead.quantity}
                    />
                ))}
        </Container>
    );
};

export default LastLeads;
