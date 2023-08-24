import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pasos from "../pasos/Pasos"
import Pasos1 from "../pasos1/Pasos1"
import Pasos2 from "../pasos2/pasos2"
import Home from "../home/Home"

const Router = () =>{
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/pasos" element={<Pasos/>}></Route>
            <Route path="/pasos1" element={<Pasos1/>}></Route>
            <Route path="/pasos2" element={<Pasos2/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default Router
