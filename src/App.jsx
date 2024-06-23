import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorMsg from "./components/ErrorMsg";

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
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <ErrorMsg />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
