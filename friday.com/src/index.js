import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./AuthContext/Context";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./utils/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
