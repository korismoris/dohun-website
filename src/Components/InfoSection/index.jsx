import React, { useEffect, useState } from "react";
import { TextWrapper } from "../HeroSection/HeroElements";
import {
    Row,
    InfoContainer,
    InfoWrapper,
    Subtitle,
    TopText,
    TitleWrapper,
    Heading,
    ImgWrap,
    Img,
    Subtext,
    DividerText,
    HorizontalRuler,
    SideColumn,
    MainColumn,
    MainColumnWrapper,
} from "./InfoElements";

const InfoSection = ({
    id,
    topText,
    articles,
    reverse = false,
    colorTheme = false,
    divider,
}) => {
    const [Articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles([...articles]);
    }, []);
    return (
        <InfoContainer colorTheme={colorTheme} id={id}>
            {/* {topText && (
                <TitleWrapper>
                    <TopText colorTheme={colorTheme}>{topText}</TopText>
                </TitleWrapper>
            )} */}
            <InfoWrapper topText={topText}>
                <Row reverse={reverse}>
                    <MainColumn>
                        {Articles.map((article) => (
                            <MainColumnWrapper key={article.id}>
                                {article.link ? (
                                    <a href={article.link} target="_blank">
                                        {" "}
                                        <Heading colorTheme={colorTheme}>
                                            {article.heading}
                                        </Heading>{" "}
                                    </a>
                                ) : (
                                    <Heading colorTheme={colorTheme}>
                                        {article.heading}
                                    </Heading>
                                )}
                                <Subtext>{article.subtext}</Subtext>
                                <Subtitle colorTheme={colorTheme}>
                                    {article.subtitle}
                                </Subtitle>
                            </MainColumnWrapper>
                        ))}
                    </MainColumn>

                    {topText && (
                        <SideColumn>
                            <DividerText>{topText} </DividerText>
                        </SideColumn>
                    )}
                </Row>
            </InfoWrapper>
            {divider && <HorizontalRuler />}
        </InfoContainer>
    );
};

export default InfoSection;
