import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#020336",
    200: "#00d2d2",
    300: "#a2a3b7",
    400: "#0EBE6F",
    500: "#6161ff",
    600: "#030437",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};
const fonts= {
  heading: `'Heading Font Name', sans-serif`,
    body: `'Body Font Name', sans-serif`,
}
const customTheme = extendTheme({ colors,fonts });

export default customTheme;