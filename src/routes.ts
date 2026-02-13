import { createBrowserRouter } from "react-router";
import { Admin, Home } from "./pages";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "admin", Component: Admin },
]);