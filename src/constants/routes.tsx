import Blog from "../pages/Blog/blog"
import Contacts from "../pages/Contact/contact"
import Courses from "../pages/Courses/courses"
import Dashboard from "../pages/Dashboard/dashboard"
import Home from "../pages/Home/home"
// import Login from "../pages/Login/login"
import Mentors from "../pages/Mentors/mentors"

export const routes = [
    {
        key: 0,
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        key: 1,
        path: "/",
        element: <Home />
    },
    {
        key: 2,
        path: "/courses",
        element: <Courses />
    },
    {
        key: 3,
        path: "/mentors",
        element: <Mentors />
    },
    {
        key: 4,
        path: "./blog",
        element: <Blog />
    },
    {
        key: 5,
        path: "/contact",
        element: <Contacts/>
    }
    // {
    //     key: 4,
    //     path: "/login",
    //     element: <Login />
    // }
    
]