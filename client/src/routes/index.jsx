import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import UserRoot from "../pages/UserRoot";
import Wishlist from "../pages/Wishlist";

export const ROUTES = [{
    path: '/',
    element: <UserRoot/>,
    children: [{
        path:'/',
        element: <Home/>
    },
    {
        path: '/add',
        element: <Add/>
    },
    {
        path: '/wishlist',
        element: <Wishlist/>
    },
    {
        path: '/:id',
        element: <Detail/>
    }
]
}]