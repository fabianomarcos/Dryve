/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import {
    Container,
    ContentForm,
    Content,
    TitleSection,
    EqualSizeFields,
} from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';
import { generalIcons } from '../../../components/icons/icons';
import { Header } from '../styles';

interface IProps {
    title: string;
    data: any;
}

const ContactForm: React.FC<IProps> = ({ title, data }) => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const handleAddEmployee = useCallback(
        (employersList: any, currentEmployee: any) => {
            console.log(employersList);
        },
        [],
    );

    const { chevronLeft } = generalIcons;

    return (
        <Container>
            <Header>
                {chevronLeft}
                <h1>Editar Contato</h1>
            </Header>

            <Content>
                <ContentForm>
                    <span className="title">Informações</span>
                    <Form
                        ref={formRef}
                        onSubmit={() => console.log('Submit')}
                        initialData={data}
                    >
                        <div className="radio_buttons">
                            <RadioButton
                                text="Pessoa física"
                                value="physical"
                                name="kind_person"
                            />
                            <RadioButton
                                text="Pessoa jurídica"
                                value="physical"
                                name="kind_person"
                            />
                        </div>

                        <TitleSection>Dados Pessoais</TitleSection>

                        <EqualSizeFields>
                            <Input
                                header="Nome"
                                name="name"
                                placeholder="Nome"
                            />
                            <Input
                                name="lastName"
                                placeholder="Sobrenome"
                                header="Sobrenome"
                            />
                        </EqualSizeFields>

                        <EqualSizeFields>
                            <Input
                                name="email"
                                placeholder="E-mail"
                                header="E-mail"
                            />
                            <Input
                                name="telephone"
                                placeholder="Telefone"
                                header="Telefone"
                            />
                        </EqualSizeFields>

                        <EqualSizeFields>
                            <section>
                                <Input
                                    name="birth"
                                    placeholder="Nascimento"
                                    header="Nascimento"
                                />
                                <Input
                                    name="genre"
                                    placeholder="Gênero"
                                    header="Gênero"
                                />
                                <Input name="rg" placeholder="RG" header="RG" />
                                <Input
                                    name="cpf"
                                    placeholder="CPF"
                                    header="CPF"
                                />
                            </section>
                        </EqualSizeFields>

                        <TitleSection>Endereço</TitleSection>
                        <Input name="cep" placeholder="CEP" header="CEP" />

                        <Input
                            name="address"
                            placeholder="Endereço"
                            header="Endereço"
                        />
                        <Input
                            name="number"
                            placeholder="Número"
                            header="Número"
                        />

                        <EqualSizeFields>
                            <Input
                                name="complement"
                                placeholder="Complemento"
                                header="Complemento"
                            />
                            <Input
                                name="neighborhood "
                                placeholder="Bairro"
                                header="Bairro"
                            />
                        </EqualSizeFields>

                        <Input
                            name="city"
                            placeholder="Cidade"
                            header="Cidade"
                        />
                        <Input
                            name="state"
                            placeholder="Estado"
                            header="Estado"
                        />
                        <TitleSection>Dados Bancários</TitleSection>

                        <EqualSizeFields>
                            <Input
                                name="agency"
                                placeholder="Agência"
                                header="Agência"
                            />
                            <Input
                                name="account"
                                placeholder="Conta"
                                header="Conta"
                            />
                            <Input
                                name="digit"
                                placeholder="Digito"
                                header="Digito"
                            />
                        </EqualSizeFields>

                        <TitleSection>Tags</TitleSection>
                        <Button
                            loading={false}
                            typeButton="blue"
                            onClick={() => {}}
                        >
                            Adicionar
                        </Button>
                        <div className="button-content">
                            <Button
                                loading={false}
                                typeButton="blue"
                                className="success"
                                type="submit"
                            >
                                Salvar
                            </Button>
                        </div>
                    </Form>
                </ContentForm>

                <ContentForm>A fazer</ContentForm>
            </Content>
        </Container>
    );
};

export default ContactForm;
