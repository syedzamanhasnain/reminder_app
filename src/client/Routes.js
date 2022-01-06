import Website from "./layout/Website/Website";
import Home from "views/Home";
import About from "views/About";
import SignUp from "views/SignUp";
import SignIn from "views/SignIn";
import Reminder from "views/Reminder";
import ForgotPassword from "views/ForgotPassword";
import CreateReminder from "views/CreateReminder";
import EditReminder from "views/EditReminder";
import ResetPassword from "views/ResetPassword";

const appRoutes = [
  {
    component: Website,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
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
      },
      {
        path: "/reminder",
        exact: true,
        component: Reminder,
      },
      {
        path: "/reminder/create",
        exact: true,
        component: CreateReminder,
      },
      {
        path: "/reminder/edit/:editId",
        exact: false,
        component: EditReminder,
      },
      {
        path: "/resetpassword/:resettoken",
        exact: false,
        component: ResetPassword,
      },
    ],
  },
];

export default appRoutes;
