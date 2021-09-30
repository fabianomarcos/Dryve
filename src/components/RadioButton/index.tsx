/* eslint-disable react/jsx-indent */
import React, { InputHTMLAttributes, useRef } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
}

const RadioButton: React.FC<IInputProps> = ({ text, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Container>
            <span>
                <input type="radio" />
            </span>
            <span>{text}</span>
        </Container>
    );
};

export default RadioButton;
