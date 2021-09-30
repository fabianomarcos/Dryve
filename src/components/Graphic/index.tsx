import React from 'react';

import { Container } from './styles';

import { generalIcons } from '../icons/icons';

interface IHeaderProps {
    openModal: () => void;
}

const Graphic: React.FC = () => {
    const { settings, home, bell, chevronDown } = generalIcons;
    return <Container />;
};

export default Graphic;
