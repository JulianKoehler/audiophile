import GlobalStyles from "./styles/Global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Headphones, { loader as headphonesLoader } from "./pages/Headphones";
import Speakers, { loader as speakersLoader } from "./pages/Speakers";
import Earphones, { loader as earphonesLoader } from "./pages/Earphones";
import { ThemeProvider } from "@chakra-ui/react";
import customTheme from "./styles/ChakraComponentAdjustments";
import ProductDetails, { loader as productLoader } from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "headphones", element: <Headphones />, loader: headphonesLoader },
        { path: "headphones/:productSlug", element: <ProductDetails />, loader: productLoader },
        { path: "speakers", element: <Speakers />, loader: speakersLoader },
        { path: "speakers/:productSlug", element: <ProductDetails />, loader: productLoader },
        { path: "earphones", element: <Earphones />, loader: earphonesLoader },
        { path: "earphones/:productSlug", element: <ProductDetails />, loader: productLoader },
      ],
    },
  ]);

  console.log(customTheme);

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
