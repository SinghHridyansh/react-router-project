import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./pages/ParamComp";
import Courses from "./components/courses";
import Tests from "./components/tests";
import Reports from "./components/Reports";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mock-tests",
        element: <Tests />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <>
        <Navbar />
        <ParamComp />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <NotFound />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
