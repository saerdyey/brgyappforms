import React from 'react';
import './GeneralInfo.css';
import rm1 from '../../img/rm1.png'
import rm2 from '../../img/rm2.jpg'
import rm3 from '../../img/rm3.png'

const GeneralInfo = () => {
    return(
        <div id="geninfo">
            <h1>GENERAL INFO</h1>
            <div className="geninfo-container">
                <div className="intro-container">
                    <h2>FIRST WORLD BARANGAY</h2>
                    <h1>BARANGAY</h1>
                    <h1>HOLY SPIRIT,</h1>
                    <h1>QUEZON CITY</h1>
                    <p>will continue to be a world class barangay and a model of exemplary governance within Quezon City…</p>
                    <button><a class="btn btn-outline-info my-2 my-sm-0" href="#">Mission and Vision</a></button>
                </div>
                <div className="intro-text-container">
                    <h2>INTRODUCTION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus. Sed faucibus tortor in condimentum porttitor. Ut ut vulputate sapien, ac convallis diam. Integer ac justo rutrum, suscipit purus vel, tristique libero. Nullam vitae neque lorem. Nullam nec euismod lorem. Donec quis egestas ante. Vivamus vehicula augue faucibus justo eleifend auctor. Donec euismod purus quis sem faucibus imperdiet.</p>
                    <p>Suspendisse sagittis posuere leo sit amet hendrerit. Nulla est odio, condimentum quis neque non, eleifend fringilla elit. Integer id neque lacinia, tempus odio ac, volutpat lorem. Aenean porta purus sed gravida placerat. Sed vel vulputate sapien. Donec tortor enim, eleifend eget lacinia sed, fringilla at quam. Ut dapibus dolor eu leo aliquet cursus. Vestibulum et vulputate leo. Proin iaculis pulvinar luctus. Proin tincidunt ligula a dolor elementum, id malesuada mauris ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis viverra eleifend scelerisque. Fusce eu pulvinar urna.</p>
                </div>
                <hr/>
                <div className="mv-container">
                    <h2>OUR MISSION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus. Sed faucibus tortor in condimentum porttitor. Ut ut vulputate sapien, ac convallis diam. Integer ac justo rutrum, suscipit purus vel, tristique libero. Nullam vitae neque lorem. Nullam nec euismod lorem. Donec quis egestas ante. Vivamus vehicula augue faucibus justo eleifend auctor. Donec euismod purus quis sem faucibus imperdiet.</p>
                    <h2>OUR VISION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus. Sed faucibus tortor in condimentum porttitor. Ut ut vulputate sapien, ac convallis diam. Integer ac justo rutrum, suscipit purus vel, tristique libero. Nullam vitae neque lorem. Nullam nec euismod lorem. Donec quis egestas ante. Vivamus vehicula augue faucibus justo eleifend auctor. Donec euismod purus quis sem faucibus imperdiet.</p>
                    <div className="mv-boxes">
                        <div className="mv-box">
                            <div className="mv-pics"><img src={rm1} alt=""/></div>
                            
                            <h3>Enviroment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus. Sed faucibus tortor in condimentum porttitor.</p>
                        </div>
                        <div className="mv-box">
                        <div className="mv-pics"><img src={rm2} alt=""/></div>
                            
                            <h3>Social Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus. Sed faucibus tortor in condimentum porttitor. Ut ut vulputate sapien, ac convallis diam. Integer ac justo rutrum, suscipit purus vel, tristique libero. Nullam vitae neque lorem. Nullam nec euismod lorem. Donec quis egestas ante. Vivamus vehicula augue faucibus justo eleifend auctor. Donec euismod purus quis sem faucibus imperdiet.</p>
                        </div>
                        <div className="mv-box">
                        <div className="mv-pics"><img src={rm3} alt=""/></div>
                            
                            <h3>Community Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus. Sed faucibus tortor in condimentum porttitor. Ut ut vulputate sapien, ac convallis diam. Integer ac justo rutrum, suscipit purus vel, tristique libero. Nullam vitae neque lorem. Nullam nec euismod lorem.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="population-container">
                    <h2>POPULATION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus. Sed faucibus tortor in condimentum porttitor. Ut ut vulputate sapien, ac convallis diam. Integer ac justo rutrum, suscipit purus vel, tristique libero. Nullam vitae neque lorem. Nullam nec euismod lorem. Donec quis egestas ante. Vivamus vehicula augue faucibus justo eleifend auctor. Donec euismod purus quis sem faucibus imperdiet.</p>
                    <div className="population-category">
                        <div className="population-household">
                            <h2>1,332</h2>
                            <p>Households (Freeway Survey as of 2008)</p>
                        </div>
                        <div className="population-household household-size">
                            <h2>5 to 7</h2>
                            <p>per Households</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="economy-container">
                    <h2>ECONOMY</h2>
                    <div className="economy-category">
                        <div className="economy">
                            <h3>Predominant Economic Activities</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor metus. Sed a luctus est, a molestie metus.</p>
                        </div>
                        <div className="economy">
                            <h3>Major Business Establishments</h3>
                            <ul>
                                <li>Embassies and Consulates</li>
                                <li>Colegio San Agustin</li>
                                <li>Petron Gas Station</li>
                                <li>UCC Coffee House</li>
                                <li>Telus International Philippines</li>
                            </ul>
                        </div>
                        <div className="economy">
                            <h3>Major Source of Household Income</h3>
                            <p>Business/ Property Rentals</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo;