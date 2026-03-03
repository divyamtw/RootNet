import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./features/auth/pages/index.js";
import Feed from "./features/post/pages/Feed.jsx";

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <Feed />,
  },
  {
    path: `/login`,
    element: <Login />,
  },
  {
    path: `/register`,
    element: <Register />,
  },
]);
