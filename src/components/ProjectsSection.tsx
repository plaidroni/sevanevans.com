import { Box, Drop, Heading, Button } from "grommet";
import React, { useState } from "react";
import styled from "styled-components";
import { TechIcon, TechIconProps } from "./TechnologyStack";
import {
   NodeJS,
   CSS,
   Heroku,
   Express,
   Typescript,
   Firebase,
   React as ReactIcon,
   MongoDB,
   ThreeJS,
   Git,
   Tailwind,
   Stripe,
} from "../utils/TechnologySVGList";
import { Grommet, Link as LinkIcon } from "grommet-icons";

const ProjectHero = styled.div`
   position: relative;
   width: 100%;
   aspect-ratio: 16 / 9;
   min-height: 260px;
   border-radius: 24px;
   overflow: hidden;
   cursor: pointer;
   box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
   margin: 1.25rem 0 2rem 0;
`;

const HeroImage = styled.img`
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   transform: scale(1.02);
`;

const HeroScrim = styled.div`
   position: absolute;
   inset: 0;
   background: linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.6) 100%);
`;

const HeroContent = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   padding: 1rem 1.25rem 1.25rem 1.25rem;
   color: white;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

// Removed older full-bleed/horizontal scroller styles in favor of hero cards

// gallery components removed in favor of hero-style card
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

// FullImage removed (legacy)

const Text = styled.div`
   max-width: 65ch;
   font-size: 1.05rem;
   line-height: 1.6;
`;

const ImageCountBadge = styled.div`
   position: absolute;
   top: 10px;
   right: 10px;
   background: rgba(0, 0, 0, 0.55);
   color: #fff;
   padding: 2px 8px;
   font-size: 0.8rem;
   border-radius: 999px;
`;

const ProjectsContainer = styled.div`
   width: 100%;
   margin: 0 auto;
`;

function ProjectsSection({ isMobile }: { isMobile: boolean }) {
   // removed legacy image popup state in favor of details modal
   const [hoveredIcon, setHoveredIcon] = useState<TechIconProps | null>(null);
   const [hoverRef, setHoverRef] = useState<object | undefined>(undefined);
   const [showDrop, setShowDrop] = useState(false);
   const [selectedProject, setSelectedProject] = useState<any | null>(null);
   const [currentDetailImage, setCurrentDetailImage] = useState<string | null>(null);
   const [parallax, setParallax] = useState<{ id: string; x: number; y: number } | null>(null);

   // legacy full-image click handler removed

   const openDetails = (project: any) => {
      setSelectedProject(project);
      setCurrentDetailImage(project.images?.[0] ?? null);
   };
   const closeDetails = () => {
      setSelectedProject(null);
      setCurrentDetailImage(null);
   };

   const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const tx = (mx / rect.width - 0.5) * 10; // max 10px shift
      const ty = (my / rect.height - 0.5) * 10;
      setParallax({ id, x: tx, y: ty });
   };
   const resetParallax = () => setParallax(null);

   const handleMouseOver = (e, icon) => {
      setHoverRef(e.currentTarget);
      setHoveredIcon(icon);
   };

   const handleMouseOut = () => {
      setHoverRef(undefined);
      setHoveredIcon(null);
   };

   React.useEffect(() => {
      setShowDrop(!!hoveredIcon);
   }, [hoveredIcon]);

   // legacy close popup removed

   const mobileHeadingLevel = isMobile ? 2 : 3;

   // Project data
   const projects = [
      {
         name: "JumperSim",
         images: ["/jumpersim.png"],
         techStack: [
            { name: "Typescript", icon: <Typescript /> },
            { name: "CSS", icon: <CSS /> },
            { name: "ThreeJs", icon: <ThreeJS /> },
         ],
         github: "https://www.github.com/plaidroni/Jumpersim",
         live: "https://www.jumpersim.com",
         summary:
            "3D skydiving simulator for exit separation, freefall, canopy, and aircraft paths with real wind data.",
         description: (
            <>
               <p>
                  JumperSim is a 3D skydiving simulation tool built with Three.js and TypeScript,
                  designed to model exit separation, freefall dynamics, canopy deployment, and
                  aircraft flight paths with high accuracy.
               </p>
               <p>
                  It serves as a training and planning tool for jumpers and dropzone operators,
                  featuring real-time wind profiles from Open-Meteo, layered wind modeling at 1,000
                  ft AGL intervals, dynamic Mapbox satellite imagery, and a custom time-scrubbable
                  playback system. Built with a custom physics engine, JumperSim helps users
                  visualize spatial awareness, relative positioning, and environmental effects
                  before ever boarding the plane.
               </p>
            </>
         ),
      },
      {
         name: "Coell Studios",
         images: ["coell1.png", "coell2.png", "coell3.jpg", "coell4.jpg"],
         techStack: [
            { name: "Firebase", icon: <Firebase /> },
            { name: "React", icon: <ReactIcon /> },
            { name: "Tailwind", icon: <Tailwind /> },
            { name: "Stripe", icon: <Stripe /> },
         ],
         github: null,
         live: "https://www.coellstudios.com",
         summary:
            "Skydiving photography site with performant galleries and payments, built on Firebase, React, Tailwind, and Stripe.",
         description: (
            <>
               <p>
                  Coell Studios showcases high-resolution skydiving photography with fast,
                  responsive galleries backed by Firebase storage and Firestore. The frontend uses
                  React with Tailwind CSS for a clean, accessible UI and smooth interactions.
               </p>
               <p>
                  Features include album-based browsing, lazy-loading, optimized thumbnails, and
                  mobile-first layouts. Firebase handles content delivery and metadata while Stripe
                  enables secure payments for prints and downloads.
               </p>
            </>
         ),
      },
      {
         name: "BodyMX Web App",
         images: ["/bodymx4.png", "/bodymx1.png", "/bodymx2.png", "/bodymx3.png"],
         techStack: [
            { name: "Typescript", icon: <Typescript /> },
            { name: "CSS", icon: <CSS /> },
            { name: "Firebase", icon: <Firebase /> },
            { name: "Grommet", icon: <Grommet /> },
            { name: "MongoDB", icon: <MongoDB /> },
            { name: "NodeJS", icon: <NodeJS /> },
            { name: "Heroku", icon: <Heroku /> },
            { name: "React", icon: <ReactIcon /> },
            { name: "Express", icon: <Express /> },
         ],
         github: null,
         live: null,
         summary:
            "Real-time coaching platform with chat, logs, video calls, permissions, and Stripe billing.",
         description: (
            <>
               <p>
                  BodyMX is a real-time health and fitness platform offering chat, training logs,
                  and video conferencing for personal trainers and clients. Designed for scalable
                  remote coaching.
               </p>
               <p>
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
                  scalability, performance, and user experience.
               </p>
            </>
         ),
      },
   ];

   return (
      <ProjectsContainer>
         {projects.map((project) => (
            <ProjectHero
               key={project.name}
               onClick={() => openDetails(project)}
               onMouseMove={(e) => handleHeroMouseMove(e, project.name)}
               onMouseLeave={resetParallax}
            >
               <HeroImage
                  src={project.images[0]}
                  alt={`${project.name} cover`}
                  style={{
                     transform: `translate3d(${parallax?.id === project.name ? parallax.x : 0}px, ${
                        parallax?.id === project.name ? parallax.y : 0
                     }px, 0) scale(1.04)`,
                     transition:
                        parallax?.id === project.name
                           ? "transform 0.02s linear"
                           : "transform 0.25s ease",
                  }}
               />
               <HeroScrim />
               {project.images.length > 1 && (
                  <ImageCountBadge>{`+${project.images.length - 1}`}</ImageCountBadge>
               )}
               <HeroContent>
                  <Heading
                     level={mobileHeadingLevel}
                     margin={{ vertical: "xxsmall" }}
                     color="white"
                  >
                     {project.name}
                  </Heading>
                  <Box direction="row" gap="xsmall" wrap>
                     {project.techStack.map((item) => (
                        <Box
                           key={item.name}
                           onMouseOver={(e) => handleMouseOver(e, item)}
                           onMouseOut={handleMouseOut}
                           style={{ display: "inline-flex" }}
                        >
                           <TechIcon
                              isGolden={item.name === "ThreeJs" || item.name === "Express"}
                              isFiltered={false}
                           >
                              {item.icon}
                           </TechIcon>
                        </Box>
                     ))}
                  </Box>
                  {project.summary && <Text style={{ color: "#f2f2f2" }}>{project.summary}</Text>}
                  <Box direction="row" gap="small" margin={{ top: "xsmall" }}>
                     {project.github && (
                        <Button
                           icon={<Git />}
                           label="GitHub"
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           primary
                           onClick={(e: any) => e.stopPropagation()}
                        />
                     )}
                     {project.live && (
                        <Button
                           icon={<LinkIcon />}
                           label="Live Demo"
                           href={project.live}
                           target="_blank"
                           rel="noopener noreferrer"
                           secondary
                           onClick={(e: any) => e.stopPropagation()}
                        />
                     )}
                  </Box>
               </HeroContent>
            </ProjectHero>
         ))}

         {/* legacy image modal removed */}

         {/* Project Details Modal */}
         <Overlay visible={!!selectedProject} onClick={closeDetails}>
            {selectedProject && (
               <Box
                  width={{ max: "920px" }}
                  style={{ maxWidth: "92vw", maxHeight: "85vh", overflow: "auto" }}
                  round="medium"
                  pad="medium"
                  background="background-front"
                  onClick={(e: any) => e.stopPropagation()}
                  gap="small"
               >
                  <Box direction="row" justify="between" align="center">
                     <Heading level={3} margin="none">
                        {selectedProject.name}
                     </Heading>
                     <Button label="Close" onClick={closeDetails} />
                  </Box>
                  <Box>
                     {/* Simple carousel: use first image as main, thumbnails below if multiple */}
                     <Box height="medium" overflow="hidden" round="small">
                        <img
                           src={currentDetailImage || selectedProject.images[0]}
                           alt={`${selectedProject.name} detail`}
                           style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                     </Box>
                     {selectedProject.images.length > 1 && (
                        <Box direction="row" gap="xsmall" margin={{ top: "xsmall" }} wrap>
                           {selectedProject.images.map((img: string, idx: number) => (
                              <img
                                 key={img}
                                 src={img}
                                 alt={`${selectedProject.name} ${idx}`}
                                 style={{
                                    width: 80,
                                    height: 60,
                                    objectFit: "cover",
                                    borderRadius: 6,
                                    cursor: "pointer",
                                 }}
                                 onClick={() => setCurrentDetailImage(img)}
                              />
                           ))}
                        </Box>
                     )}
                  </Box>
                  <Box gap="small">
                     <Box direction="row" gap="xsmall" wrap>
                        {selectedProject.techStack.map((item: any) => (
                           <TechIcon
                              key={item.name}
                              isGolden={item.name === "ThreeJs" || item.name === "Express"}
                              isFiltered={false}
                           >
                              {item.icon}
                           </TechIcon>
                        ))}
                     </Box>
                     <Text>{selectedProject.description}</Text>
                     <Box direction="row" gap="small" margin={{ top: "xsmall" }}>
                        {selectedProject.github && (
                           <Button
                              icon={<Git />}
                              label="GitHub"
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              primary
                           />
                        )}
                        {selectedProject.live && (
                           <Button
                              icon={<LinkIcon />}
                              label="Live Demo"
                              href={selectedProject.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              secondary
                           />
                        )}
                     </Box>
                  </Box>
               </Box>
            )}
         </Overlay>

         {/* Tech Tooltip */}
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
