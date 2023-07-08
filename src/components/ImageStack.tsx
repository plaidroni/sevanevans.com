import { Box, Drop, Text } from "grommet";
import React, { useEffect, useRef } from "react";
import { useSpring, animated as a, interpolate, to } from "react-spring";
import styled from "styled-components";
import useMediaQuery from "../hooks/UseMediaQuery";

type ImageStackProps = {
   leftper: string;
   topper: string;
};

const StyledImageStack = styled(a.img)<ImageStackProps>`
   position: absolute;
   width: 135px;
   object-fit: cover;
   left: ${(props) => `${props.leftper}%`};
   top: ${(props) => `${props.topper}%`};
   will-change: transform;
   box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
   overflow: hidden;
`;

const ImageStack = ({ images, boxRef }) => {
   const { isMobile } = useMediaQuery();

   const angles = images.map(() => Math.floor(Math.random() * 20) - 15);

   const { x } = useSpring({
      from: { x: 0 },
      to: { x: 1 },
      config: {
         mass: 10,
         friction: 90,
         tension: 120,
      },
   });
   const { y } = useSpring({
      from: { y: -10 }, // make the fall distance shorter for subtlety
      to: { y: 0 },
      config: {
         mass: 3,
         friction: 120,
         tension: 200,
      },
   });

   return images.map((imgSrc, index) => {
      const transformImage = to(
         [x, y],
         (x, y) => `translate3d(${65 * index * x}px, ${y}px, 0) rotate(${angles[index]}deg)`,
      );
      return (
         <StyledImageStack
            key={index}
            leftper={isMobile ? "5" : "45"}
            topper={isMobile ? "50" : "55"}
            src={imgSrc}
            style={{ transform: transformImage }}
         />
      );
   });
};
export default ImageStack;
