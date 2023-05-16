import Home from "./pages/Home";
import Login from "./pages/Login";
import Hello from "./pages/Hello"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function MyApp() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/hello" element={<Hello/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}