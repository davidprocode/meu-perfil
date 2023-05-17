import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Hello from "./pages/Hello"
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";

export default function MyApp() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/hello" element={<Hello/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registrar" element={<Register/>}/>
        <Route path="/bem-vindo" element={<Confirmation/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}