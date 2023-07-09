import { Box, Drop, Grid, Text } from "grommet";
import React, { useState } from "react";
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
   MongoDB,
} from "../utils/TechnologySVGList";
import styled from "styled-components";

export type TechIconProps = {
   name: string;
   icon: JSX.Element;
   isGolden: boolean;
};

export const TechIcon = styled.div`
   width: 35px;
   height: 35px;

   svg {
      width: 100%;
      height: 100%;
      filter: ${(props) =>
         props.isGolden
            ? "sepia(50%) drop-shadow(0 0 3px #D4AF37) drop-shadow(0 0 2px #D4AF37)"
            : props.isFiltered
            ? "grayscale(100%)"
            : "none"};
   }
`;
function TechnologyStack() {
   const [isFiltered, setIsFiltered] = useState(true);
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

   const iconList = [
      { name: "Java", icon: <Java />, isGolden: true },
      { name: "Swift", icon: <Swift />, isGolden: true },
      { name: "Lua", icon: <Lua />, isGolden: true },
      { name: "Typescript", icon: <Typescript />, isGolden: true },
      { name: "CSS", icon: <CSS />, isGolden: true },
      { name: "React", icon: <ReactIcon />, isGolden: true },
      { name: "Kotlin", icon: <Kotlin />, isGolden: true },
      { name: "Python", icon: <Python /> },
      { name: "Javascript", icon: <Javascript /> },
      { name: "Git", icon: <Git /> },
      { name: "NodeJS", icon: <NodeJS /> },
      { name: "Heroku", icon: <Heroku /> },
      { name: "CSharp", icon: <CSharp /> },
      { name: "SQLite", icon: <SQLite /> },
      { name: "XCode", icon: <XCode /> },
      { name: "AndroidStudio", icon: <AndroidStudio /> },
      { name: "MongoDB", icon: <MongoDB /> },
   ];

   React.useEffect(() => {
      if (hoveredIcon) {
         setShowDrop(true);
      } else {
         setShowDrop(false);
      }
   }, [hoveredIcon]);

   return (
      <Grid columns={{ size: "35px", count: "fit" }} gap="xsmall">
         {iconList.map((item, i) => (
            <Box onMouseOver={(e) => handleMouseOver(e, item)} onMouseOut={handleMouseOut}>
               <TechIcon key={i} isGolden={item.isGolden} isFiltered={isFiltered}>
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
   );
}

export default TechnologyStack;
