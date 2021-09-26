import React from 'react';

import { Container } from './styles';

interface IProps {
  icon: JSX.Element;
  title: string;
  isActive: boolean;
}

const HeaderCard: React.FC<IProps> = ({ icon, title, isActive = false }) => {
  return (
    <Container isActive={isActive}>
      {icon}
      {title}
    </Container>
  );
};

export default HeaderCard;
