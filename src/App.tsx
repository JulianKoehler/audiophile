import GlobalStyles from "./styles/Global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Headphones, { loader as headphonesLoader } from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { ThemeProvider } from "@chakra-ui/react";
import customTheme from "./styles/ChakraComponentAdjustments";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "headphones", element: <Headphones />, loader: headphonesLoader },
        { path: "headphones/:productID", element: <ProductDetails /> },
        { path: "speakers", element: <Speakers /> },
        { path: "speakers/:productID", element: <ProductDetails /> },
        { path: "earphones", element: <Earphones /> },
        { path: "earphones/:productID", element: <ProductDetails /> },
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
