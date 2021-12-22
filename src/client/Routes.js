import Website from "./layout/Website/Website";
import Home, { loadHomeData } from "views/Home";
import About from "views/About";
import SignUp from "views/SignUp";
import SignIn from "views/SignIn";

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
      /* Parameterized data */
      /* {
            path: '/route/:slug',
            exact: true,
            component: Home,
            loadDataWithMatch: loadHomeData
        }, */
    ],
  },
];

export default appRoutes;
