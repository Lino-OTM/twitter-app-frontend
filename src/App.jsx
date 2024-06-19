import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Authentication from "./components/Authentication";

function App() {
  const user = false;
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
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
        <ProtectedRoute user={user}>
          <Home />
        </ProtectedRoute>
      ),
    },

    {
      path: "/:username",
      element: (
        <ProtectedRoute user={user}>
          <Login />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
