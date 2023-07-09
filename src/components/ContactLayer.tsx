import { Layer, Box, Text, TextInput, TextArea, Button } from "grommet";
import { Down, Send, User, MailOption } from "grommet-icons";
import React from "react";
import emailjs from "emailjs-com";
import { useToast } from "../utils/ToastUtils";

const ContactLayer = ({ setContactSevan }) => {
   const { showToast } = useToast();
   const [submitting, setSubmitting] = React.useState(false);

   const handleToastNotif = (alertLevel, label, description, duration) => {
      showToast({
         alertLevel: alertLevel,
         label: label,
         description: description,
         duration: duration,
      });
   };
   function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm("service_l2l5ura", "template_t6tgs4a", e.target, "b_81Tq3G9AueC0ts4").then(
         (result) => {
            setSubmitting(false);
            handleToastNotif("info", "Email sent!", "I'll get back to you soon :)", 6500);
            setContactSevan(false);
         },
         (error) => {
            setSubmitting(false);
            handleToastNotif("critical", "Uh oh..", "Critical error! Try again later.", 6500);
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
                        <TextInput
                           icon={<User />}
                           name="from_name"
                           id="from_name"
                           placeholder="Name"
                        />
                     </Box>
                     <Box align="center" justify="center">
                        <TextInput
                           icon={<MailOption />}
                           name="from_email"
                           id="from_email"
                           placeholder="Email"
                        />
                     </Box>
                  </Box>
                  <TextArea
                     name="message"
                     id="message"
                     placeholder="What's on your mind?"
                     resize="vertical"
                  />
               </Box>
               <Box align="end" justify="center" fill="horizontal">
                  <Button
                     type="submit"
                     label="Send it"
                     icon={<Send />}
                     primary
                     busy={submitting}
                     onClick={() => setSubmitting(true)}
                  />
               </Box>
            </Box>
         </form>
      </Layer>
   );
};

export default ContactLayer;
