import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const AnimatedImage = styled(animated.img)`
   position: absolute;
`;

function DancingImage() {
   const { x, y } = useSpring({
      from: { x: 0, y: 0 },
      to: async (next) => {
         while (1) {
            await next({ x: 100, y: 10 });
            await next({ x: 200, y: 0 });
            await next({ x: 300, y: -10 });
            await next({ x: 400, y: 0 });
            await next({ x: 500, y: 10 });
            await next({ x: 600, y: 0 });
            await next({ x: 0, y: 0 });
         }
      },
      config: { duration: 1000 },
      reset: true,
   });

   return (
      <AnimatedImage
         src="https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fimageedit_6_6528806410.png?alt=media&token=d171f856-e3e4-4af4-aa12-27c83b674d86"
         style={{
            transform: x.to((x) => `translate3d(${x}px, ${y}px, 0)`),
         }}
      />
   );
}

export default DancingImage;
