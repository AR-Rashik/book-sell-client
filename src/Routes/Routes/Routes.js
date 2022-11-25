import Blog from "../../Pages/Blog/Blog";
import CategoryCollection from "../../Pages/CategoryCollection/CategoryCollection";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/Error/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: <CategoryCollection></CategoryCollection>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
