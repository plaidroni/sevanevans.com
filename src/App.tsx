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
   Button,
} from "grommet";
import { Location, ChatOption, Download } from "grommet-icons";
import theme from "./theme";
import { StyledSpan } from "./utils/StyledSpan";
import styled from "styled-components";
import ContactLayer from "./components/ContactLayer";
import ProjectsTable from "./components/ExperienceDataTable";
import DarkThemeSwitch from "./components/DarkThemeSwitch";
import { ToastProvider, useToast } from "./utils/ToastUtils";
import ContactGrid from "./components/ContactGrid";
import LocationDrop from "./components/LocationDrop";
import useMediaQuery from "./hooks/UseMediaQuery";
import TechnologyStack from "./components/TechnologyStack";
// import DancingImage from "./components/DancingEasterEgg";
import Signature from "./components/Signature";
import ProjectsSection from "./components/ProjectsSection";

// container styles not needed here

const CtaButton = styled(Button)`
   border-radius: 999px;
   padding: 10px 18px;
   font-weight: 600;
   letter-spacing: 0.02em;
   box-shadow: 0 10px 22px rgba(0, 0, 0, 0.16);
   transition:
      transform 180ms ease,
      box-shadow 180ms ease;

   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
   }
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
   // Add a bit of breathing room on desktop too
   const mobilePad = isMobile ? "large" : "medium";
   // const mobileHeading = isMobile ? "large" : "medium";
   const mobileHeadingLevel = isMobile ? 2 : 3;

   // Dancing Easteregg
   // const [dancing, setDancing] = React.useState(false);

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
                  <Box
                     align="baseline"
                     justify="between"
                     direction="row"
                     margin={{ bottom: "small" }}
                  >
                     <Box align="start" justify="center" gap="medium" wrap>
                        <Box
                           align="center"
                           justify="center"
                           direction="row"
                           gap="medium"
                           pad={{ horizontal: isMobile ? "medium" : "large" }}
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
                              style={{ maxWidth: "65ch" }}
                           >
                              Hey, I'm Sevan. I am a <StyledSpan>physics student</StyledSpan> &{" "}
                              <StyledSpan>software developer</StyledSpan>. I enjoy dancing tango and
                              competitive skydiving!
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
                              <Paragraph
                                 color="text-paragraph"
                                 margin="none"
                                 style={{ maxWidth: "65ch" }}
                              >
                                 I'm in{" "}
                                 <Text weight="bold">
                                    <StyledSpan>Palm Springs, California!</StyledSpan>
                                 </Text>{" "}
                                 <Text size="small">USA</Text>
                              </Paragraph>
                           </Box>
                           {/* Primary CTAs */}
                           <Box
                              align={isMobile ? "center" : "start"}
                              justify="center"
                              direction={isMobile ? "column" : "row"}
                              gap="medium"
                              margin={{ vertical: "small" }}
                              fill={false}
                              focusIndicator={false}
                              wrap
                              alignSelf={isMobile ? "center" : "start"}
                           >
                              <CtaButton
                                 primary
                                 icon={<ChatOption />}
                                 label="let's talk"
                                 href="mailto:sevanplusevans@gmail.com"
                              />
                              <CtaButton
                                 label="download resume"
                                 href="/Sevan_Evans_Resume_2-15-26.pdf"
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
                        </Box>
                     </Box>
                  </Box>
                  <Box
                     align="center"
                     justify="center"
                     pad={{ vertical: "medium" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                  >
                     <Box align="start" justify="center" fill="horizontal" gap="xsmall">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "xsmall" }}
                           size="medium"
                        >
                           About Me
                        </Heading>

                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                           style={{ maxWidth: "70ch" }}
                        >
                           I'm passionate about both physics and software development, which is
                           rivaled only by my love for coffee. I'm currently pursuing an Associate
                           of Science degree in Physics at College of the Desert, and I have an
                           strong interest in scientific computing, simulations, and Computational
                           Fluid Dynamics. I love to solve problems, and build novel things.
                        </Paragraph>
                     </Box>
                  </Box>
                  <Box
                     pad={{ vertical: "medium" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                  >
                     <Heading level={mobileHeadingLevel} size="medium">
                        Experience & Education
                     </Heading>
                     <ProjectsTable />
                  </Box>
                  <Box
                     pad={{ vertical: "medium" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                  >
                     <Heading level={mobileHeadingLevel} size="medium">
                        My Tools of Choice
                     </Heading>
                     <TechnologyStack />
                  </Box>
                  <Box
                     align="center"
                     justify="center"
                     pad={{ vertical: "medium" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                  >
                     <Box align="start" justify="center" fill="horizontal" gap="xsmall">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "xsmall" }}
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
                     pad={{ vertical: "medium" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                  >
                     <Box align="start" justify="center" fill="horizontal" gap="xsmall">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "xsmall" }}
                           size="medium"
                        >
                           Contact
                        </Heading>
                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                           style={{ maxWidth: "70ch" }}
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
               {/* dancing easter egg removed for now */}
            </Page>
            {/* <PostCardLocation /> */}
            {/* </AppContainer> */}
         </ToastProvider>
      </Grommet>
   );
};

export default App;
