import { Layer, Box, Text, TextInput, TextArea, Button } from "grommet";
import { Down, Send } from "grommet-icons";

import React from "react";

const ContactLayer = ({ setContactSevan }) => {
   return (
      <Layer
         onClickOutside={() => setContactSevan(false)}
         animate
         modal
         responsive={false}
         margin="xsmall"
      >
         <Box align="center" justify="center" pad="xsmall" gap="small" width="large">
            <Box
               direction="row"
               gap="small"
               align="start"
               justify="start"
               pad="xsmall"
               fill="horizontal"
               border={{ side: "bottom" }}
            >
               <Down size="medium" color="border" onClick={() => setContactSevan(false)}></Down>
               <Text>Contact Sevan</Text>
            </Box>
            <Box align="center" justify="center" gap="small" fill="horizontal">
               <Box align="start" justify="start" direction="row" gap="small" fill="horizontal">
                  <Box align="center" justify="center">
                     <TextInput name="Name" placeholder="Name" />
                  </Box>
                  <Box align="center" justify="center">
                     <TextInput name="Email" placeholder="Email" />
                  </Box>
               </Box>
               <TextArea placeholder="What's on your mind?" resize="vertical" />
            </Box>
            <Box align="end" justify="center" fill="horizontal">
               <Button label="Send it" icon={<Send />} primary />
            </Box>
         </Box>
      </Layer>
   );
};

export default ContactLayer;
