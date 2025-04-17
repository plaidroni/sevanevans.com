const theme = {
   name: "sevanevans.com",
   rounding: 4,
   spacing: 24,
   defaultMode: "light",
   global: {
      colors: {
         brand: {
            dark: "#8D3B72",
            light: "#8D3B72",
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
         "text-paragraph-highlight": {
            dark: "#fffff0",
            light: "#3b3b3b",
         },
         "text-paragraph": {
            dark: "#c9c9c9",
            light: "#6e6e6e",
         },
         border: {
            dark: "#444444",
            light: "#CCCCCC",
         },
         "co-founder": "#1D2E28",
         collaborator: "#0F5132",
         "1st-place": "#14452F",
         "software-engineer": "#006e48",

         control: "brand",
         "active-background": "background-contrast",
         "active-text": "text-strong",
         "selected-background": "brand",
         "selected-text": "text-strong",
         "status-normal": "#FFFFF0",
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
         face: "/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA.woff2) format('woff2');",
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
