/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { InputHTMLAttributes, useRef } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: JSX.Element;
}

const Search: React.FC<IInputProps> = ({ name, icon: Icon, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Container>
            <input name={name} ref={inputRef} {...rest} />
            {Icon && Icon}
        </Container>
    );
};

export default Search;
