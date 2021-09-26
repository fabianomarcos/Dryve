import React from 'react';

import { Container } from './styles';

interface IProps {
  icon: JSX.Element;
  title: string;
  data: string;
}

const HeaderCard: React.FC<IProps> = ({ icon, title, data }) => {
  return (
    <Container>
      {title}
      <div>
        {data}
        {icon}
      </div>
    </Container>
  );
};

export default HeaderCard;
