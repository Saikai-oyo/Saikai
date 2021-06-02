import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

export const NavbarLogo = styled.a`
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;

    @media screen and (max-width: 850px) {
        & > img {
            width: 13.5rem;
            height: 4rem;
        }
    }
    @media screen and (max-width: 370px) {
        & > img {
            width: 12rem;
        }
    }
    @media screen and (max-width: 345px) {
        & > img {
            width: 10.5rem;
        }
    }
`;

export const NavbarItemsWrapper = styled.span`
    display: flex;
    flex-basis: auto;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    cursor: default;
`;

export const NavbarAlerts = styled.div`
    margin-right: 3rem;
`;

export const NavbarGroup = styled.span`
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
    align-items: center;
    @media screen and (max-width: 860px) {
        & > span {
            padding-right: 0.5rem;
        }
    }
`;

export const NavbarWelcomeText = styled.span`
    margin-right: 1.5rem;

    @media screen and (max-width: 1125px) {
        & {
            margin-right: 0.5rem;
        }
    }

    @media screen and (max-width: 1045px) {
        & {
            display: none;
        }
    }
`;
export const NavbarIcons = styled.div`
    display: flex;
    flex-direction: row;
`;
export const NavbarSearch = styled.div`
    display: flex;
    flex-direction: row;

    ${({ responsive }) =>
        responsive === 'show'
            ? 'justify-content: center;align-items: center;text-align: center; &>span{ padding:0 } &>span>label>input{width: 90vw;}'
            : responsive === 'hide'
            ? 'display:none'
            : ''}
`;

export const NavbarItem = styled.span`
    margin-right: 1.5rem;
    cursor: pointer;
    @media screen and (max-width: 1125px) {
        & {
            margin-right: 0.5rem;
        }
    }
`;
