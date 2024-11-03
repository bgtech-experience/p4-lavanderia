import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

export default function Contato() {
    return (
        <>
            <Header>
                <Logo />
                <Nav />
            </Header>

            <Main>
                <h1>Contato</h1>

                <p>Entre em contato pelo WhatsApp, por e-mail ou utilize o nosso formulário de contato.</p>
            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
