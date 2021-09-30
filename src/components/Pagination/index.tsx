/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
import React from 'react';
import { generalIcons } from '../icons/icons';

import { Container } from './styles';

const Pagination: React.FC = () => (
    <Container>
        <button name="Pagination">1</button>
        <button name="Pagination">2</button>
        <button name="Pagination">3</button>
        <button name="Pagination">4</button>
        <button name="Pagination">5</button>
        <button name="Pagination">...</button>
        <button name="Pagination">30</button>
        {generalIcons.chevronRight}
    </Container>
);

export default Pagination;
