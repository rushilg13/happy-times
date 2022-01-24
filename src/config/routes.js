import { Dashboard } from "../components/Dashboard/Dashboard";

export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Dashboard />
  },
  
  {
    path: "/:category/",
    exact: true,
    main: () => <Dashboard />
  }
];