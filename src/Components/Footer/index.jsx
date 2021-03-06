import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
    FooterContainer,
    FooterWrapper,
    SocialMediaWrapper,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <SocialMediaWrapper>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://github.com/korismoris"
                                aria-label="GitHub"
                                target="_blank"
                            >
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://twitter.com/dohunkimhan"
                                aria-label="Twitter"
                                target="_blank"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://www.linkedin.com/in/dohun-kim-5781054b/"
                                aria-label="LinkedIn"
                                target="_blank"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>
                            © {new Date().getFullYear()} Do Hun Kim · All rights
                            reserved.
                        </WebsiteRights>
                    </SocialMediaWrapper>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};

export default Footer;
