const theme = {
   name: "sevanevans.com",
   rounding: 4,
   spacing: 24,
   defaultMode: "light",
   global: {
      colors: {
         brand: {
            dark: "#3E92CC",
            light: "#2A628F",
         },
         background: {
            dark: "#111111",
            light: "#FFFFFF",
         },
         "background-back": {
            dark: "#111111",
            light: "#EEEEEE",
         },
         "background-front": {
            dark: "#222222",
            light: "#FFFFFF",
         },
         "background-contrast": {
            dark: "#FFFFFF11",
            light: "#11111111",
         },
         text: {
            dark: "#EEEEEE",
            light: "#333333",
         },
         "text-strong": {
            dark: "#FFFFFF",
            light: "#000000",
         },
         "text-weak": {
            dark: "#CCCCCC",
            light: "#444444",
         },
         "text-xweak": {
            dark: "#999999",
            light: "#666666",
         },
         border: {
            dark: "#444444",
            light: "#CCCCCC",
         },
         control: "brand",
         "active-background": "background-contrast",
         "active-text": "text-strong",
         "selected-background": "brand",
         "selected-text": "text-strong",
         "status-critical": "#FF4040",
         "status-warning": "#FFAA15",
         "status-ok": "#00C781",
         "status-unknown": "#CCCCCC",
         "status-disabled": "#CCCCCC",
         "graph-0": "brand",
         "graph-1": "status-warning",
         focus: "#3E92CC",
      },
      font: {
         family: '"Open Sans"',
         face: "/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4kaVIGxA.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4saVIGxA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4jaVIGxA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4iaVIGxA.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4vaVIGxA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVIGxA.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
      },
      active: {
         background: "active-background",
         color: "active-text",
      },
      hover: {
         background: "active-background",
         color: "active-text",
      },
      selected: {
         background: "selected-background",
         color: "selected-text",
      },
   },
   chart: {},
   diagram: {
      line: {},
   },
   meter: {},
   tip: {
      content: {
         background: {
            color: "background",
         },
         elevation: "none",
         round: false,
      },
   },
   layer: {
      background: {
         dark: "#111111",
         light: "#FFFFFF",
      },
   },
   email: "plaidroni@gmail.com",
   date: "2023-07-06T18:00:45.111Z",
};

export default theme;
