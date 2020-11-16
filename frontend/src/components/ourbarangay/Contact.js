import React from 'react';
import './Contact.css';


const Contact = () => {
    return(
        <div id="contact">
            <h1>CONTACT US</h1>
                <div className="flex-container">
                    <div className="google-map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.508529718968!2d121.07409131437018!3d14.683810178969804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0abcc4e2107%3A0x70b32fc95e999d0a!2sBarangay%20Holy%20Spirit%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1605524923131!5m2!1sen!2sph"></iframe>
                    </div>
                    <div className="contact-info">
                        <h4>Address</h4>
                        <p>San Simon Street,Holy Spirit, Quezon City, Metro Manila</p>
                        <h4>Email</h4>
                        <p>brgyholyspirit@gmail.com</p>
                        <h4>Contact No.</h4>
                        <p>(02) 6969 6969</p>
                        <p>(02) 6969 6969</p>
                        <p>(02) 6969 6969</p>
                    </div>
                </div>
                <div className="contact-container">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="contact-fname">First Name</label>
                            <input type="text" class="form-control" id="contact-fname" placeholder="First Name"/>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="contact-lname">Last Name</label>
                            <input type="text" class="form-control" id="contact-lname" placeholder="Last Name"/>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="contact-email">Email</label>
                            <input type="email" class="form-control" id="contact-email" placeholder="First Name"/>
                            </div>
                            
                            
                        </div>
                        <div class="form-group">
                                <label for="contact-message">Message</label>
                                <textarea
                                class="form-control"
                                id="contact-message"
                                rows="10"
                                cols="30"
                                placeholder="Type your message here ..."
                                ></textarea>
                            </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default Contact;