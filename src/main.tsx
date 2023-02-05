import { ChakraProvider } from "@chakra-ui/react";
import { Provider as Redux } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Redux store={store}>
        <App />
      </Redux>
    </ChakraProvider>
  </React.StrictMode>
);
