import './App.css';
import Layout from './Layout.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Feedback from './pages/Feedback.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index:true,
                element:<About/>,
            },
            {
                path:'posts',
                element:<Posts/>
            },
            {
                path:'feedback',
                element:<Feedback/>
            }
        ]
    }

])

function App() {

    return (
        <>
            <RouterProvider router={router}/>

        </>
    );
}

export default App;
