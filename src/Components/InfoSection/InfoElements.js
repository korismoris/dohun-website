import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #000;
    background: ${(props) =>
        props.colorTheme ? props.theme.trueWhite : props.theme.trueWhite};
    width: 100%;
    margin: 0 auto;
`;

export const InfoWrapper = styled.div`
    padding: ${(props) => (props.topText ? "10rem 0rem 5rem" : "0rem")};
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;

    @media screen and (max-width: 600px) {
        padding: 4rem 0 2rem;
    }

    @media screen and (max-width: 1200px) {
        padding: 5rem 0 0;
    }
`;

export const TitleWrapper = styled.div`
    position: relative;
    border-bottom: 2px solid #ccc;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 3rem;
`;

export const TopText = styled.p`
    color: ${(props) => props.theme.secondaryText};
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    background-color: #fff;
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid #ccc;
    padding: 5px;

    @media screen and (max-width: 1200px) {
        margin-left: -0.5rem;
    }
`;

export const Row = styled.div`
    display: grid;

    grid-template-columns: 3fr 4fr;
    grid-template-rows: auto;
    grid-template-areas: ${(props) =>
        props.reverse ? `"col1 col2"` : `"col2 col1"`};

    grid-column-gap: 5rem;
    @media screen and (max-width: 600px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas: "col1" "col2";

        padding-top: 1rem;
    }
`;

export const MainColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    min-width: 350px;
    max-width: 600px;
    overflow-wrap: break-word;

    @media screen and (max-width: 1200px) {
        padding-right: 5rem;
    }
    @media screen and (max-width: 600px) {
        align-items: center;
        max-width: 350px;
        margin: 0 auto;
        padding: 0;
    }
`;

export const MainColumnWrapper = styled.div``;

export const SideColumn = styled.div`
    display: flex;
    position: relative;
    top: 0;
    justify-content: end;

    margin-bottom: 1rem;
    height: 100%;
    grid-area: col2;
    grid-row: 1/-1;
    @media screen and (max-width: 600px) {
        justify-content: start;

        margin-bottom: 1rem;
    }
    @media screen and (min-width: 601px) {
        &:after {
            content: "";
            position: absolute;
            border-right: 15px solid #901a3e;
            height: 10rem;
        }
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    @media screen and (max-width: 1200px) {
        padding-bottom: 1.5rem;
    }
`;

export const Heading = styled.h1`
    display: inline-block;
    color: #264176;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.2rem;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 1.8rem;
        width: 300px;
        margin: 1.5rem 0 0 1.5rem;
        text-align: center;
    }
`;
export const Subtext = styled.h2`
    width: 100%;
    font-weight: 500;
    color: #273343;
    margin-bottom: 1rem;

    @media screen and (max-width: 600px) {
        font-size: 1.3rem;
        text-align: center;
    }

    @media screen and (max-width: 1200px) {
    }
`;

export const Subtitle = styled.h3`
    display: inline-block;
    color: ${(props) => props.theme.primaryText};
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0 auto;
    text-indent: 1.3rem;
    margin-bottom: 5rem;

    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }
`;

export const ImgWrap = styled.div`
    height: 100%;
    max-width: 550px;

    @media screen and (max-width: 1200px) {
        padding: 0 1.3rem;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
`;

export const DividerText = styled.h2`
    margin-right: 5.5rem;
    margin-top: 0.5rem;

    @media screen and (max-width: 600px) {
        margin: 0 auto;
        border-bottom: 4px solid #901a3e;
        line-height: 0;
    }
`;

export const HorizontalRuler = styled.hr`
    margin: 2rem auto 0;
    color: ${(props) => props.theme.lightgrey};
    width: 10rem;

    @media screen and (max-width: 600px) {
    }
`;
