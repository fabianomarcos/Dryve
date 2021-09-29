/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useCallback } from 'react';

import { generalIcons } from '../icons/icons';
import CardMenu from './cardMenu/cardMenu';

import { Container } from './styles';

interface IProps {
    currentPage: string;
}

const SideMenu: React.FC<IProps> = ({ currentPage }) => {
    const { grid, bank, rocket, user, calendar, taxi, chart, tags } =
        generalIcons;

    const isActive = useCallback(
        (page: string) => currentPage === page,
        [currentPage],
    );

    return (
        <Container>
            <CardMenu
                title="Resumo"
                icon={grid}
                isActive={isActive('Resumo')}
            />
            <CardMenu
                title="Oportunidades"
                icon={tags}
                isActive={isActive('Oportunidades')}
            />
            <CardMenu
                title="Agenda"
                icon={calendar}
                isActive={isActive('Agenda')}
            />
            <CardMenu
                title="Veículos"
                icon={taxi}
                isActive={isActive('Veículos')}
            />
            <CardMenu
                title="Publicação"
                icon={rocket}
                isActive={isActive('Publicação')}
            />
            <CardMenu
                title="Contatos"
                icon={user}
                isActive={isActive('Contatos')}
            />
            <CardMenu
                title="Analytics"
                icon={chart}
                isActive={isActive('Analytics')}
            />
            <CardMenu
                title="Financiamento"
                icon={bank}
                isActive={isActive('Financiamento')}
            />
        </Container>
    );
};

export default SideMenu;
