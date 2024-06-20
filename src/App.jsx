import { Children } from "react";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Authentication from "./components/Authentication";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/auth",
      element: <Authentication />,
    },
    {
      path: "/registro",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },

    {
      path: "/:username",
      element: (
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
