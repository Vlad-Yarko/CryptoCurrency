import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from './Components/Home/Home.jsx'
import Crypto from "./Components/Crypto/Crypto.jsx";
import Error404 from "./Components/Error404/Error404.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />}/>
            <Route path='crypto/:symbol' element={<Crypto />}/>
            <Route path='*' element={<Error404 />}/>
        </Route>
    )
)

export default router
