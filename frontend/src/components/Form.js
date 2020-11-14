import React from 'react';

import './Form.css'

const Form = () => {
    return(
        <div className="container">
            <div id="form-container">
                <div id="form-wrapper">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputFname">First Name</label>
                                <input type="text" className="form-control" id="inputFname" placeholder="Firstname"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputMname">Middle Name</label>
                                <input type="text" className="form-control" id="inputMname" placeholder="Middle Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputLname">Last Name</label>
                                <input type="text" className="form-control" id="inputLname" placeholder="Last Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputMobile">Mobile No.</label>
                                <input type="text" className="form-control" id="inputMobile" placeholder="Mobile No."/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Purpose</label>
                                <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;