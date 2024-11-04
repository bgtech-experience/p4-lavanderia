import Carousel from "../../components/Carousel";
import Section from "../../components/Section";
import Article from "../../components/Article";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

// Importa as imagens
import laundryImage1 from '../../assets/laundry01.png';
import laundryImage2 from '../../assets/laundry02.png';
import laundryImage3 from '../../assets/laundry03.png';
import laundryImage4 from '../../assets/laundry04.png';

import serviceImage1 from '../../assets/service01.jpg';
import serviceImage2 from '../../assets/service02.jpg';
import serviceImage3 from '../../assets/service03.jpg';
import serviceImage4 from '../../assets/service04.jpg';
import serviceImage5 from '../../assets/service05.jpg';
import serviceImage6 from '../../assets/service06.jpg';

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
                    <h1>Quais as <span>Vantagens</span>?</h1>

                    <div>
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
                    </div>
                </Section>

                {/* ===== Serviços ===== */}
                <Section id="servicos" className="servicos">
                    <h1><span>Serviços</span> Oferecidos</h1>

                    <div>
                        {/* Lavagem a Seco */}
                        <Article>
                            <div className="imagem-container">
                                <img src={serviceImage1} alt="" />
                            </div>

                            <div>
                                <h3>Lavagem a Seco</h3>
                                
                                <p>Vitae voluptatibus voluptate inventore debitis, at reiciendis dolore vero nihil ducimus pariatur officiis commodi quam, unde alias sunt, animi sapiente.</p>
                            </div>

                            <Button className="saiba-mais">Saiba mais</Button>
                        </Article>

                        {/* Lavagem Doméstica */}
                        <Article>
                            <div className="imagem-container">
                                <img src={serviceImage2} alt="" />
                            </div>

                            <div>
                                <h3>Lavagem Doméstica</h3>
                                
                                <p>Vitae voluptatibus voluptate inventore debitis, at reiciendis dolore vero nihil ducimus pariatur officiis commodi quam, unde alias sunt, animi sapiente.</p>
                            </div>

                            <Button className="saiba-mais">Saiba mais</Button>
                        </Article>

                        {/* Lavagem Comercial */}
                        <Article>
                            <div className="imagem-container">
                                <img src={serviceImage3} alt="" />
                            </div>

                            <div>
                                <h3>Lavagem Comercial</h3>
                                
                                <p>Vitae voluptatibus voluptate inventore debitis, at reiciendis dolore vero nihil ducimus pariatur officiis commodi quam, unde alias sunt, animi sapiente.</p>
                            </div>

                            <Button className="saiba-mais">Saiba mais</Button>
                        </Article>
                    </div>

                    <div>
                        {/* Remoção de Manchas */}
                        <Article>
                            <div className="imagem-container">
                                <img src={serviceImage4} alt="" />
                            </div>

                            <div>
                                <h3>Remoção de Manchas</h3>
                                
                                <p>Vitae voluptatibus voluptate inventore debitis, at reiciendis dolore vero nihil ducimus pariatur officiis commodi quam, unde alias sunt, animi sapiente.</p>
                            </div>

                            <Button className="saiba-mais">Saiba mais</Button>
                        </Article>

                        {/* Lavagem de Cortinas */}
                        <Article>
                            <div className="imagem-container">
                                <img src={serviceImage5} alt="" />
                            </div>

                            <div>
                                <h3>Lavagem de Cortinas</h3>
                                
                                <p>Vitae voluptatibus voluptate inventore debitis, at reiciendis dolore vero nihil ducimus pariatur officiis commodi quam, unde alias sunt, animi sapiente.</p>
                            </div>

                            <Button className="saiba-mais">Saiba mais</Button>
                        </Article>

                        {/* Ferro a Vapor */}
                        <Article>
                            <div className="imagem-container">
                                <img src={serviceImage6} alt="" />
                            </div>

                            <div>
                                <h3>Ferro a Vapor</h3>
                                
                                <p>Vitae voluptatibus voluptate inventore debitis, at reiciendis dolore vero nihil ducimus pariatur officiis commodi quam, unde alias sunt, animi sapiente.</p>
                            </div>

                            <Button className="saiba-mais">Saiba mais</Button>
                        </Article>
                    </div>
                </Section>

                {/* ===== Contato ===== */}
                <Section id="contato" className="contato">
                    <Contato />
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
