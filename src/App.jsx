import "./App.css";
import Tweet from "./components/Tweet";
import Home from "./pages/Home";
import ErrorMsg from "./components/ErrorMsg";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    // {
      // path: "/",
      // element: <Home />,
    // },
    // {
    //   path: "/login",
    //   element: <LoginForm />,
    // },
    {
      path: "/registro",
      element: <Register />,
    },
    // {
    //   path: "/:username",
    //   element: <Profile />,
    // },
    {
      path: "*",
      element: <ErrorMsg />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
