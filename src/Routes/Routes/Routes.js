import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import CategoryCollection from "../../Pages/CategoryCollection/CategoryCollection";
import Login from "../../Pages/Login/Login";
import SellerProducts from "../../Pages/SellerProducts/SellerProducts";
import ErrorPage from "../../Pages/Shared/Error/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <CategoryCollection></CategoryCollection>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myproducts",
        element: <SellerProducts></SellerProducts>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
