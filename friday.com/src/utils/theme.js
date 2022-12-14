import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#020336",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#6161ff",
    600: "#030437",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;