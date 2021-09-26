/* eslint-disable react/jsx-indent */
import React from 'react';

import { Container } from './styles';

import { generalIcons } from '../icons/icons';
import RowLeadsCard from './RowLeadsCard/cardMenu';

interface IHeaderProps {
    openModal: () => void;
}

const LastLeads: React.FC = () => {
    const { settings, home, bell, chevronDown } = generalIcons;
    return (
        <Container>
            <p>Leads por portal (últimos 30 dias)</p>
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
            <RowLeadsCard icon={settings} name="OLx" quantity={40} />
        </Container>
    );
};

export default LastLeads;
