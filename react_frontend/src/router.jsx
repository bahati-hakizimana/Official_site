import{createBrowserRouter} from "react-router-dom"

import App from "./App";
import Home from "./home/Home";
import Form from "./Form.jsx";



const router = createBrowserRouter([

    {
        path:'/',
        element:<Home />

    },
    {
        path:'/form',
        element:<Form />
    }

])

export default router;