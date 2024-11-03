import { Link } from "react-router-dom";
import './nav.css';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/servicos">Serviços</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}
