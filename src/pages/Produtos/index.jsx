import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

export default function Produtos() {
    return (
        <>
            <Header>
                <Logo />
                <Nav />
            </Header>

            <Main>
                <h1>Produtos</h1>

                <p>Confira os nossos produtos:</p>

                <ul>
                    <li>Produto 1</li>
                    <li>Produto 2</li>
                    <li>Produto 3</li>
                </ul>
            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
