import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Resumo');
  return (
    <>
      <Header />
      <Container>
        <SideMenu currentPage={currentPage} />
        <div>Body</div>
      </Container>
    </>
  );
};

export default Dashboard;
