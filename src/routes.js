import Auth from "./pages/Auth";
import Game from "./pages/Game";

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
