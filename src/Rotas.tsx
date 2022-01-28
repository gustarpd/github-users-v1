import { Routes, Route } from "react-router-dom";;
import { Home } from "./pages/home";
import { Respositorios } from "./pages/index";
export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/repos" element={<Respositorios></Respositorios>}></Route>
    </Routes>
  );
};
 