import React from "react";
import { Grid, Box, Text, Anchor } from "grommet";
import { Linkedin, Mail, Github } from "grommet-icons";
import styled from "styled-components";
import { useToast } from "../utils/ToastUtils";

const ContactGridWrap = styled(Grid)`
   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
   grid-auto-rows: 1fr;
`;

const ContactLink = styled(Anchor)`
   text-decoration: none;
   color: inherit;
`;

const ContactCard = styled(Box)`
   position: relative;
   overflow: hidden;
   height: 100%;
   border: 1px solid rgba(255, 255, 255, 0.16);
   box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
   transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease;

   &:before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.75;
      background: radial-gradient(circle at 12% 12%, rgba(255, 255, 255, 0.35), transparent 55%);
      pointer-events: none;
   }

   &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
      border-color: rgba(255, 255, 255, 0.28);
   }
`;

const IconBadge = styled(Box)`
   width: 40px;
   height: 40px;
   border-radius: 999px;
   background: rgba(255, 255, 255, 0.2);
   display: flex;
   align-items: center;
   justify-content: center;
`;

const CardMeta = styled(Text)`
   letter-spacing: 0.08em;
   text-transform: uppercase;
`;

function ContactGrid({ setContactSevan }) {
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
      <ContactGridWrap fill="horizontal" gap="small" columns="auto" margin={{ bottom: "medium" }}>
         <ContactLink
            href="https://www.linkedin.com/in/sevanevans"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
               handleToastNotif("normal", "Redirecting...", "Taking you to Linkedin!", 5000, [
                  {
                     onClick: () => {},
                     label: "Let's go!",
                  },
               ]);
            }}
         >
            <ContactCard
               pad="medium"
               round="small"
               background={{ color: "graph-3", opacity: "strong" }}
               gap="small"
            >
               <Box direction="row" align="center" justify="between">
                  <IconBadge>
                     <Linkedin />
                  </IconBadge>
                  <CardMeta size="xsmall" color="text-weak">
                     LinkedIn
                  </CardMeta>
               </Box>
               <Text weight="bold" size="large">
                  Sevan Evans
               </Text>
               <Text size="small" color="text-weak">
                  Connect and message me directly.
               </Text>
            </ContactCard>
         </ContactLink>

         <ContactLink href="mailto:sevanplusevans@gmail.com">
            <ContactCard
               pad="medium"
               round="small"
               background={{ color: "accent-1", opacity: "strong" }}
               gap="small"
            >
               <Box direction="row" align="center" justify="between">
                  <IconBadge>
                     <Mail />
                  </IconBadge>
                  <CardMeta size="xsmall" color="white">
                     Email
                  </CardMeta>
               </Box>
               <Text weight="bold" size="large" color="white">
                  sevanplusevans@gmail.com
               </Text>
               <Text size="small" color="white">
                  Fastest way to reach me.
               </Text>
            </ContactCard>
         </ContactLink>

         <ContactLink
            href="https://www.github.com/plaidroni"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
               handleToastNotif("normal", "Redirecting...", "Taking you to Github!", 5000, [
                  {
                     onClick: () => {},
                     label: "Let's go!",
                  },
               ]);
            }}
         >
            <ContactCard
               pad="medium"
               round="small"
               background={{ color: "dark-2", opacity: "strong" }}
               gap="small"
            >
               <Box direction="row" align="center" justify="between">
                  <IconBadge>
                     <Github />
                  </IconBadge>
                  <CardMeta size="xsmall" color="text-weak">
                     GitHub
                  </CardMeta>
               </Box>
               <Text weight="bold" size="large">
                  @plaidroni
               </Text>
               <Text size="small" color="text-weak">
                  Browse my projects and code.
               </Text>
            </ContactCard>
         </ContactLink>
      </ContactGridWrap>
   );
}

export default ContactGrid;
