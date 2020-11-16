import React from 'react';
import {Link} from 'react-router-dom'
import './Forms.css'

const Forms = () => {
    return(
        <div id="forms">
            <div className="forms-container">
                <h1>ONLINE FORMS</h1>
                <div className="forms-form-container">
                    <h2>General Services</h2>
                    <div className="flex-container">
                        <div className="form">
                            <h3>Barangay ID Application Requirements</h3>
                            <h4>New Applicant</h4>
                            <p>Must be a Filipino citizen</p>
                            <p>6 months residency in the barangay</p>
                            <p>DVA ID/Proof of residency from DVA (for resident)</p>
                            <p>Certificate of employment issued by employer (Kasambahay, driver etc.)</p>
                            <Link to="/brgyid-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                        <div className="form">
                            <h3>Compliant KP Form no. 7</h3>
                            <p>Filing fee</p>
                            <Link to="/complaint-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                        <div className="form">
                            <h3>Applicant for Travel details for Locally Stranded Individuals</h3>
                            <p>Proof of residency from DVA (for resident)</p>
                            <p>Certificate of Employment (Kasambahay, driver etc.)</p>
                            <p>Xerox copy of DVA ID or any valid government Id</p>
                            <Link to="/travel_details-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>      
                        </div>
                        <div className="form">
                            <h3>Barangay Business Clearance</h3>
                            <h4>New Applicant</h4>
                            <p>DTI or SEC</p>
                            <p>Memorandum of Agreement (CSA, Petron, MRT and MECC Concessionaires)</p>
                            <p>ID of Owner/Authorization (Id of representative)</p>
                            <p>Paid-up Capital (CSA, Petron, MRT and MECC Concessionaires)</p>
                            <p>Payment</p>
                            <Link to="/business_clearance-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                    </div>
                </div>
                <div className="forms-form-container">
                <h2>Committee on Health and Sanitation</h2>
                    <div className="flex-container">
                        <div className="form center-form">
                            <h3>Pet Registration</h3>
                            <Link to="/pet_registration-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                    </div>
                </div>
                <div className="forms-form-container">
                <h2>Committee on Social Services</h2>
                    <div className="flex-container">
                        <div className="form">
                            <h3>Senior Blue Card Requirements</h3>
                            <p>Latest Comelec Certificate</p>
                            <p>Birth certificate</p>
                            <p>Marriage certificate (if married)</p>
                            <p>Proof of residency from DVA (for resident)</p>
                            <p>Certificate of employment (for kasambahay)</p>
                            <p>Photocopy of Senior White Card ID</p>
                            <p>1×1 id picture 1pc.</p>
                            <p>Barangay certificate</p>
                            <Link to="/senior_bluecard-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                        <div className="form">
                            <h3>Senior White Card Requirements</h3>
                            <p>Latest Comelec Certificate</p>
                            <p>Birth certificate</p>
                            <p>Marriage certificate (if married)</p>
                            <p>Proof of residency from DVA (for resident)</p>
                            <p>Certificate of employment (for kasambahay)</p>
                            <p>Photocopy of Senior White Card ID</p>
                            <p>1×1 id picture 1pc.</p>
                            <p>Barangay certificate</p>
                            <Link to="/senior_whitecard-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                    </div>
                </div>
                <div className="forms-form-container">
                <h2>Committee on Infrastructure, Utilities and Facilities</h2>
                    <div className="flex-container">
                        <div className="form center-form">
                            <h3>Barangay Construction Clearance requirements</h3>
                            <h4>New Construction and Major Renovation</h4>
                            <p>Brgy. Construction form</p>
                            <p>DVA Permit to Work (xerox)</p>
                            <p>A3 size plan (approved by DVA) </p>
                            <Link to="/pet_registration-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                    </div>
                </div>
                <div className="forms-form-container">
                <h2>Committee on Environmental Protection and Management</h2>
                    <div className="flex-container">
                        <div className="form center-form">
                            <h3>Tree Application Requirements</h3>
                            <p>Tree Application Form</p>
                            <p>Print Photo(s) of requested tree and location</p>
                            <p>Payment</p>
                            <Link to="/pet_registration-form"><button class="btn btn-outline-info my-2 my-sm-0"><a href="">Application Form</a></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms;