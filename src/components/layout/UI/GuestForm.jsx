import React from 'react';

const GuestForm = () => {
    return (
        <>
            <div className="check-bill-form">
                <form novalidate="" action="#" method="post" className="">
                    <div style={{justifyContent: "space-evenly", display: "flex", gap: "20px", width: "calc(100% - 20px)"}}>
                        <span className="bill-wrap bill-half" style={{marginTop: '10px'}}>
                        <label>First Name*</label>
                        <div>
                            <input placeholder="Enter your first name" required="" className="form-control" type="text" value="" name="firstName" />
                            <div className="invalid-feedback">Please Enter First Name.</div>
                        </div>
                        </span>
                        <span className="bill-wrap bill-half" style={{marginTop: '10px'}}>
                        <label>Last Name*</label>
                            <div>
                            <input placeholder="Enter your last name" required="" className="form-control" type="text" value="" name="lastName" />
                            <div className="invalid-feedback">Please Enter Last Name.</div>
                            </div>
                        </span>
                    </div>
                    <div style={{justifyContent: "space-evenly", display: "flex", gap: "20px", width: "calc(100%)"}}>
                    <span className="bill-wrap" style={{marginTop: '10px'}}>
                        <label>Address</label>
                            <div>
                            <input placeholder="Address Line 1" required="" className="form-control" type="text" value="" name="address" style={{width:"97%"}}/>
                            <div className="invalid-feedback">Please Enter Address.</div>
                            </div>
                        </span> 
                    </div>
                    
                    <div style={{justifyContent: "space-evenly", display: "flex", gap: "20px", width: "calc(100% - 20px)"}}>
                    <div className="bill-wrap bill-half" style={{marginTop: '10px', paddingRight: 0}}>
                        <label>Country</label>
                        <span className="bl-select-inner">
                            <select name="country" required="" className="bill-select form-select form-select-sm" id="select-state" style={{width: "1px"}}>
                            <option value="" disabled="" selected="">Country</option>
                            </select>
                        </span>
                        </div>
                        <span className="bill-wrap bill-half" style={{marginTop: '10px', paddingRight: 0}}>
                            <label>Region State</label>
                            <div className="bl-select-inner">
                                <select name="state" required="" className="bill-select form-select form-select-sm" id="select-state" style={{width: "1px"}}>
                                <option value="" disabled="" selected="">Region/State</option>
                                </select>
                            </div>
                        </span>
                    </div>
                    
                    <div style={{justifyContent: "space-evenly", display: "flex", gap: "20px", width: "calc(100% - 20px)"}}>
                        <span className="bill-wrap bill-half" style={{marginTop: '10px', paddingRight: 0}}>
                        <label>City *</label>
                            <div className="bl-select-inner">
                            <select name="city" required="" className="bill-select form-select form-select-sm" id="select-city" style={{width: "1px"}}>
                                <option value="" disabled="" selected="">City</option>
                            </select>
                            </div>
                        </span>
                        <span className="bill-wrap bill-half" style={{marginTop: '10px', paddingRight: 0}}>
                            <label>Post Code</label>
                            <div>
                                <input pattern="^\d{5,6}$" placeholder="Post Code" required="" className="form-control" type="text" value="" name="postalCode" />
                                <div className="invalid-feedback">Please Enter 05-06 digit number.</div>
                                </div>
                        </span>
                    </div>
                    
                    <div style={{marginTop: "10px", padding: "15px"}}>
                    <span className="check-order-btn">
                            <button type="submit" className="btn-2">Add</button>
                        </span>
                    </div>
                    
                    </form>
                </div>
        </>
    )
}

export default GuestForm;