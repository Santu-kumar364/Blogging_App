import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import Missing from "./Missing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { 
                index: true, 
                element: <Home /> 
            },
            {   path: "about",
                element: <About /> 
            },
            { 
                path: "post", 
                element: <NewPost /> 
            },
            { 
                path: "post/:id",
                element: <PostPage />
            },
            { 
                path: "edit/:id", 
                element: <EditPost />
            },
            { 
                path: "*", 
                element: <Missing /> 
            }
        ],
    }
]);

export default router;




