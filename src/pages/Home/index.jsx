import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

export default function Home() {
    return (
        <>
            <Header>
                <Logo />
                <Nav />
            </Header>

            <Main>
                <h1>Home</h1>

                <p>Seja muito bem-vindo(a)!</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corrupti consequuntur! Nulla atque, consequatur possimus sed hic blanditiis aliquam distinctio. Praesentium, dicta itaque ad consequatur fuga omnis voluptates tempora ipsam quia, nisi, quisquam quibusdam. Beatae deleniti sequi itaque ipsa vel fuga molestias. Natus eaque modi adipisci accusamus. Aperiam neque veniam quam, fuga facere officiis suscipit! Illum debitis, odio sint natus atque, cupiditate nisi vitae doloremque minima architecto maxime ipsam consectetur doloribus neque ratione facilis fuga labore provident voluptas explicabo aspernatur nihil quia? Optio facere voluptas nobis quam, voluptatibus incidunt! Illo possimus ipsum eveniet pariatur perspiciatis ut! Perferendis esse vitae et!</p>
            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
