import { ChakraProvider } from "@chakra-ui/react";
import { Provider as Redux } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CacheProvider value={emotionCache}>
    <ChakraProvider>
      <Redux store={store}>
        <App />
      </Redux>
    </ChakraProvider>
  </CacheProvider>
);
