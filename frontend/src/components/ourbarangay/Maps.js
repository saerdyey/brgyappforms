import React from 'react';
import './Maps.css';

const Maps = () => {
    return(
        <div id="maps">
            <div className="maps-container">
                <h1>MAPS</h1>
                <div className="google-map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.508529718968!2d121.07409131437018!3d14.683810178969804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0abcc4e2107%3A0x70b32fc95e999d0a!2sBarangay%20Holy%20Spirit%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1605524923131!5m2!1sen!2sph"></iframe>
                </div>
                <div className="map-container">
                    <h2>BOUNDARIES</h2>
                    <div className="flex-container">
                        <div className="brgy-boundaries">
                            <h3>Barangay Boundaries</h3>
                            <ul>
                                <li>NORTH: Barangay 143</li>
                                <li>WEST: Barangay 143</li>
                                <li>EAST: Barangay 143</li>
                                <li>SOUTH: Barangay 143</li>
                            </ul>
                        </div>
                        <div className="st-boundaries">
                            <h3>Street Boundaries</h3>
                            <ul>
                                <li>NORTH: Barangay 143</li>
                                <li>WEST: Barangay 143</li>
                                <li>EAST: Barangay 143</li>
                                <li>SOUTH: Barangay 143</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <h2>TOTAL LAND AREA</h2>
                    <p>The Village has an area of 1.9033 square kilometers</p>
                </div>
                <div className="map-container">
                    <h2>EXISTING LAND USE</h2>
                    <p>The Barangay is composed of 1,332 residential lots</p>
                </div>
            </div>
        </div>
    )
}

export default Maps;