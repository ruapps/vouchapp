import React, { useRef } from "react";
import { Outlet , NavLink } from "react-router-dom";
import { useState } from "react";

const Clientmore = ()=>{
    const [text, setText]= useState(<span>View Clients</span>); 
    const list= useRef();
    
    const changeText= (text)=>{
    const listItems= list.current.children;

        if(text == 'view'){
            setText(()=>{
                return (
                    <span>View Clients</span>
                )
            
            })
            listItems[0].children[0].classList.add('activ');
            listItems[1].children[0].classList.remove('activ');
        }
        else if(text == 'add'){
            setText(()=>{
                return (
                    <>
                        Add Clients &nbsp; 
                    </>
                )
            })
            listItems[0].children[0].classList.remove('activ');
            listItems[1].children[0].classList.add('activ');
        }
    }

    return (
        <>
            <div className="container-fluid view_client mt-4">
                <div className="row">
                <div className="col-md-12 text-center my-3">
                        <h1 className="text-danger">User Page</h1>
                    </div>
                    <div className="col-md-3 view_client_left pt-3">
                        <h1>Company Name</h1>
                        <div className="input-group my-4">
                            <img src="../images/search.png" alt="" srcset="" />
                            <input type="text" className="form-control" placeholder="Search modules"/>
                        </div>
                        <p>CLIENT MASTER</p>
                        
                        <ul className="nav nav-tabs d-flex flex-column"  ref={list}>
                            <li className="nav-item  mb-2">
                                <NavLink className="nav-link activ border-0" to="/vouchapp" onClick={(e)=> changeText('view', e)}>View Clients</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link border-0" to="/vouchapp/addclient" onClick={(e)=> changeText('add', e)}>Add Clients</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9 view_client_right pb-5 pt-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="ps-2">
                                <h2 className="mb-0">View Clients</h2>
                                <p>Client Master&nbsp; / &nbsp; {text}</p>
                            </div> 
                            <img src="../images/bell.png" alt="" className="bell"/>
                        </div>                    
                        <Outlet/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clientmore;