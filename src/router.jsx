import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import NotFound from "./components/NotFound"
import Thanks from "./pages/Thanks";
function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/works" element={<Works/>}></Route>
            <Route path="/thanks" element={<Thanks/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}
export default Router