/* eslint-disable react/jsx-indent */
import React, { useCallback } from 'react';

import { ICustomer } from '../../../interfaces/types';

import { mascaraTelephone } from '../../../utils/functions';

import { Container } from './styles';

interface IProps {
    customers: ICustomer[];
}

const ContactsTable: React.FC<IProps> = ({ customers }) => {
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
                                <td>{mascaraTelephone(`${telephone}`)}</td>
                            </tr>
                        ),
                    )}
                </tbody>
            </table>
        </Container>
    );
};

export default ContactsTable;
