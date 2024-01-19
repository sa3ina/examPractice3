import Home from "../pages/Home";
import Root from "../pages/Root";
import About from "../pages/About";
import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Blog from "../pages/Blog";
import Cakes from "../pages/Cakes";
import Contact from "../pages/Contact";
import Wishlist from "../pages/Wishlist";
import Detail from "../pages/Detail";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cakes",
        element: <Cakes />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
