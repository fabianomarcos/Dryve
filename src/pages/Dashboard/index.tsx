import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleModal = useCallback(() => setModalOpen(!modalOpen), [modalOpen]);

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <h1>Body</h1>
    </>
  );
};

export default Dashboard;
