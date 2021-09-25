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
          <span> DryveOne - Frederico Boeri</span>
          {chevronDown}
        </section>
        <nav>
          {settings}
          {bell}
          <Avatar>
            <img
              src="https://avatars.githubusercontent.com/u/42679820?v=4"
              alt="Usuário"
            />
          </Avatar>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
