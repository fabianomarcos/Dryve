/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useCallback } from 'react';
import Empty from '../../../components/Empty';
import Pagination from '../../../components/Pagination';

import { ICustomer } from '../../../interfaces/types';

import { mascaraTelephone } from '../../../utils/functions';

import { Container } from './styles';

interface IProps {
    customers: ICustomer[];
    hasError: boolean;
    loading: boolean;
}

const ContactsTable: React.FC<IProps> = ({ customers, hasError, loading }) => {
    const formatName = useCallback((name, lastName) => {
        const initial = `${name.substring(0, 1)}${lastName.substring(0, 1)}`;
        const completeName = `${name} ${lastName}`;
        return (
            <div className="contentName">
                <span>{initial.toUpperCase()}</span>
                {completeName}
            </div>
        );
    }, []);

    return (
        <Container>
            <>
                {customers && customers?.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do cliente</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>

                        <tbody>
                            {customers.map(
                                ({ id, name, lastName, email, telephone }) => (
                                    <tr key={id}>
                                        <td>{formatName(name, lastName)}</td>
                                        <td>{email}</td>
                                        <td>
                                            {mascaraTelephone(`${telephone}`)}
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                        <Pagination />
                    </table>
                )}

                {loading && !hasError && (
                    <Empty errorMessage="Carregando..." showIcon={!loading} />
                )}

                {customers?.length === 0 && !loading && !hasError && <Empty />}

                {hasError && (
                    <Empty errorMessage="Ocorreu algum erro, tente novamente mais tarde." />
                )}
            </>
        </Container>
    );
};

export default ContactsTable;
