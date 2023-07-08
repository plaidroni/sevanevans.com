import React from "react";
import { Box, DataTable, Text, Layer, Heading, Menu } from "grommet";
import { Link, Calendar, List } from "grommet-icons";
import styled from "styled-components";

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
   return (
      <Layer
         animate
         modal={true}
         full="vertical"
         position="right"
         onEsc={() => setSelectedProject(null)}
         onClickOutside={() => setSelectedProject(null)}
      >
         <Box align="start" justify="center" width="medium" pad="small">
            <Heading>{project.name}</Heading>
         </Box>
         <Box align="start" justify="between" gap="medium">
            <Box align="start" justify="start" gap="medium" fill="horizontal" pad="small">
               <Box align="start" justify="between" fill="horizontal" direction="row" pad="small">
                  <Box align="start" justify="start" direction="row" gap="small">
                     <List />
                     <Text>Tags</Text>
                  </Box>
                  {project.roles &&
                     project.roles.map((role, index) => <RoleTag key={index} role={role} />)}
               </Box>
               {/* <Box align="start" justify="between" fill="horizontal" direction="row" pad="small">
                  <Box align="start" justify="start" direction="row" gap="small">
                     <Menu />
                     <Text>Description</Text>
                  </Box>
                  <Box align="center" justify="center" background={{ color: "graph-2" }} wrap />
               </Box> */}
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
      },
      {
         name: "Tigase, Inc",
         url: "tigase.net",
         roles: [
            { name: "Software Engineer", color: { color: "software-engineer", opacity: "strong" } },
         ],
         period: "Jan 2021 - Present",
      },
      {
         name: "RCPC Hackathon",
         url: "",
         roles: [{ name: "1st Place", color: { color: "1st-place", opacity: "strong" } }],
         period: "Apr 2020",
      },
      {
         name: "PDHS Official Application",
         url: "",
         roles: [{ name: "Collaborator", color: { color: "collaborator", opacity: "strong" } }],
         period: "Dec 2019",
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
