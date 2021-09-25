import React from 'react';

import { FiSettings, FiHome, FiBell, FiChevronDown } from 'react-icons/fi';

import { Container, Avatar } from './styles';

import Logo from '../../assets/logo.svg';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC = () => (
  <Container>
    <header>
      <section>
        <img src={Logo} alt="Dryve" />
        <FiHome color="blue" size={16} />
        <span> DryveOne - Frederico Boeri</span>
        <FiChevronDown size={24} />
      </section>
      <nav>
        <FiSettings size={24} />
        <FiBell size={24} />
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

export default Header;
