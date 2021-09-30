/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

interface IProps {
    icon: JSX.Element;
    title: string;
    url: string;
    isActive: boolean;
}

const HeaderCard: React.FC<IProps> = ({
    icon,
    title,
    url,
    isActive = false,
}) => {
    const history = useHistory();

    const redirectToPage = useCallback(() => {
        history.push(`/${url}`);
    }, [history, url]);

    return (
        <Container isActive={isActive}>
            <div onClick={redirectToPage}>
                {icon}
                {title}
            </div>
        </Container>
    );
};

export default HeaderCard;
