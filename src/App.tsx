import React, { useRef } from "react";
import {
   Grommet,
   Page,
   Header,
   Text,
   PageContent,
   Box,
   Avatar,
   Heading,
   Paragraph,
   Anchor,
   Button,
   Layer,
   TextInput,
   TextArea,
   ThumbsRating,
   Grid,
} from "grommet";
import {
   Reactjs,
   Js,
   Linkedin,
   Redo,
   Mail,
   Github,
   Send,
   Location,
   ChatOption,
   Link,
   MailOption,
   Download,
} from "grommet-icons";
import theme from "./theme";
import { EvansSpan, StyledHeaderSpan, StyledSpan } from "./utils/StyledSpan";
import PostCardLocation from "./components/HelloFromPS";
import styled from "styled-components";
import ContactLayer from "./components/ContactLayer";
import ProjectsTable from "./components/ExperienceDataTable";
import DarkThemeSwitch from "./components/DarkThemeSwitch";
import { ToastProvider, useToast } from "./utils/ToastUtils";
import ContactGrid from "./components/ContactGrid";
import LocationDrop from "./components/LocationDrop";
import useMediaQuery from "./hooks/UseMediaQuery";
import TechnologyStack from "./components/TechnologyStack";
import DancingImage from "./components/DancingEasterEgg";
import Signature from "./components/Signature";
import ProjectsSection from "./components/ProjectsSection";

const AppContainer = styled.div`
   position: relative;
`;

const App = () => {
   const [contactSevan, setContactSevan] = React.useState(false);
   const [dark, setDark] = React.useState(false);

   React.useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      setDark(mediaQuery.matches);

      const handler = (e) => setDark(e.matches);
      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);
   }, []);

   // Location Drop
   const [locationDrop, setLocationDrop] = React.useState(false);
   const boxRef = useRef<any | null>(null);

   // Mobile page padding & sizing
   const { isMobile } = useMediaQuery();
   const mobilePad = isMobile ? "large" : "none";
   const mobileHeading = isMobile ? "large" : "medium";
   const mobileHeadingLevel = isMobile ? 2 : 3;

   // Dancing Easteregg
   const [dancing, setDancing] = React.useState(false);

   const { showToast } = useToast();

   const handleToastNotif = (alertLevel, label, description, duration, actions) => {
      showToast({
         alertLevel: alertLevel,
         label: label,
         description: description,
         duration: duration,
         actions: actions,
      });
   };

   return (
      <Grommet full theme={theme} themeMode={dark ? "dark" : "light"}>
         <ToastProvider>
            <Header
               align="center"
               direction="row"
               flex={false}
               justify="between"
               gap="medium"
               pad="xsmall"
               sticky="scrollup"
               height={"xsmall"}
               style={
                  dark
                     ? {
                          backdropFilter: "blur(5.5px)",
                          WebkitBackdropFilter: "blur(8.5px)",
                       }
                     : {
                          background: "rgba(255, 255, 255, 0.3)",
                          backdropFilter: "blur(5.5px)",
                          WebkitBackdropFilter: "blur(8.5px)",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                       }
               }
            >
               <Heading margin={{ left: "small", top: "none" }} size="small">
                  <Signature dark={dark} />
               </Heading>
               <DarkThemeSwitch dark={dark} setDark={setDark} />
            </Header>

            <Page kind="narrow">
               <PageContent pad={mobilePad} flex="grow">
                  <Box align="baseline" justify="between" direction="row">
                     <Box align="start" justify="center" gap="medium" wrap>
                        <Box
                           align="center"
                           justify="center"
                           direction="row"
                           gap="medium"
                           pad={{ horizontal: "large" }}
                        >
                           <Avatar
                              align="center"
                              flex={false}
                              justify="center"
                              overflow="hidden"
                              round="full"
                              size="2xl"
                              src="https://raw.githubusercontent.com/plaidroni/sevanevans.com/refs/heads/master/public/self.jpeg"
                           />
                           <Box align="start" justify="start" fill>
                              <Heading margin="none">sevan</Heading>
                              <Heading
                                 margin={{
                                    left: "medium",
                                    vertical: "none",
                                    top: "none",
                                    bottom: "none",
                                 }}
                              >
                                 evans
                              </Heading>
                           </Box>
                        </Box>
                        <Box align="start" justify="between" wrap direction="column" gap="small">
                           <Paragraph
                              size="large"
                              margin={{ vertical: "xsmall" }}
                              color="text-paragraph"
                           >
                              Whats up, I'm a <StyledSpan>physics student</StyledSpan> &{" "}
                              <StyledSpan>software developer</StyledSpan>. I enjoy long walks on the
                              beach and competitive skydiving!
                           </Paragraph>

                           <Box
                              align="end"
                              justify="center"
                              direction="row"
                              gap="xsmall"
                              margin={{ right: "none" }}
                              onClick={() => setLocationDrop(true)}
                              ref={boxRef}
                              focusIndicator={false}
                              hoverIndicator
                              pad="xsmall"
                              round="xsmall"
                              border
                           >
                              <Location />
                              <Paragraph color="text-paragraph" margin="none">
                                 I'm in{" "}
                                 <Text weight="bold">
                                    <StyledSpan>Palm Springs, California!</StyledSpan>
                                 </Text>{" "}
                                 <Text size="small">USA</Text>
                              </Paragraph>
                           </Box>
                        </Box>
                        {isMobile && (
                           <Box
                              align="center"
                              justify="center"
                              flex
                              fill="horizontal"
                              gap={"small"}
                              margin={{ vertical: "small" }}
                              focusIndicator={false}
                           >
                              <Button
                                 primary
                                 icon={<ChatOption />}
                                 label="let's talk"
                                 // onClick={() => setContactSevan(true)}
                                 href="mailto:sevanplusevans@gmail.com"
                              />

                              <Button
                                 label="download resume"
                                 href="/Sevan_Evans_CV_NPN.pdf"
                                 download="SevanE_CV"
                                 icon={<Download />}
                                 color={"software-engineer"}
                                 onClick={() => {
                                    handleToastNotif(
                                       "normal",
                                       "Downloading",
                                       "Dear Shady, I left my Resume but you still ain't callin",
                                       5000,
                                       [
                                          {
                                             onClick: () => {},
                                             label: "Retry!",
                                          },
                                       ],
                                    );
                                 }}
                              />
                           </Box>
                        )}
                     </Box>
                     {!isMobile && (
                        <Box align="center" gap="small" justify="center" flex fill="horizontal">
                           <Anchor
                              label="let's talk"
                              icon={<MailOption />}
                              href="mailto:sevanplusevans@gmail.com"
                              // onClick={() => setContactSevan(true)}
                           />
                           <Anchor
                              label="download resume"
                              href="/Sevan_Evans_CV_NPN.pdf"
                              download="SevanE_CV"
                              icon={<Download />}
                              color={"contract"}
                              onClick={() => {
                                 handleToastNotif(
                                    "normal",
                                    "Downloading",
                                    "Dear Shady, I left my Resume but you still ain't callin",
                                    5000,
                                    [
                                       {
                                          onClick: () => {},
                                          label: "Retry!",
                                       },
                                    ],
                                 );
                              }}
                           />
                        </Box>
                     )}
                  </Box>
                  <Box
                     align="center"
                     justify="center"
                     margin={{ top: "small", bottom: "small" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                     gap="medium"
                  >
                     <Box align="start" justify="center" fill="horizontal">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "small" }}
                           size="medium"
                        >
                           About Me
                        </Heading>

                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                        >
                           With a love for <StyledSpan>building software</StyledSpan> rivaled only
                           by my love for coffee, I’ve spent the past decade crafting{" "}
                           <StyledSpan>web and cross-platform mobile applications</StyledSpan> that
                           are fast, intuitive, and scalable. From concept to deployment, I focus on{" "}
                           <StyledSpan>responsive UI design</StyledSpan>,
                           <StyledSpan> clean project architecture</StyledSpan>, and{" "}
                           <StyledSpan>seamless user experiences</StyledSpan>. I bridge
                           functionality and form to deliver impactful digital products that work
                           beautifully across devices.
                        </Paragraph>
                     </Box>
                  </Box>
                  <Box border={{ color: "active-background", side: "top", size: "small" }}>
                     <Heading level={mobileHeadingLevel} size="medium">
                        Experience & Education
                     </Heading>
                     <ProjectsTable />
                  </Box>
                  <Box border={{ color: "active-background", side: "top", size: "small" }}>
                     <Heading level={mobileHeadingLevel} size="medium">
                        My Tools of Choice
                     </Heading>
                     <TechnologyStack />
                  </Box>
                  <Box
                     align="center"
                     justify="center"
                     margin={{ top: "small" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                     gap="medium"
                  >
                     <Box align="start" justify="center" fill="horizontal">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "small" }}
                           size="medium"
                        >
                           Featured Projects
                        </Heading>
                        <ProjectsSection isMobile={isMobile} />
                     </Box>
                  </Box>
                  <Box
                     align="center"
                     justify="center"
                     margin={{ top: "small" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                     gap="medium"
                  >
                     <Box align="start" justify="center" fill="horizontal">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "small" }}
                           size="medium"
                        >
                           Contact
                        </Heading>
                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                        >
                           Give me a shout, and we can make something cool happen. I'm usually quick
                           to respond.
                        </Paragraph>
                     </Box>
                     <ContactGrid setContactSevan={setContactSevan} />
                  </Box>
               </PageContent>
               {contactSevan && <ContactLayer setContactSevan={setContactSevan} />}
               {locationDrop && (
                  <LocationDrop
                     setLocationDrop={setLocationDrop}
                     locationDrop={locationDrop}
                     boxRef={boxRef}
                  />
               )}
               {dancing && <DancingImage />}
            </Page>
            {/* <PostCardLocation /> */}
            {/* </AppContainer> */}
         </ToastProvider>
      </Grommet>
   );
};

export default App;
