/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { Container, Avatar } from './styles';

import Logo from '../../assets/logo.svg';
import { generalIcons } from '../icons/icons';

interface IHeaderProps {
    openModal: () => void;
}

const Header: React.FC = () => {
    const { settings, home, bell, chevronDown } = generalIcons;
    return (
        <Container>
            <header>
                <section>
                    <img src={Logo} alt="Dryve" />
                    {home}
                    <span> DryveOne - Fabiano Marcos</span>
                    {chevronDown}
                </section>
                <nav>
                    {bell}
                    {settings}
                    <Avatar>
                        <img
                            src="https://avatars.githubusercontent.com/u/42679820?v=4"
                            alt="Fabiano Marcos"
                        />
                    </Avatar>
                </nav>
            </header>
        </Container>
    );
};

export default Header;
