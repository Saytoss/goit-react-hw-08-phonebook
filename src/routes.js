import { lazy } from "react";

export default [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("./views/Home/Home" /* webpackChunkName: "home-page" */)
    ),
    private: false,
    restricted: false,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() =>
      import("./views/Login/Login" /* webpackChunkName: "login-page" */)
    ),
    private: false,
    restricted: true,
  },
  {
    name: "Registration",
    path: "/registration",
    exact: true,
    showInMenu: true,
    component: lazy(() =>
      import(
        "./views/Registration/Registration" /* webpackChunkName: "registration-page" */
      )
    ),
    private: false,
    restricted: true,
  },
  {
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() =>
      import(
        "./views/Contacts/Contacts" /* webpackChunkName: "contacts-page" */
      )
    ),
    private: true,
    restricted: false,
  },
];
