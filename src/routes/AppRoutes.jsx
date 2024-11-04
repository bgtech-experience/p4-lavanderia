import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import Produtos from "../pages/Produtos";
import Servicos from "../pages/Servicos";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/produtos" element={<Produtos />} /> */}
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}