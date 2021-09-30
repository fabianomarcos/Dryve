/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { generalIcons } from '../icons/icons';
import CardMenu from './cardMenu/cardMenu';

import { Container } from './styles';

const SideMenu: React.FC = () => {
    const { grid, bank, rocket, user, calendar, taxi, chart, tags } =
        generalIcons;

    const { pathname } = useLocation();
    const url = pathname.replace('/', '');
    const isActive = useCallback((page: string) => url === page, [url]);
    const showLittleMenu = false;

    return (
        <Container>
            <CardMenu
                url="home"
                title={showLittleMenu ? '' : 'Resumo'}
                icon={grid}
                isActive={isActive('home')}
            />
            <CardMenu
                url="opportunities"
                title={showLittleMenu ? '' : 'Oportunidades'}
                icon={tags}
                isActive={isActive('opportunities')}
            />
            <CardMenu
                url="schedule"
                title={showLittleMenu ? '' : 'Agenda'}
                icon={calendar}
                isActive={isActive('schedule')}
            />
            <CardMenu
                url="vehicles"
                title={showLittleMenu ? '' : 'Veículos'}
                icon={taxi}
                isActive={isActive('vehicles')}
            />
            <CardMenu
                url="publish"
                title={showLittleMenu ? '' : 'Publicação'}
                icon={rocket}
                isActive={isActive('publish')}
            />
            <CardMenu
                url="contacts"
                title={showLittleMenu ? '' : 'Contatos'}
                icon={user}
                isActive={isActive('contacts')}
            />
            <CardMenu
                url="analytics"
                title={showLittleMenu ? '' : 'Analytics'}
                icon={chart}
                isActive={isActive('analytics')}
            />
            <CardMenu
                url="financing"
                title={showLittleMenu ? '' : 'Financiamento'}
                icon={bank}
                isActive={isActive('financing')}
            />
        </Container>
    );
};

export default SideMenu;
