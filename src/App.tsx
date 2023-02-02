import GlobalStyles from "./styles/Global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { ThemeProvider } from "@chakra-ui/react";
import customTheme from "./styles/ChakraComponentAdjustments";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "headphones", element: <Headphones /> },
        { path: "speakers", element: <Speakers /> },
        { path: "earphones", element: <Earphones /> },
      ],
    },
  ]);

  // console.log(customTheme);

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
