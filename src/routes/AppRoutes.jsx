import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import Sobre from "../pages/Sobre";
// import Contato from "../pages/Contato";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contato" element={<Contato />} /> */}
            {/* <Route path="/sobre" element={<Sobre />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}