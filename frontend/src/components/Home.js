import React from 'react';
import Hero from './Hero'

const Home = () => {
    return(
        <div id="genera-info">
            <div className="intro-text">
                <Hero/>
                <h3>FIRST WORLD BARANGAY</h3>
                <h1>Barangay</h1>
                <h1>HOLY SPIRIT</h1>
                <h1>QUEZON CITY</h1>
                <button><a class="nav-link disabled" href="#">Associations</a></button>
            </div>
        </div>
    )
}

export default Home;