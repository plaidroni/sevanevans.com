import React, { useState } from "react";
import { Box, DataTable, Text, Layer, Heading, Drop, Grid, Paragraph } from "grommet";
import { Link, Calendar, List, Technology, Menu, Grommet } from "grommet-icons";
import styled from "styled-components";

import {
   Kotlin,
   Lua,
   Python,
   Typescript,
   Javascript,
   CSS,
   CSharp,
   SQLite,
   Git,
   Java,
   Swift,
   NodeJS,
   Heroku,
   React as ReactIcon,
   XCode,
   AndroidStudio,
   Express,
   MongoDB,
   Firebase,
} from "../utils/TechnologySVGList";
import { TechIcon, TechIconProps } from "./TechnologyStack";

const RoleTag = ({ role }) => (
   <Box
      align="center"
      justify="center"
      round="xsmall"
      pad={{ horizontal: "4px" }}
      background={role.color}
   >
      <Text>{role.name}</Text>
   </Box>
);

const ProjectBox = ({ project, onClick }) => {
   return (
      <Box
         align="start"
         justify="between"
         wrap
         responsive
         fill="horizontal"
         gap="small"
         direction="row"
         pad="xsmall"
         round="xsmall"
         hoverIndicator
         onClick={() => onClick(project)}
      >
         <Box align="center" justify="center" direction="row" gap="xsmall">
            <Text>{project.name}</Text>
         </Box>
         <Box align="center" justify="between" direction="row" gap="small">
            <Text>{project.url}</Text>
            {project.roles &&
               project.roles.map((role, index) => <RoleTag key={index} role={role} />)}
            <Text>{project.period}</Text>
         </Box>
      </Box>
   );
};

const SelectLayer = ({ project, setSelectedProject }) => {
   const [hoveredIcon, setHoveredIcon] = useState<TechIconProps | null>(null);
   const [hoverRef, setHoverRef] = useState<object | undefined>(undefined);
   const [showDrop, setShowDrop] = useState(false);

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

   return (
      <Layer
         animate
         modal={true}
         responsive={false}
         full="vertical"
         position="right"
         onEsc={() => setSelectedProject(null)}
         onClickOutside={() => setSelectedProject(null)}
         margin={{ left: "large" }}
      >
         <Box align="start" justify="center" width="medium" pad="medium">
            <Heading>{project.name}</Heading>
         </Box>
         <Box align="start" justify="between" gap="medium" overflow="auto">
            <Box align="start" justify="start" gap="medium" fill="horizontal" pad="medium">
               <Box align="start" justify="between" fill="horizontal" direction="row" pad="small">
                  <Box align="start" justify="start" direction="row" gap="small">
                     <List />
                     <Text>Tags</Text>
                  </Box>
                  {project.roles &&
                     project.roles.map((role, index) => <RoleTag key={index} role={role} />)}
               </Box>

               <Box align="start" justify="between" fill="horizontal" direction="row" pad="small">
                  <Box align="start" justify="start" direction="row" gap="small">
                     <Link />
                     <Text>Link</Text>
                  </Box>
                  <Box align="center" justify="center" wrap>
                     <Text>{project.url}</Text>
                  </Box>
               </Box>
               <Box align="start" justify="between" fill="horizontal" direction="row" pad="small">
                  <Box align="start" justify="start" direction="row" gap="small">
                     <Calendar />
                     <Text>Date(s)</Text>
                  </Box>
                  <Box align="center" justify="center" wrap>
                     <Text>{project.period}</Text>
                  </Box>
               </Box>
               <Box align="start" justify="between" fill="horizontal" direction="row" pad="small">
                  <Box align="start" justify="start" direction="row" gap="small">
                     <Technology />
                     <Text>Tech Stack</Text>
                  </Box>

                  <Grid columns={{ count: 3, size: "auto" }} gap="xsmall">
                     {project.techStack.map((item, i) => (
                        <Box
                           onMouseOver={(e) => handleMouseOver(e, item)}
                           onMouseOut={handleMouseOut}
                        >
                           <TechIcon key={i} isGolden={false} isFiltered={false}>
                              {item.icon}
                           </TechIcon>
                        </Box>
                     ))}
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
                  </Grid>
               </Box>
               <Box
                  align="start"
                  justify="between"
                  fill="horizontal"
                  direction="column"
                  pad="small"
                  gap="large"
               >
                  <Box align="start" justify="start" direction="row" gap="small">
                     <Menu />
                     <Text>Description</Text>
                  </Box>
                  <Box align="center" justify="center" wrap>
                     <Paragraph>{project.description}</Paragraph>
                  </Box>
                  <Box align="center" justify="center" background={{ color: "graph-2" }} wrap />
               </Box>
            </Box>
         </Box>
      </Layer>
   );
};

const ProjectsTable = () => {
   const projects = [
      {
         name: "BodyMX",
         url: "thebodymx.com",
         roles: [{ name: "Co-Founder", color: { color: "co-founder", opacity: "strong" } }],
         period: "Sept 2022 - Present",
         techStack: [
            { name: "Typescript", icon: <Typescript /> },
            { name: "Javascript", icon: <Javascript /> },
            { name: "CSS", icon: <CSS /> },
            { name: "Firebase", icon: <Firebase /> },
            { name: "Grommet", icon: <Grommet /> },
            { name: "MongoDB", icon: <MongoDB /> },
            { name: "NodeJS", icon: <NodeJS /> },
            { name: "Heroku", icon: <Heroku /> },
            { name: "React", icon: <ReactIcon /> },
            { name: "Express", icon: <Express /> },
         ],
         description: "",
      },
      {
         name: "Tigase, Inc",
         url: "tigase.net",
         roles: [
            { name: "Software Engineer", color: { color: "software-engineer", opacity: "strong" } },
         ],
         period: "Jan 2021 - Present",
         techStack: [
            { name: "Java", icon: <Java /> },
            { name: "Swift", icon: <Swift /> },
            { name: "Kotlin", icon: <Kotlin /> },
            { name: "Git", icon: <Git /> },
            { name: "XCode", icon: <XCode /> },
            { name: "AndroidStudio", icon: <AndroidStudio /> },
         ],
         description: `I am currently excelling in the creation of multi-platform applications using Kotlin and Swift for platforms including Android, iOS, MacOS, and Windows. My strengths lie in adapting swiftly to emerging technologies and grasping new concepts at a rapid pace. I have been working in close collaboration with graphic designers, which has empowered us to produce eye-catching illustrations. Furthermore, my work extends to the design of visual layout mockups, utilizing tools such as Adobe Photoshop and Illustrator. Notably, I am deeply involved in creating and overhauling application user experiences to align with modern standards, thereby successfully attracting new audiences.`,
      },
      // {
      //    name: "sevanevans.com",
      //    url: "sevanevans.com",
      //    roles: [{ name: "Project", color: { color: "software-engineer", opacity: "strong" } }],
      //    period: "July 2023",
      //    techStack: [
      //       { name: "Typescript", icon: <Typescript /> },
      //       { name: "Javascript", icon: <Javascript /> },
      //       { name: "CSS", icon: <CSS /> },
      //       { name: "React", icon: <ReactIcon /> },
      //    ],
      //    description: ``,
      // },
      {
         name: "PDHS Official Application",
         url: "",
         roles: [
            { name: "Collaborator", color: { color: "collaborator", opacity: "strong" } },
            { name: "Software Engineer", color: { color: "software-engineer", opacity: "strong" } },
         ],
         period: "2019",
         techStack: [
            { name: "Java", icon: <Java /> },
            { name: "Swift", icon: <Swift /> },
            { name: "Kotlin", icon: <Kotlin /> },
            { name: "Git", icon: <Git /> },
            { name: "XCode", icon: <XCode /> },
            { name: "AndroidStudio", icon: <AndroidStudio /> },
         ],
         description: `I had the unique opportunity to collaborate on the PDHS Official School Application project, a truly enriching experience. As part of the development team, I had the privilege of contributing to a platform that shapes the everyday experiences of students, teachers, and staff members.

         Throughout this project, I honed my abilities in cooperative problem-solving, effective communication, and rapid software development. Our team was tasked with creating an intuitive user interface and ensuring a seamless experience across multiple device platforms.
         
         Our biggest challenge was maintaining consistent communication between different facets of the application. However, with persistence, dedication, and the effective use of modern development tools, we overcame these hurdles. My involvement in the PDHS school application project taught me the importance of collaboration, precision, and user-centric design in the real world of software development.`,
      },
      {
         name: "RCPC Hackathon",
         url: "",
         roles: [{ name: "1st Place", color: { color: "1st-place", opacity: "strong" } }],
         period: "Apr 2019",
         techStack: [{ name: "Java", icon: <Java /> }],
         description: `I had the thrilling experience of being part of the winning team at the 2019 RSPC Hackathon, a fast-paced 2-hour competition that pushed our abilities to their limits. We chose Java, a language we were confident and skilled in to do the competition in.

         The challenge was not just in coding, but in developing an innovative solution within a very limited time frame. Despite the pressures of time, we successfully solved all problems set in front of us with flying colors. Our win was not just a testament to our technical abilities in Java, but also our team coordination, quick decision-making, and capacity to innovate under pressure.`,
      },
      {
         name: "Desert Art Academy",
         url: "",
         roles: [
            {
               name: "Software Developer",
               color: { color: "software-engineer", opacity: "strong" },
            },
         ],
         period: "2018",
         techStack: [{ name: "Java", icon: <Java /> }],
         description: ``,
      },
   ];
   const [selectedProject, setSelectedProject] = React.useState(null);

   const onProjectClick = (project) => {
      setSelectedProject(project);
   };

   const closeLayer = () => {
      setSelectedProject(null);
   };

   return (
      <Box pad="medium">
         {projects.map((project, index) => (
            <ProjectBox key={index} project={project} onClick={onProjectClick} />
         ))}
         {selectedProject && (
            <SelectLayer setSelectedProject={setSelectedProject} project={selectedProject} />
         )}
      </Box>
   );
};

export default ProjectsTable;
