import React from "react";

const Createpro= ({onChangeval, instate})=>{
    
    return(
        <>
            <div>
                    <div className=" py-3 form_sec">
                        <p className="mb-0">Create Client Profile</p>
                        <p><span>Add some basic information related to the client.</span></p>
                    </div> 
                    <div className="ps-3 upload d-flex align-items-center">
                        <div className="upload_file">
                            <input type="file" name="file" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                        </div>
                        <div className="file_desc ps-3">
                            <p className="mb-0">Company Logo</p>
                            <p><span>Logo ratio shoud be 1:1 and should be 120px X 120 px</span></p>
                        </div>
                    </div>
                        <div className="row pt-3">
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

export default Createpro;