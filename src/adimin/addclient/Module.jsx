import React from "react";

const Module= ({onChangeval, instate})=>{
    
    return(
        <>
            <div>
                    <div className="ps-3 py-3 form_sec">
                        <p className="mb-0">Module Setup</p>
                        <p><span>Add some basic information related to the client.</span></p>
                    </div> 
                 
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Compnay Name *" name="comp" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                            </div>
                            <div className="col-md-6 ps-md-0">
                                <input type="text" className="form-control" placeholder="Website" name="web" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                            </div>
                        </div>
                        <div className="row pt-3">
                        
                            <div className="col-md-6 mb-3">
                                <select name="selectcat" id="selectcat" className="form-control" value={instate.name} onChange={(e)=> onChangeval(e)} >
                                    <option value="">Select Business Category  <span className="text-danger">*</span></option>
                                    <option value="">Option</option>
                                </select>
                            </div>
                            <div className="col-md-6 ps-md-0">
                                <select name="selectcom" id="selectcom" className="form-control" value={instate.name} onChange={(e)=> onChangeval(e)} >
                                    <option value="">Select Facility Management Company<span className="text-danger">*</span></option>
                                    <option value="">Option</option>
                                </select>
                            </div>
                           
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-6 mb-3">
                                <input type="email" className="form-control" placeholder="Company Email Address *" name="email" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                            </div>
                            <div className="col-md-6 ps-md-0">
                                <input type="text" className="form-control" placeholder="Mobile Number *" name="mob" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                            </div>
                           
                        </div> 
                        <div className="row pt-3">
                            <div className="col-md-6 mb-3">
                                <select name="selectstate" id="selectstate" className="form-control" value={instate.name} onChange={(e)=> onChangeval(e)}>
                                    <option value="">Select State <span className="text-danger">*</span></option>
                                    <option value="">Option</option>
                                </select>
                            </div>
                            <div className="col-md-6 ps-md-0 d-flex">
                                <select name="selectcity" id="selectstate" className="form-control" value={instate.name} onChange={(e)=> onChangeval(e)} >
                                    <option value="">Select City<span className="text-danger">*</span></option>
                                    <option value="">Option</option>
                                </select>
                                <input type="text" className="form-control w-50 ms-3" placeholder="Pincode *" name="pin" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="GST Number *" name="gst" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                            </div>
                            <div className="col-md-6 ps-md-0">
                                <input type="text" className="form-control" placeholder="Fax Number" name="fax" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                            </div>
                        </div>
                       
                </div>
        </>
    )
}

export default Module;