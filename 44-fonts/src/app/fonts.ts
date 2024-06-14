import { Inter, Roboto } from "next/font/google";
import LocalFonts from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--my-fonts",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "500"],
  //   style: ["normal", "italic"],
  style: "italic",
});

export const localFonts = LocalFonts({
  //   src: "./_fonts/Roboto-MediumItalic.ttf",
  src: [
    {
      path: "./_fonts/Roboto-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./_fonts/Roboto-BoldItalic.ttf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./_fonts/Roboto-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./_fonts/Roboto-MediumItalic.ttf",
      style: "italic",
      weight: "500",
    },
  ],
});
