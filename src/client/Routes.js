import Website from "./layout/Website/Website";
import Home, { loadHomeData } from "views/Home";
import About from "views/About";
import SignUp from "views/SignUp";
import SignIn from "views/SignIn";
import ForgotPassword from "views/ForgotPassword";

const appRoutes = [
  {
    component: Website,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
        // loadData: loadHomeData
      },
      {
        path: "/about",
        exact: true,
        component: About,
      },
      {
        path: "/signin",
        exact: true,
        component: SignIn,
      },
      {
        path: "/signup",
        exact: true,
        component: SignUp,
      },
      {
        path: "/forgotPassword",
        exact: true,
        component: ForgotPassword,
      }
    ],
  },
];

export default appRoutes;
