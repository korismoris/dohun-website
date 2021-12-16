import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.trueWhite};
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const LinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    } ;
`;

export const LinkMenu = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 10rem;

    @media screen and (max-width: 768px) {
        margin: 0.7rem;
    }
`;

export const LinkTitle = styled.h1`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
    color: ${(props) => props.theme.primaryTextDark};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1rem;

    &:hover {
        color: ${(props) => props.theme.secondaryText};
        transition: 0.3s ease-out;
    }
`;

export const SocialMediaWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 40px;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const WebsiteRights = styled.small`
    margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-bottom: 1.5rem;
`;

export const SocialIconLink = styled.a`
    font-size: 2rem;
    color: ${(props) => props.theme.trueWhite};
`;
