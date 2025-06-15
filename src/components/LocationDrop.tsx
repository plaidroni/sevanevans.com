import { Box, Text, Drop, Button, WorldMap, dark, Avatar } from "grommet";
import { Location } from "grommet-icons";
import { useState, useRef } from "react";
import PostCardLocation from "./HelloFromPS";
import ImageStack from "./ImageStack";
import { colors } from "grommet/themes/base";

const placeProps = (name, color, showDrop) => ({
   name,
   color,
   ...(showDrop
      ? {
           content: (
              <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
                 <Text>{name}</Text>
              </Box>
           ),
           dropProps: {
              background: { color },
              elevation: "medium",
              margin: { left: "small" },
              round: "xsmall",
           },
        }
      : {}),
});

const LocationDrop = ({ setLocationDrop, locationDrop, boxRef }) => {
   const align = { top: "bottom", right: "right" };
   const innerBoxRef = useRef<any | null>(null);
   const [openDrop, setOpenDrop] = useState(false);

   const onCloseDrop = () => {
      setLocationDrop(false);
   };

   const onOpenDrop = () => {
      setLocationDrop(true);
   };

   return (
      <Box fill align="center" justify="center" overflow="hidden">
         {locationDrop && (
            <Drop target={boxRef.current} onClickOutside={onCloseDrop} onEsc={onCloseDrop}>
               <Box
                  align="center"
                  justify="center"
                  height="medium"
                  width="large"
                  round="small"
                  elevation="small"
                  background={{ color: "background" }}
                  pad="xsmall"
                  overflow="hidden"
                  ref={innerBoxRef}
               >
                  <WorldMap
                     hoverColor="accent-2"
                     color="text-paragraph"
                     places={[
                        {
                           color: "physics-as",
                           content: (
                              <Box
                                 pad={{ horizontal: "small", vertical: "xsmall" }}
                                 background={{ color: "transparent" }}
                              >
                                 <Text>Palm Springs</Text>
                              </Box>
                           ),
                           dropProps: {
                              align: { left: "right" },
                              background: { color: "software-engineer" },
                              margin: { left: "small" },
                              round: "xsmall",
                           },
                           name: "Palm Springs",
                           location: [33.8303, -116.5453],
                           onClick: () => {
                              // Handle click event
                           },
                           onHover: () => {
                              // Handle hover event
                           },
                        },
                        // Add more places as needed
                     ]}
                  />
                  <PostCardLocation />
                  <ImageStack
                     boxRef={innerBoxRef}
                     images={[
                        "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fpsp1.png?alt=media&token=40b26cba-c6f5-4561-8f6d-2c69dfa1c79c",
                        "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fpsp2.png?alt=media&token=fca8fdbe-0d59-42ce-91e6-202d01fc269a",
                        "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fpsp3.png?alt=media&token=44eb7820-0027-47bf-8a1e-71106d7444f6",
                        "https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/sevanportfolio%2Fpsp5.png?alt=media&token=ea6cfae9-c95e-4bac-a5d6-bb162ff94c4b",
                     ]}
                  />
               </Box>
            </Drop>
         )}
      </Box>
   );
};

export default LocationDrop;
