/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { InputHTMLAttributes, useCallback } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: JSX.Element;
    useTerm: {
        term: string;
        setTerm: React.Dispatch<React.SetStateAction<string>>;
    };
    data: any;
    keyResponse: string;
    setResponse: any;
}

const Search: React.FC<IInputProps> = ({
    name,
    icon: Icon,
    useTerm,
    data,
    setResponse,
    keyResponse,
    ...rest
}) => {
    const { term, setTerm } = useTerm;

    const debouncedSearchTerm = useDebounce(term, 500);

    const searchCharacters = useCallback(
        async (search: string, array: any) => {
            setResponse([]);
            if (search) {
                const dataFiltered = array?.filter((item: any) => {
                    return (
                        item[keyResponse]
                            ?.toLocaleLowerCase()
                            ?.indexOf(term.toLocaleLowerCase()) > -1
                    );
                });

                if (dataFiltered) setResponse(dataFiltered);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [term],
    );

    React.useEffect(() => {
        const verifyTerm =
            debouncedSearchTerm &&
            term?.length > 0 &&
            data?.length > 0 &&
            keyResponse;

        if (verifyTerm) searchCharacters(debouncedSearchTerm, data);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm]);

    return (
        <Container>
            <input
                name={name}
                {...rest}
                onChange={e => setTerm(e.target.value)}
            />
            {Icon && Icon}
        </Container>
    );
};

export default Search;
