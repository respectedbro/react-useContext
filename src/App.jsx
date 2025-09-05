import './App.css';
import Layout from './Layout.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import {useState} from 'react';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import AdminRoute from './components/AdminRoute.jsx';

function App() {
    const [isAuth, setIsAuth] = useState({
        auth: false,
        role: null
    });

    const login = (role) => {
        setIsAuth({
            auth: true,
            role: role
        });
    };

    const logout = () => {
        setIsAuth({
            auth: false,
            role: null
        });
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout isAuth={isAuth} logout={logout}/>,
            errorElement: <h2>Что-то не так!</h2>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: 'profile',
                    element:
                        <ProtectedRoute isAuth={isAuth}>
                            <Profile></Profile>
                        </ProtectedRoute>

                },
                {
                    path: 'admin',
                    element:
                        <AdminRoute isAuth={isAuth}>
                            <Admin></Admin>
                        </AdminRoute>

                },
                {
                    path: 'login',
                    element: <Login login={login}/>,
                },

            ]
        },
        {
            path: '*',
            element: <h2>Error</h2>
        }
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
