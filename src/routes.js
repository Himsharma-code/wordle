import Auth from "./pages/Auth";
import Game from "./pages/Game";
import Home from "./pages/Home";

export const privateRoutes = [
  {
    path: "/play",
    component: Game,
    layout: "private",
  },
];

export const authRoutes = [
  {
    path: "/login",
    component: Auth,
    layout: "auth",
  },
];

export const publicRoutes = [
  {
    path: "/welcome",
    component: Home,
    layout: "auth",
  },
];
