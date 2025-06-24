import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CountryDetailPage from "./components/CountryDetailPage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/country/:countryId",
        element: <CountryDetailPage />,
      },
    ],
  },
]);

export default appRouter;
