import styled from "styled-components";
import heroImage from "../../assets/images/dohunHero.png";

export const HeroWrapper = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

// -------- HeroSection Elements -----
export const HeroContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-content: center;
    background-color: ${(props) => props.theme.trueWhite};
`;

export const ImageBackground = styled.div`
    width: 100%;
    background-image: 
    /* Background image filter */ linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 100%
        ),
        linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%),
        /* Actual Image */ url(${heroImage});

    background-position: top left;
    background-repeat: no-repeat;
    z-index: 1;

    @media screen and (max-width: 600px) {
        background-position: 15% 10%;
    }
`;

export const Source = styled.source`
    width: 100vw;
    height: auto;
    max-width: 100%;
`;

export const Image = styled.img`
    width: 100vw;
    height: auto;
    max-width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    /* max-width: 1200px; */
    padding: 3.5rem 2.5rem;
    z-index: 2;
    color: ${(props) => props.theme.primaryTextDark};
`;

export const TextWrapper = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
    margin-top: 3rem;
    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 600px) {
        margin-top: 15rem;
    }
`;

export const H1 = styled.h1`
    font-size: 3rem;
    line-height: 1.5;
    text-align: center;
    font-weight: 500;
    margin: 0;
    margin-bottom: 4rem;
    @media screen and (max-width: 1024px) {
        font-size: 2.5rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const P = styled.p`
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;

export const ArrowWrapper = styled.div`
    position: relative;
    font-size: 3.5rem;
    bottom: 0%;
    left: 0%;
`;
