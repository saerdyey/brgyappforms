import React, {useState} from 'react';

import './Form.css';

const Form = () => {

    const [inputs, setInputs] = useState({
        fname:'',
        mname:'',
        lname:'',
        mobile:'',
        address:'',
        address2:'',
        city:'',
        purpose:'',
        isComplete:false
    })

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const inputsHandler = (e) => {
        setInputs({...inputs, [e.target.id]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputs)

        var csrftoken = getCookie('csrftoken')

        var url = 'http://localhost:8000/appforms-api/appform-create/'
        fetch(url, {
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify(inputs)
        }).then(response => {
            console.log("FORM SUCCESSFULY SUBMITTED")
        }).catch(function(error){
            console.log('ERROR:', error)
        })
    }

    return(
        <div className="container">
            <div id="form-container">
                <div id="form-wrapper">
                    <form onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFname">First Name</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="fname" placeholder="Firstname"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMname">Middle Name</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="mname" placeholder="Middle Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLname">Last Name</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="lname" placeholder="Last Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMobile">Mobile No.</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="mobile" placeholder="Mobile No."/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input onChange={inputsHandler} type="text" className="form-control" id="address" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input onChange={inputsHandler} type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="city"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Purpose</label>
                                <select onChange={inputsHandler} id="purpose" className="form-control">
                                <option value="null">A</option>
                                <option value="null">B</option>
                                <option value="null">C</option>
                                <option value="null">D</option>
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