const theme = {
   name: "sevanevans.com",
   rounding: 4,
   spacing: 24,
   defaultMode: "light",
   global: {
      colors: {
         brand: {
            // slightly brighter brand for dark surfaces for better presence
            dark: "#A04E88",
            light: "#8D3B72",
         },
         background: {
            dark: "#111111",
            light: "#FAF9F6",
         },
         "background-back": {
            dark: "#111111",
            light: "#EEEEEE",
         },
         "background-front": {
            dark: "#222222",
            light: "#FAF9F6",
         },
         "background-contrast": {
            dark: "#FFFFFF11",
            light: "#11111111",
         },
         text: {
            dark: "#EEEEEE",
            light: "#111111",
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
         "co-founder": { dark: "#74B2F4", light: "#2F5E9E" },
         collaborator: { dark: "#5FA0E8", light: "#2B4E86" },
         "1st-place": { dark: "#8AC5FF", light: "#3567AA" },
         "software-engineer": { dark: "#6EA1D9", light: "#3E5879" },
         "physics-as": { dark: "#4F86C6", light: "#2C4A6B" },
         contract: { dark: "#9AB9F0", light: "#3A63A3" },

         control: "brand",
         "active-background": "background-contrast",
         "active-text": "text-strong",
         "selected-background": "brand",
         // ensure strong contrast on brand-selected backgrounds
         "selected-text": "#FFFFFF",
         // slightly darker than near-white for better visibility on light backgrounds
         "status-normal": "#EDE8C9",
         "status-critical": "#FF4040",
         "status-warning": "#FFAA15",
         "status-ok": "#00C781",
         "status-unknown": "#CCCCCC",
         "status-disabled": "#CCCCCC",
         "graph-0": "brand",
         "graph-1": "status-warning",
         // used in ExperienceDataTable; add an explicit color for consistency
         "graph-2": "status-ok",
         // accents provide a richer palette for components needing variations
         "accent-1": "#3E92CC", // matches focus blue
         "accent-2": "#51A3A3", // teal
         "accent-3": "#CB904D", // warm accent
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
