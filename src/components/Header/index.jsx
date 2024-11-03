import Carousel from '../Carousel';
import './header.css';

export default function Header({ children }) {
    // const images = [
    //     { url: 'https://live.themewild.com/laundri/assets/img/service/05.jpg', caption: "Texto para o Slide 1" },
    //     { url: 'https://live.themewild.com/laundri/assets/img/service/04.jpg', caption: "Texto para o Slide 2" },
    //     { url: 'https://live.themewild.com/laundri/assets/img/service/01.jpg', caption: "Texto para o Slide 3" }
    // ];
    
    return (
        <header>
            {/* <Carousel images={images} /> */}
            {children}
        </header>
    );
}
