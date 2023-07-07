import React from "react";
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
import { Reactjs, Js, Linkedin, Redo, Mail, Github, Send, Location } from "grommet-icons";
import theme from "./theme";
import { StyledSpan } from "./utils/StyledSpan";
import PostCardLocation from "./components/HelloFromPS";
import styled from "styled-components";
import ContactLayer from "./components/ContactLayer";
import ProjectsTable from "./components/ExperienceDataTable";

const AppContainer = styled.div`
   position: relative;
`;

const App = () => {
   const [contactSevan, setContactSevan] = React.useState();
   return (
      <Grommet full theme={theme}>
         {/* <AppContainer> */}
         <Page kind="narrow">
            <Header
               align="center"
               direction="row"
               flex={false}
               justify="between"
               gap="medium"
               pad="xsmall"
            >
               <Text>sevan evans</Text>
            </Header>

            <PageContent pad={{ bottom: "small" }}>
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
                           size="xlarge"
                           src="https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/profilePictures%2FW0xdrFJk8BPiLv93iwv5n7sZleH2?alt=media&token=fd5d2a17-462f-4350-ba6c-6fa10c3b47e9"
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
                        <Paragraph size="large" margin={{ vertical: "xsmall" }} color="dark-3">
                           Howdy! I'm a <StyledSpan>software developer</StyledSpan> &{" "}
                           <StyledSpan>co-founder of BodyMX</StyledSpan>. I enjoy{" "}
                           <StyledSpan>long walks on the beach</StyledSpan> and dancing{" "}
                           <StyledSpan>Tango!</StyledSpan>
                        </Paragraph>
                        <Box
                           align="end"
                           justify="center"
                           direction="row"
                           gap="xsmall"
                           margin={{ right: "none" }}
                        >
                           <Location />
                           <Text>Palm Springs, California</Text>
                        </Box>
                     </Box>
                  </Box>
                  <Box align="center" justify="center" flex fill="horizontal">
                     <Anchor label="let's talk" onClick={() => setContactSevan(true)} />
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
                     <Heading level="3" margin={{ vertical: "small" }} size="medium">
                        Work
                     </Heading>

                     <Paragraph size="large" margin={{ vertical: "xsmall" }} fill color="dark-3">
                        With a love for <StyledSpan>coding</StyledSpan> rivaled only by my love for
                        <StyledSpan> coffee</StyledSpan>, I've spent a decade turning caffeine and
                        code into innovative <StyledSpan>software solutions</StyledSpan>.
                        Passionately embracing the latest tech advancements, I strive for
                        professional growth, seeking impactful collaborations to drive success in
                        the ever-evolving
                        <StyledSpan> digital landscape</StyledSpan>.
                     </Paragraph>
                  </Box>
               </Box>
               <Heading level="3" size="medium">
                  Experience
               </Heading>
               <ProjectsTable />
               <Box
                  align="center"
                  justify="center"
                  margin={{ top: "small" }}
                  border={{ color: "active-background", side: "top", size: "small" }}
                  gap="medium"
               >
                  <Box align="start" justify="center" fill="horizontal">
                     <Heading level="3" margin={{ vertical: "small" }} size="medium">
                        Contact
                     </Heading>
                     <Paragraph size="large" margin={{ vertical: "xsmall" }} fill color="dark-3">
                        Give me a shout, and we can make something cool happen. I'm usually quick to
                        respond.
                     </Paragraph>
                  </Box>
                  <Grid fill="horizontal" gap="small" columns="370px">
                     <Box
                        align="center"
                        justify="between"
                        width="350px"
                        height="xxsmall"
                        background={{ color: "graph-3", opacity: "strong" }}
                        pad="small"
                        direction="row"
                        gap="small"
                        round="xsmall"
                     >
                        <Box align="center" justify="center" direction="row" gap="small">
                           <Linkedin />
                           <Text weight="normal" size="large">
                              Sevan Evans
                           </Text>
                        </Box>
                     </Box>
                     <Box
                        align="center"
                        justify="between"
                        width="350px"
                        height="xxsmall"
                        background={{ color: "neutral-4", opacity: "strong" }}
                        pad="small"
                        direction="row"
                        gap="small"
                        round="xsmall"
                     >
                        <Box align="center" justify="center" direction="row" gap="small">
                           <Mail />
                           <Text weight="normal" size="large">
                              sevan@thebodymx.com
                           </Text>
                        </Box>
                     </Box>
                     <Box
                        align="center"
                        justify="between"
                        width="350px"
                        height="xxsmall"
                        background={{ color: "dark-2", opacity: "strong" }}
                        pad="small"
                        direction="row"
                        gap="small"
                        round="xsmall"
                     >
                        <Box align="center" justify="center" direction="row" gap="small">
                           <Github />
                           <Text weight="normal" size="large">
                              @plaidroni
                           </Text>
                        </Box>
                     </Box>
                  </Grid>
               </Box>
            </PageContent>
            {contactSevan && <ContactLayer setContactSevan={setContactSevan} />}
         </Page>
         {/* <PostCardLocation /> */}
         {/* </AppContainer> */}
      </Grommet>
   );
};

export default App;
