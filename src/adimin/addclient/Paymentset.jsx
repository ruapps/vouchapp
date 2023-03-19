import React from "react";

const Paymentset = ({onChangeval, instate})=>{
    return(
        <>
            <div className="payment_set">
                    <div className="py-3 form_sec">
                        <p className="mb-0">Payment Setup</p>
                        <p><span>Set up payments for the client. </span></p>
                    </div> 
                    
                        <div className="row ">
                            <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Billing Address *" onChange={(e)=> onChangeval(e)} value={instate.name} name="add"/>
                            </div>
                           
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-6 mb-3">
                                <select name="selectstate" id="selectstate" className="form-control" onChange={(e)=> onChangeval(e)} value={instate.name}>
                                    <option value="">Select State <span className="text-danger">*</span></option>
                                    <option value="">Option</option>
                                </select>
                            </div>
                            <div className="col-md-6 ps-md-0 d-flex">
                                <select name="selectcity" id="selectstate" className="form-control " onChange={(e)=> onChangeval(e)} value={instate.name}>
                                    <option value="">Select City<span className="text-danger">*</span></option>
                                    <option value="">Option</option>
                                </select>
                                <input type="text" className="form-control w-50 ms-3" placeholder="Pincode *" onChange={(e)=> onChangeval(e)} value={instate.name} />
                            </div>
                        </div>
                        <div className="row pt-3">
                        
                            <div className="col-md-6 mb-3">
                                <select name="selectcat" id="selectcat" className="form-control" onChange={(e)=> onChangeval(e)} value={instate.name}>
                                    <option value="">Select Number of Site Access <span className="text-danger">*</span></option>
                                    <option value="">Option</option>
                                </select>
                            </div>
                            <div className="col-md-6 ps-md-0">
                               <div className="input-group"> 
                                    <span>Rs.</span>
                                    <input type="text" className="form-control w-50 " placeholder="Payable Amount per Site *" onChange={(e)=> onChangeval(e)} value={instate.name} name="amount"/>
                                    <span className="ms-4">Total Rs.</span>
                                    <input type="text" className="form-control " placeholder="00000" onChange={(e)=> onChangeval(e)} value={instate.name} name="total"/>
                               </div>
                            </div>
                           
                        </div>
                        
                        <div className="row pt-3">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Discount (%) *" onChange={(e)=> onChangeval(e)} value={instate.name} name="disc"/>
                            </div>
                            <div className="col-md-6 ps-md-0">
                                <input type="text" className="form-control" placeholder="Reason" onChange={(e)=> onChangeval(e)} value={instate.name} name="reas"/>
                            </div>
                        </div>

                        <div className="row pay_mode mt-4">
                            <div className="col-md-6 mb-3">
                                <p className="mb-2">Payment Mode</p>
                                <div className="d-flex">
                                    <span className="pay_mode1">
                                        <input type="checkbox" id="UPI" onChange={(e)=> onChangeval(e)} value={instate.name} name="upi"/>
                                        <label htmlFor="UPI">UPI</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" id="Banking" onChange={(e)=> onChangeval(e)} value={instate.name} name="bank"/>
                                        <label htmlFor="Banking">Net Banking</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" id="Cash" onChange={(e)=> onChangeval(e)} value={instate.name} name="cash"/>
                                        <label htmlFor="Cash">Cash</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" id="Cheque" onChange={(e)=> onChangeval(e)} value={instate.name} name="cheq"/>
                                        <label htmlFor="Cheque">Cheque</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" id="Other" onChange={(e)=> onChangeval(e)} value={instate.name} name="oth"/>
                                        <label htmlFor="Other">Other</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-2">Payment Status</p>
                                <div className="d-flex">

                                    <span className="pay_mode1">
                                        <input type="radio" id="Paid" name="pay_state" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                                        <label htmlFor="Paid">Paid</label>
                                    </span>
                                    <span>
                                        <input type="radio" id="Pending" name="pay_state" onChange={(e)=> onChangeval(e)} value={instate.name}/>
                                        <label htmlFor="Pending">Pending</label>
                                    </span>
                                    
                                </div>
                            </div>  
                        </div>
                        
            </div>
        </>
    )
}

export default Paymentset;