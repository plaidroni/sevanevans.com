import { Box, Text, Drop, WorldMap } from "grommet";
import { useState, useRef } from "react";
import PostCardLocation from "./HelloFromPS";
import ImageStack from "./ImageStack";
import styled from "styled-components";
import useMediaQuery from "../hooks/UseMediaQuery";

const DropCard = styled(Box)`
   border-radius: 18px;
   border: 1px solid rgba(255, 255, 255, 0.08);
   box-shadow: 0 22px 50px rgba(0, 0, 0, 0.35);
   backdrop-filter: blur(12px);
   -webkit-backdrop-filter: blur(12px);
   overflow: visible;
`;

const MapCard = styled(Box)`
   position: relative;
   border-radius: 16px;
   border: 1px solid rgba(255, 255, 255, 0.08);
   overflow: hidden;
   background: rgba(255, 255, 255, 0.03);
`;

const HighlightedMap = styled(WorldMap)`
   width: 100%;
   height: 100%;

   & circle {
      transform: scale(1.7);
      transform-origin: center;
      filter: drop-shadow(0 0 8px rgba(79, 134, 198, 0.8));
   }
`;

const MapMarker = styled.div<{ $isMobile: boolean }>`
   position: absolute;
   left: ${(props) => (props.$isMobile ? "16%" : "16%")};
   top: ${(props) => (props.$isMobile ? "35%" : "37%")};
   transform: translate(-50%, -50%);
   pointer-events: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 6px;
`;

const MapMarkerDot = styled.div`
   width: 12px;
   height: 12px;
   border-radius: 999px;
   background: #7fc7ff;
   border: 2px solid rgba(255, 255, 255, 0.85);
   box-shadow:
      0 0 10px rgba(127, 199, 255, 0.9),
      0 0 20px rgba(127, 199, 255, 0.6);
`;

const MapMarkerArrow = styled.div`
   width: 0;
   height: 0;
   border-left: 7px solid transparent;
   border-right: 7px solid transparent;
   border-top: 14px solid rgba(127, 199, 255, 0.95);
   filter: drop-shadow(0 0 8px rgba(127, 199, 255, 0.6));
`;

const LocationGallery = styled(Box)<{ $isMobile: boolean }>`
   position: relative;
   width: 100%;
   min-height: ${(props) => (props.$isMobile ? "220px" : "280px")};
   padding: ${(props) => (props.$isMobile ? "10px 10px 18px 10px" : "14px 16px 26px 16px")};
   border-radius: 16px;
   background: rgba(255, 255, 255, 0.03);
   border: 1px solid rgba(255, 255, 255, 0.08);
   overflow: visible;
`;

const LocationDrop = ({ setLocationDrop, locationDrop, boxRef }) => {
   const align = { top: "bottom", right: "right" };
   const innerBoxRef = useRef<any | null>(null);
   const [openDrop, setOpenDrop] = useState(false);
   const { isMobile } = useMediaQuery();

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
               <DropCard
                  align="center"
                  justify="center"
                  width={isMobile ? "medium" : "large"}
                  round="medium"
                  background={{ color: "background" }}
                  pad={isMobile ? "small" : "medium"}
                  ref={innerBoxRef}
                  gap={isMobile ? "small" : "medium"}
               >
                  <Box align="start" width="100%" gap="xsmall">
                     <Text size="large" weight="bold">
                        Palm Springs, California
                     </Text>
                  </Box>

                  <MapCard width="100%" pad="none" height={isMobile ? "small" : "medium"}>
                     <HighlightedMap
                        hoverColor="accent-1"
                        color="text-paragraph"
                        places={[
                           {
                              color: "accent-1",
                              content: (
                                 <Box
                                    pad={{ horizontal: "small", vertical: "xsmall" }}
                                    background={{ color: "background-front" }}
                                 >
                                    <Text>Palm Springs</Text>
                                 </Box>
                              ),
                              dropProps: {
                                 align: { left: "right" },
                                 background: { color: "background-front" },
                                 margin: { left: "small" },
                                 round: "xsmall",
                              },
                              name: "Palm Springs",
                              location: [33.8303, -116.5453],
                           },
                        ]}
                     />
                     <MapMarker aria-hidden="true" $isMobile={isMobile}>
                        <MapMarkerDot />
                        <MapMarkerArrow />
                     </MapMarker>
                  </MapCard>

                  <LocationGallery $isMobile={isMobile}>
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
                  </LocationGallery>
               </DropCard>
            </Drop>
         )}
      </Box>
   );
};

export default LocationDrop;
