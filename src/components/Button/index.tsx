/* eslint-disable react/jsx-indent */
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading: boolean;
    typeButton: string;
    icon: JSX.Element;
};

const Button: React.FC<ButtonProps> = ({
    children,
    loading,
    icon,
    typeButton,
    ...rest
}) => (
    <Container typeButton={typeButton} type="button" {...rest}>
        <>
            {icon}
            {loading ? 'Carregando...' : children}
        </>
    </Container>
);

export default Button;
