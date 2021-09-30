/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import {
    Container,
    ContentForm,
    Content,
    TitleSection,
    EqualSizeFields,
    SmallField,
    BigFieldWithSmallField,
    ButtonContainer,
} from './styles';
import { Header } from '../styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';
import { generalIcons } from '../../../components/icons/icons';

interface IProps {
    title: string;
    data: any;
}

const ContactForm: React.FC<IProps> = ({ title, data }) => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const { chevronLeft, plus } = generalIcons;

    const backPage = useCallback(() => {
        history.push('/contacts');
    }, [history]);

    return (
        <Container>
            <Header>
                <div onClick={backPage}>{chevronLeft}</div>
                <h1>Editar Contato</h1>
            </Header>

            <Content>
                <ContentForm>
                    <span className="title">Informações</span>
                    <Form
                        ref={formRef}
                        onSubmit={(values: any) => console.log(values)}
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
                            <div className="smallFields">
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
                            </div>
                        </EqualSizeFields>

                        <TitleSection>Endereço</TitleSection>

                        <SmallField>
                            <Input name="cep" placeholder="CEP" header="CEP" />
                        </SmallField>

                        <BigFieldWithSmallField>
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
                        </BigFieldWithSmallField>

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

                        <BigFieldWithSmallField>
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
                        </BigFieldWithSmallField>

                        <TitleSection>Dados Bancários</TitleSection>
                        <EqualSizeFields>
                            <div className="smallFields">
                                <Input
                                    name="dropdown"
                                    placeholder="Agência"
                                    header="Agência"
                                />
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
                            </div>
                        </EqualSizeFields>

                        <TitleSection>Tags</TitleSection>

                        <ButtonContainer>
                            <Button
                                loading={false}
                                typeButton="white"
                                icon={plus}
                                onClick={() => {}}
                            >
                                Adicionar
                            </Button>
                            <Button
                                loading={false}
                                typeButton="blue"
                                className="success"
                                type="submit"
                            >
                                Salvar
                            </Button>
                        </ButtonContainer>
                    </Form>
                </ContentForm>

                <ContentForm>A fazer</ContentForm>
            </Content>
        </Container>
    );
};

export default ContactForm;
