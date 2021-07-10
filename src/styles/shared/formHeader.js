import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { upArrow } from '../../assets/icons';
import { darkBlack } from '../_color';

export const CardHeader = styled.div`
    display: flex;
`;

export const GoBack = styled(Link)`
    padding: 25px;
    display: inline-block;
    background-position: center;
    /* Arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${upArrow});
    background-repeat: no-repeat;
    transform: ${(props) => (props.lang === 'he' ? 'rotate(-90deg)' : 'rotate(90deg)')};
    cursor: pointer;

    @media screen and (max-width: 500px) {
        & {
            display: none;
        }
    }
`;

export const Header = styled.h3`
    margin: 11px auto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    color: ${darkBlack};

    @media screen and (max-width: 500px) {
        & {
            margin: 11px auto;
            font-size: 30px;
        }
    }
`;
