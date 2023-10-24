import React, { useState } from "react";
import {
   Box,
   DataTable,
   Text,
   Layer,
   Heading,
   Drop,
   Grid,
   Paragraph,
   Anchor,
   Image,
} from "grommet";
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
import useMediaQuery from "../hooks/UseMediaQuery";
import { projects } from "../utils/Projects";
import { BorderType } from "grommet/utils";

const RoleTag = ({ role }) => {
   return (
      <Box
         align="center"
         justify="center"
         round="xsmall"
         pad={{ horizontal: "4px" }}
         background={role.color}
         wrap={false}
      >
         <Text truncate={true}>{role.name}</Text>
      </Box>
   );
};

const ProjectBox = ({ project, onClick }) => {
   const { isMobile } = useMediaQuery();
   const mobileGap = isMobile ? "medium" : "small";
   const mobileColor = isMobile ? "border" : "background";
   return (
      <Box
         align="start"
         justify="between"
         wrap
         responsive
         fill="horizontal"
         gap={mobileGap}
         direction="row"
         pad="xsmall"
         round="xsmall"
         hoverIndicator
         onClick={() => onClick(project)}
         border={{ side: "bottom", color: mobileColor }}
      >
         {isMobile ? (
            <Box direction="column" align="start">
               <Box align="center" justify="center" direction="row" gap="xsmall">
                  <Image width="20px" height="20px" src={project.img}></Image>
                  <Text size="large" weight="bold">
                     {project.name}
                  </Text>
               </Box>
               <Box align="center" justify="between" direction="row" gap="small">
                  <Text truncate={true}>{project.url}</Text>
                  {project.roles &&
                     project.roles.map((role, index) => <RoleTag key={index} role={role} />)}
               </Box>
               <Text truncate={true}>{project.period}</Text>
            </Box>
         ) : (
            <Box
               align="start"
               justify="between"
               wrap
               fill="horizontal"
               direction="row"
               round="xsmall"
            >
               <Box align="center" justify="center" direction="row" gap="xsmall">
                  <Image width="20px" height="20px" src={project.img}></Image>
                  <Text>{project.name}</Text>
               </Box>
               <Box align="center" justify="between" direction="row" gap="small">
                  <Text truncate={true}>{project.url}</Text>
                  {project.roles &&
                     project.roles.map((role, index) => <RoleTag key={index} role={role} />)}
                  <Text truncate={true}>{project.period}</Text>
               </Box>
            </Box>
         )}
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
         <Box flex="grow" overflow="auto">
            <Box align="start" justify="center" width="medium" pad="medium">
               <Image width="32px" height="32px" src={project.img}></Image>
               <Heading>{project.name}</Heading>
            </Box>
            <Box align="start" justify="between" gap="medium" overflow="auto" flex="grow">
               <Box align="start" justify="start" gap="medium" fill="horizontal" pad="medium">
                  <Box
                     align="start"
                     justify="between"
                     fill="horizontal"
                     direction="row"
                     pad="small"
                  >
                     <Box align="start" justify="start" direction="row" gap="small">
                        <List />
                        <Text>Tags</Text>
                     </Box>
                     <Box direction="row" gap="xsmall">
                        {project.roles &&
                           project.roles.map((role, index) => <RoleTag key={index} role={role} />)}
                     </Box>
                  </Box>

                  <Box
                     align="start"
                     justify="between"
                     fill="horizontal"
                     direction="row"
                     pad="small"
                  >
                     <Box align="start" justify="start" direction="row" gap="small">
                        <Link />
                        <Text>Link</Text>
                     </Box>
                     <Box align="center" justify="center" wrap>
                        <Anchor
                           onClick={() => {
                              window.open("https://www." + project.url);
                           }}
                        >
                           {project.url}
                        </Anchor>
                     </Box>
                  </Box>
                  <Box
                     align="start"
                     justify="between"
                     fill="horizontal"
                     direction="row"
                     pad="small"
                  >
                     <Box align="start" justify="start" direction="row" gap="small">
                        <Calendar />
                        <Text>Date(s)</Text>
                     </Box>
                     <Box align="center" justify="center" wrap>
                        <Text>{project.period}</Text>
                     </Box>
                  </Box>
                  <Box
                     align="start"
                     justify="between"
                     fill="horizontal"
                     direction="row"
                     pad="small"
                  >
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
                           <Drop
                              align={{ bottom: "top" }}
                              target={hoverRef}
                              plain
                              overflow="hidden"
                           >
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
                        <Paragraph size="small">{project.description}</Paragraph>
                     </Box>
                     <Box align="center" justify="center" background={{ color: "graph-2" }} wrap />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Layer>
   );
};

const ProjectsTable = () => {
   const [selectedProject, setSelectedProject] = React.useState(null);

   const onProjectClick = (project) => {
      setSelectedProject(project);
   };

   const closeLayer = () => {
      setSelectedProject(null);
   };

   return (
      <Box pad="medium" flex="grow">
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
