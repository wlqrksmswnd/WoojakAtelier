import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./conponents/Header";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            
        </Routes>
    )
}
export default Router