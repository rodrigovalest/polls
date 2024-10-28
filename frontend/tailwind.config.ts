import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MonaSans: ["MonaSans", "Verdana"],
        MonaSansExpanded: ["MonaSansExpanded", "Verdana"],
        MonaSansCondensed: ["MonaSansCondensed", "Verdana"],
      },
      colors: {
        background: "#F6F6F6",
        appBlack: "#090818",
        appRed: "#D72F2F",
        appGreen: "#2FD77B",
        appWhite: "#FDFDFD",
        appGray: "#C2C2C2",
        appLightGray: "#F2F2F2"
      },
    },
  },
  plugins: [],
};
export default config;
