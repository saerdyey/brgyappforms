import React from 'react';
import './Hero.css';
import rm1 from '../img/rm1.png'
import rm2 from '../img/rm2.jpg'
import rm3 from '../img/rm3.png'
import rm4 from '../img/rm4.jpg'
import rm5 from '../img/rm5.jpg'
import rm6 from '../img/rm6.jpg'


const Hero = () => {
    return(
        <div id="hero">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={rm1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={rm2} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={rm3} alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={rm4} alt="Fourth slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={rm5} alt="Fifth slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={rm6} alt="Sixth slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Hero;