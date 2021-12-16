import React from "react";
import {
    HeroWrapper,
    HeroContainer,
    H1,
    ImageBackground,
    TextWrapper,
    Content,
    ArrowWrapper,
} from "./HeroElements";
import { CgArrowDownR } from "react-icons/cg";

const HeroSection = ({ id }) => {
    return (
        <>
            <HeroWrapper>
                <HeroContainer id={id}>
                    <ImageBackground />

                    <Content>
                        <TextWrapper ref={textWrapper}>
                            <H1 className="fullName">
                                Hola soy Do Hun Kim y soy un Desarrollador Web /
                                Médico en CDMX
                            </H1>
                        </TextWrapper>
                        <ArrowWrapper ref={arrowWrapper}>
                            <CgArrowDownR />
                        </ArrowWrapper>
                    </Content>
                </HeroContainer>
            </HeroWrapper>
        </>
    );
};

export default HeroSection;
