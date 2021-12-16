import React, { useEffect, useRef, useState } from "react";
import {
    HeroWrapper,
    HeroContainer,
    H1,
    ImageBackground,
    TextWrapper,
    Content,
    P,
    IntroContainer,
    IntroText,
    HideText,
    SpanText,
    Slider,
    ArrowWrapper,
    Source,
    Image,
} from "./HeroElements";
import { CgArrowDownR } from "react-icons/cg";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const HeroSection = ({ id }) => {
    const intro = useRef(null);
    const introText = useRef(null);
    const slider = useRef(null);
    const hideText = gsap.utils.selector(introText);
    const textWrapper = useRef(null);
    const name = gsap.utils.selector(textWrapper);
    const arrowWrapper = useRef(null);
    const tl = useRef();
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
