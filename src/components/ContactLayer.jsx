import { Layer, Box, Text, TextInput, TextArea, Button } from "grommet";
import { Down, Send } from "grommet-icons";
import React from "react";
import emailjs from "emailjs-com";

const ContactLayer = ({ setContactSevan }) => {
   function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm("service_l2l5ura", "template_t6tgs4a", e.target, "b_81Tq3G9AueC0ts4").then(
         (result) => {
            console.log(result.text);
            setContactSevan(false);
         },
         (error) => {
            console.log(error.text);
         },
      );
   }

   return (
      <Layer
         onClickOutside={() => setContactSevan(false)}
         animate
         modal
         responsive={false}
         margin="xsmall"
      >
         <form onSubmit={sendEmail}>
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
                        <TextInput name="name" placeholder="Name" />
                     </Box>
                     <Box align="center" justify="center">
                        <TextInput type="email" name="email" placeholder="Email" />
                     </Box>
                  </Box>
                  <TextArea name="message" placeholder="What's on your mind?" resize="vertical" />
               </Box>
               <Box align="end" justify="center" fill="horizontal">
                  <Button type="submit" label="Send it" icon={<Send />} primary />
               </Box>
            </Box>
         </form>
      </Layer>
   );
};

export default ContactLayer;
