import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Vehicle } from "./pages/Vehicle";
import { Sponsors } from "./pages/Sponsors";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "takim", Component: Team },
      { path: "arac", Component: Vehicle },
      { path: "sponsorlar", Component: Sponsors },
      { path: "iletisim", Component: Contact },
    ],
  },
]);
