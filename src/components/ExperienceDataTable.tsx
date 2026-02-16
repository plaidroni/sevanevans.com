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
   Button,
} from "grommet";
import { Link, Calendar, List, Technology, Menu, Grommet, Close } from "grommet-icons";
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

const SectionCard = styled(Box)`
   border: 1px solid rgba(255, 255, 255, 0.12);
   border-radius: 12px;
   padding: 12px;
   background: rgba(255, 255, 255, 0.03);
`;

const SectionTitle = styled(Text)`
   font-weight: 600;
`;

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
         <Box fill="vertical" overflow="auto" background="background-back">
            <Box width="medium" pad="medium" gap="medium">
               <Box direction="row" align="center" justify="between">
                  <Box direction="row" align="center" gap="small">
                     <Image width="36px" height="36px" src={project.img}></Image>
                     <Box>
                        <Heading level={3} margin="none">
                           {project.name}
                        </Heading>
                        {project.url && (
                           <Text size="small" color="text-weak">
                              {project.url}
                           </Text>
                        )}
                     </Box>
                  </Box>
                  <Button plain icon={<Close />} onClick={() => setSelectedProject(null)} />
               </Box>

               <SectionCard>
                  <Box direction="row" align="center" justify="between" gap="small">
                     <Box direction="row" align="center" gap="small">
                        <List />
                        <SectionTitle>Tags</SectionTitle>
                     </Box>
                     <Box direction="row" gap="xsmall" wrap>
                        {project.roles &&
                           project.roles.map((role, index) => <RoleTag key={index} role={role} />)}
                     </Box>
                  </Box>
               </SectionCard>

               <SectionCard>
                  <Box direction="row" align="center" justify="between" gap="small">
                     <Box direction="row" align="center" gap="small">
                        <Link />
                        <SectionTitle>Link</SectionTitle>
                     </Box>
                     <Anchor href={`https://www.${project.url}`} target="_blank" rel="noreferrer">
                        {project.url}
                     </Anchor>
                  </Box>
               </SectionCard>

               <SectionCard>
                  <Box direction="row" align="center" justify="between" gap="small">
                     <Box direction="row" align="center" gap="small">
                        <Calendar />
                        <SectionTitle>Date(s)</SectionTitle>
                     </Box>
                     <Text>{project.period}</Text>
                  </Box>
               </SectionCard>

               <SectionCard>
                  <Box direction="row" align="center" justify="between" gap="small">
                     <Box direction="row" align="center" gap="small">
                        <Technology />
                        <SectionTitle>Tech Stack</SectionTitle>
                     </Box>
                  </Box>
                  <Grid columns={{ count: 4, size: "auto" }} gap="xsmall" margin={{ top: "small" }}>
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
               </SectionCard>

               <SectionCard>
                  <Box direction="row" align="center" gap="small">
                     <Menu />
                     <SectionTitle>Description</SectionTitle>
                  </Box>
                  <Paragraph size="small" margin={{ top: "small", bottom: "none" }}>
                     {project.description}
                  </Paragraph>
               </SectionCard>
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
