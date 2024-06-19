import { Children } from 'react';
import './App.css';
import Tweet from './components/Tweet';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	const user = true;

	const ProtectedRoute = ({ user, children }) => {
		if (!user) {
			return <Navigate to="/login" />;
		}
		return children;
	};

	const router = createBrowserRouter([
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
		{
			path: '/',
			element: (
				<ProtectedRoute user={user}>
					<Home />
				</ProtectedRoute>
			),
		},

		{
			path: '/:username',
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
