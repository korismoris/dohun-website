import React, { useEffect, useState, useRef } from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { websiteData } from "../Components/InfoSection/Data";

const Homepage = () => {
    useEffect(() => {
        document.title = "Do Hun Kim // Web Developer";
    }, []);

    return (
        <div>
            <HeroSection id="main" />
            {websiteData.map((section) => (
                <InfoSection {...section} />
            ))}
            <Footer />
        </div>
    );
};

export default Homepage;
