import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBackground: "#07182CB2",
        background: "#212C39",
        foreground: "var(--foreground)",
        buttonColor: "#04F0FB",
        cyanCustom: "#04F0FB",
        "custom-border": "rgba(4, 240, 251, 0.7)", // Custom color with 70% opacity
      },
      borderWidth: {
        custom: "1.02px", // Custom border width
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      blur: {
        custom: "90.7882px", // Add custom blur value
      },
    },
  },
  plugins: [],
} satisfies Config;
