import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";
import "./not-found.css";

export default function NotFound() {
    return (
        <>
            <Header>
                <Logo>
                    <div>BGTech</div> <span>Experience</span>
                </Logo>
                <Nav />
            </Header>

            <Main>
                <div className="not-found">
                    <h2>404 - Página não encontrada</h2>
                </div>
            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
