import React from "react";
import { useState } from "react";
import { Button } from "grommet";
import { Moon, Sun } from "grommet-icons";
const DarkThemeSwitch = ({ dark, setDark }) => {
   return <Button icon={dark ? <Moon /> : <Sun />} onClick={() => setDark(!dark)}></Button>;
};

export default DarkThemeSwitch;
