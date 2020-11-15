import React from 'react';
import './Hero.css';
import picture1 from '../img/picture1.jfif'
import picture2 from '../img/picture2.jfif'
import picture3 from '../img/picture3.jfif'


const Hero = () => {
    return(
        <div id="hero">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={picture1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={picture2} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={picture3} alt="Third slide"/>
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