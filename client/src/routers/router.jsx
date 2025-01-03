import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Events from "../pages/event";
import Schedule from "../components/Calendar";
import EventCard from "../components/EventCard";
import Login from "../components/Login";
import Register from "../components/register";
import Dashboard from "../components/dashboard";
import Layout from "../layout/layout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Layout><Home/></Layout> 
            },
            {
                path:"/events",
                element:<Layout><Events/></Layout>
            },
            {
                path:"/events/:id",
                element:<Layout> <EventCard/> </Layout>
            },
            {
                path:"/schedule",
                element:<Layout> <Schedule/> </Layout> 
            },
            {
                path:"/user/dashboard",
                element: <Dashboard/>
            },
            {
                path:"/user/login",
                element:<Layout> <Login/> </Layout> 
            },
            {
                path:"/user/register",
                element: <Layout> <Register/> </Layout>
            }
            
        ]
    },

]);

export default router;