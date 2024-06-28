import { createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import { HomePage } from "../pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", index: true, element: <HomePage /> }],
  },
]);

export default Router;
