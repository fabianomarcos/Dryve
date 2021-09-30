/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { generalIcons } from '../../components/icons/icons';

import { ICustomer } from '../../interfaces/types';

import { Container, Header, TableContainer, ContentHeader } from './styles';
import Search from '../../components/Search';
import Button from '../../components/Button';
import ContactsTable from './Table/table';

const Contacts: React.FC = () => {
    const { search, plus, tune } = generalIcons;
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [customers, setCustomers] = useState<ICustomer[]>([]);
    const history = useHistory();

    const to = (promise: any) =>
        promise
            .then((result: any) => [null, result])
            .catch((error: any) => [error]);

    useEffect(() => {
        (async () => {
            setLoading(true);

            const [error, response] = await to(
                api.get<ICustomer[]>('/customers'),
            );

            if (error) {
                setHasError(!!error);
                return;
            }

            setCustomers(response?.data);
            setLoading(false);
        })();
    }, []);

    const handleFilter = useCallback(() => console.log('handleFilter'), []);

    const redirectForm = useCallback(
        () => history.push('/register'),
        [history],
    );

    return (
        <Container>
            <Header>
                <ContentHeader>
                    <h1>Contatos</h1>
                    <Search
                        name="search"
                        placeholder="Buscar..."
                        icon={search}
                    />
                </ContentHeader>

                <ContentHeader>
                    <Button
                        typeButton="white"
                        icon={tune}
                        loading={loading && !hasError}
                        onClick={handleFilter}
                    >
                        Filtrar
                    </Button>
                    <Button
                        typeButton="blue"
                        icon={plus}
                        loading={loading && !hasError}
                        onClick={redirectForm}
                    >
                        Adicionar
                    </Button>
                </ContentHeader>
            </Header>

            <TableContainer>
                <ContactsTable
                    customers={customers}
                    hasError={hasError}
                    loading={loading}
                />
            </TableContainer>
        </Container>
    );
};

export default Contacts;
