import React, { useRef } from "react";
import Image from "next/image";

// Styles
import * as Styles from "./about.styles";
import { GradientText, SectionContainer, Text } from "../UI";
import { Grid } from "@mui/material";

// Animations
import { motion, useInView } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

const About = () => {
  const ref = useRef();
  const isOnScreen = useInView(ref, { margin: "-100px" });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * 30;
    const rotateY = (x / rect.width) * -30;

    const svgElement = currentTarget.querySelector("img");
    if (svgElement) {
      svgElement.style.transition = `unset`;
      svgElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = (e) => {
    const { currentTarget } = e;

    const svgElement = currentTarget.querySelector("img");
    if (svgElement) {
      svgElement.style.transition = `transform 0.2s`;
      svgElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <SectionContainer container ref={ref} id="About">
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        variants={fadeIn("up", "tween", 0.1, 0.5)}
        initial="hidden"
        animate={isOnScreen && "show"}
      >
        <Styles.ImageContainer
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={"/assets/development-scene.svg"}
            alt="frontend-developer"
            fill
            sizes="100%"
          />
        </Styles.ImageContainer>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        variants={textVariant(0.3)}
        initial="hidden"
        animate={isOnScreen && "show"}
      >
        <GradientText variant="bigHeader" fontWeight={900}>
          Getting Personal: A Glimpse into 'Who I Am'
        </GradientText>
        <Text variant="main" sx={{ display: "block", mt: 2 }}>
          Hello! I'm a passionate Frontend Web Developer with a strong expertise
          in React.js and Next.js, complemented by Material UI for sleek and
          responsive designs. Over the past few years, I've honed my skills
          through a blend of formal education and hands-on projects, creating
          dynamic and user-friendly web applications. Currently, I'm expanding
          my knowledge into backend technologies, learning Express.js and
          MongoDB, to become a proficient full stack (MERN) developer
        </Text>
      </Grid>
    </SectionContainer>
  );
};

export default About;