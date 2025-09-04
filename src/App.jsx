import "./App.css";
import Layout from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import Post from "./pages/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>Что-то не так!</h2>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <Post />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>😕 Страница не найдена (404)</h1>,
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
