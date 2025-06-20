import { Anchor, Box, Carousel, Drop, Grid, Header, Heading } from "grommet";
import React, { useState } from "react";
import styled from "styled-components";
import { TechIcon, TechIconProps } from "./TechnologyStack";
import {
   Kotlin,
   Git,
   XCode,
   AndroidStudio,
   NodeJS,
   CSS,
   Heroku,
   Express,
   Typescript,
   Firebase,
   Javascript,
   React as ReactIcon,
   MongoDB,
   ThreeJS,
} from "../utils/TechnologySVGList";
import { Grommet } from "grommet-icons";

const Project = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   align-items: center;
   justify-content: center;
   padding: 2rem;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
   }
`;

const ProjectPics = styled.div`
   display: flex;
   gap: 1.5rem;
   flex-direction: row;
`;
const Thumbnail = styled.img`
   width: auto;
   max-width: 100%;
   height: auto;
   max-height: 300px;
   object-fit: contain;

   cursor: pointer;
   border-radius: 8px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   transition: transform 0.2s ease-in-out;

   &:hover {
      transform: scale(1.05);
   }
`;
const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   display: ${({ visible }) => (visible ? "flex" : "none")};
   justify-content: center;
   align-items: center;
   z-index: 999;
`;

const FullImage = styled.img`
   max-width: 90%;
   max-height: 90%;
   cursor: pointer;
   border-radius: 8px;
   box-shadow: 0 0 20px black;
`;

const Text = styled.div`
   max-width: 600px;
   font-size: 1.1rem;
   align-items: center;
   line-height: 1.6;
`;

const ProjectsContainer = styled.div`
   align-items: center;
   width: 100%;
`;

function ProjectsSection({ isMobile }: { isMobile: boolean }) {
   const [isPopupVisible, setPopupVisible] = useState(false);
   const [imgToView, setImgToView] = useState("");
   const [hoveredIcon, setHoveredIcon] = useState<TechIconProps | null>(null);
   const [hoverRef, setHoverRef] = useState<object | undefined>(undefined);
   const [showDrop, setShowDrop] = useState(false);

   const handleImageClick = (img: string) => {
      setImgToView(img);
      setPopupVisible(true);
   };

   const handleMouseOver = (e, icon) => {
      setHoverRef(e.currentTarget);
      setHoveredIcon(icon);
   };

   const handleMouseOut = () => {
      setHoverRef(undefined);
      setHoveredIcon(null);
   };

   React.useEffect(() => {
      if (hoveredIcon) {
         setShowDrop(true);
      } else {
         setShowDrop(false);
      }
   }, [hoveredIcon]);

   const closePopup = () => setPopupVisible(false);

   const mobileHeadingLevel = isMobile ? 2 : 3;

   const bodyMXgridcount = isMobile ? 5 : 10;

   const jumperSimStack = [
      { name: "Typescript", icon: <Typescript /> },
      { name: "CSS", icon: <CSS /> },
      { name: "ThreeJs", icon: <ThreeJS /> },
   ];

   const bodymxTechStack = [
      { name: "Typescript", icon: <Typescript /> },
      { name: "CSS", icon: <CSS /> },
      { name: "Firebase", icon: <Firebase /> },
      { name: "Grommet", icon: <Grommet /> },
      { name: "MongoDB", icon: <MongoDB /> },
      { name: "NodeJS", icon: <NodeJS /> },
      { name: "Heroku", icon: <Heroku /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Express", icon: <Express /> },
   ];

   return (
      <ProjectsContainer>
         <Project>
            <Box align="center">
               <Heading level={mobileHeadingLevel}>JumperSim</Heading>
               <Box direction="row" wrap gap="small" justify="start" pad="small">
                  {jumperSimStack.map((item, i) => (
                     <Box onMouseOver={(e) => handleMouseOver(e, item)} onMouseOut={handleMouseOut}>
                        <TechIcon
                           key={i}
                           isGolden={item.name == "ThreeJs" ? true : false}
                           isFiltered={false}
                        >
                           {item.icon}
                        </TechIcon>
                     </Box>
                  ))}
               </Box>
            </Box>

            <ProjectPics>
               <Thumbnail
                  src="/jumpersim.png"
                  alt="JumperSim"
                  onClick={() => handleImageClick("/jumpersim.png")}
               />
            </ProjectPics>
            <Text>
               <Anchor href="https://www.github.com/plaidroni/Jumpersim">github</Anchor>
               <p>
                  JumperSim is a 3D skydive simulation tool built with Three.js, designed to
                  visualize exit separation, freefall dynamics, and canopy deployment in a realistic
                  environment.
               </p>
               <p>
                  It's a training tool that helps new jumpers understand spatial awareness and
                  relative positioning before ever boarding the plane. Built with real physics and
                  accurate time scrubbing for detailed review.
               </p>
            </Text>
         </Project>

         <Project>
            <Box align="center">
               <Heading level={mobileHeadingLevel}>BodyMX Web App</Heading>

               <Box direction="row" wrap gap="small" justify="start" pad="small">
                  {bodymxTechStack.map((item, i) => (
                     <Box onMouseOver={(e) => handleMouseOver(e, item)} onMouseOut={handleMouseOut}>
                        <TechIcon
                           key={i}
                           isGolden={item.name == "Express" ? true : false}
                           isFiltered={false}
                        >
                           {item.icon}
                        </TechIcon>
                     </Box>
                  ))}
               </Box>
            </Box>

            <ProjectPics>
               <Carousel>
                  <Thumbnail
                     src="/bodymx4.png"
                     alt="BodyMX Events"
                     onClick={() => handleImageClick("/bodymx4.png")}
                  />
                  <Thumbnail
                     src="/bodymx1.png"
                     alt="BodyMX Home Page"
                     onClick={() => handleImageClick("/bodymx1.png")}
                  />
                  <Thumbnail
                     src="/bodymx2.png"
                     alt="BodyMX Workouts"
                     onClick={() => handleImageClick("/bodymx2.png")}
                  />
                  <Thumbnail
                     src="/bodymx3.png"
                     alt="BodyMX thingy"
                     onClick={() => handleImageClick("/bodymx3.png")}
                  />
               </Carousel>
            </ProjectPics>
            <Text>
               <p>
                  BodyMX is a real-time health and fitness platform offering chat, training logs,
                  and video conferencing for personal trainers and clients. Designed for scalable
                  remote coaching.
               </p>
               <p>
                  {" "}
                  I built the frontend using React and Grommet UI Library, creating a responsive and
                  intuitive interface optimized for both mobile and desktop use. On the backend, I
                  developed full-stack systems using Node.js, Firebase, and MongoDB. Firebase
                  handled secure authentication, real-time messaging, user analytics, and media
                  storage for profile icons and uploads. WebRTC was used to enable secure,
                  low-latency video consultations between clients and trainers. The platform
                  included robust role-based permissions to differentiate client, coach, and admin
                  capabilities. I implemented a Stripe-integrated storefront and event registration
                  system, along with a full point-of-sale and invoicing system that allowed users to
                  purchase sessions, track payments, and manage receipts directly within the app.
                  All features were synchronized in real time across devices, with a strong focus on
                  scalability, performance, and user experience.{" "}
               </p>
            </Text>
         </Project>

         <Overlay visible={isPopupVisible} onClick={closePopup}>
            <FullImage src={imgToView} alt="Full Preview" onClick={closePopup} />
         </Overlay>
         {showDrop && hoveredIcon && (
            <Drop align={{ bottom: "top" }} target={hoverRef} plain overflow="hidden">
               <Box
                  pad="xsmall"
                  background="dark-3"
                  round={{ size: "xsmall" }}
                  margin="xsmall"
                  style={{
                     background: "rgba(139, 139, 139, 0.95)",
                     backdropFilter: "blur(5.5px)",
                     WebkitBackdropFilter: "blur(8.5px)",
                     border: "1px solid rgba(255, 255, 255, 0.18)",
                  }}
               >
                  <Box direction="column" align="center">
                     <Text weight="bold">{hoveredIcon.name}</Text>
                     {hoveredIcon.isGolden && <Text>Skilled</Text>}
                  </Box>
               </Box>
            </Drop>
         )}
      </ProjectsContainer>
   );
}

export default ProjectsSection;
