import Carousel from "../../components/Carousel";
import Section from "../../components/Section";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

// Importa as imagens
import laundryImage1 from '../../assets/laundry01.png';
import laundryImage2 from '../../assets/laundry02.png';
import laundryImage3 from '../../assets/laundry03.png';
import laundryImage4 from '../../assets/laundry04.png';

export default function Home() {
    const images = [
        { url: 'https://live.themewild.com/laundri/assets/img/service/05.jpg', caption: "Texto para o Slide 1" },
        { url: 'https://live.themewild.com/laundri/assets/img/service/04.jpg', caption: "Texto para o Slide 2" },
        { url: 'https://live.themewild.com/laundri/assets/img/service/01.jpg', caption: "Texto para o Slide 3" }
    ];
    
    return (
        <>
            <Logo>
                <Nav />
            </Logo>

            <Header>
                <Carousel images={images} />
            </Header>

            <Main>
                {/* ===== Vantagens ===== */}
                <Section id="vantagens" className="vantagens">
                    <Article>
                        <img src={laundryImage1} alt="" />
                        <h3>Serviços de Qualidade</h3>
                        <p>Earum, vitae fugiat consequatur dolores ipsa!</p>
                    </Article>

                    <Article>
                        <img src={laundryImage2} alt="" />
                        <h3>Compre & Pague Online</h3>
                        <p>Pariatur id nam saepe ipsa voluptate similique totam.</p>
                    </Article>

                    <Article>
                        <img src={laundryImage3} alt="" />
                        <h3>Entrega Rápida</h3>
                        <p>Laboriosam voluptatum nobis reprehenderit, possimus, maxime libero!</p>
                    </Article>

                    <Article>
                        <img src={laundryImage4} alt="" />
                        <h3>Melhores Preços</h3>
                        <p>Blanditiis aliquid officiis fuga pariatur praesentium vitae.</p>
                    </Article>
                </Section>

                {/* ===== Serviços ===== */}
                <Section id="servicos" className="servicos">
                    <h1>Serviços</h1>
                </Section>

                {/* ===== Contato ===== */}
                <Section id="contato" className="contato">
                    <h1>Contato</h1>
                </Section>

                {/* ===== Avaliações ===== */}
                <Section id="avaliacoes" className="avaliacoes">
                    <h1>Avaliações</h1>
                </Section>

                {/* ===== Sobre ===== */}
                <Section id="sobre" className="sobre">
                    <h1>Sobre</h1>
                </Section>
            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
