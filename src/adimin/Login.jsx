import React from "react";
import axios from 'axios';
import { useState } from "react";

const Login = () =>{

        const [view, setView] = useState('text');

        const getapi = (e)=>{
            e.preventDefault();
                async function getData() {
                const response= await axios.get('https://reqres.in/api/login');
                console.log(response);
                    if(response.status == 200){
                        alert(`success ${response.data.data[0].name}`)
                    }
                    else{
                        alert('error')
                    }
                }
                getData();        
            }

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 text-center my-3">
                        <h1 className="text-danger">Login Page</h1>
                    </div>
                    <div className="col-md-5 left_sec text-center">
                        <div className="left_sec_head">
                            <img src="https://www.figma.com/file/jrKBYv8gI4ta9Gza2rPC9f?node-id=1:18562#277507700" alt="" srcset="" />
                            <h1>Welcome</h1>
                            <p>Enter your Username and Passoword.</p>
                        </div>
                        <div className="left_sec_foot align-items-center">
                            <form action="" >
                                <div className="input-group mt-3">
                                    <img src="../vouchapp/images/vector.png" alt="" />
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="input-group mt-3">
                                    <img src="../vouchapp/images/lock.png" alt="" />
                                    <input type={view} className="form-control ms-1 me-1" placeholder="Password"/>
                                    {view == 'text'? <img src= '../vouchapp/images/vie.png' alt="" onClick={()=> setView('password')}/>
                                    :<img src= '../vouchapp/images/icons8-hide-19.png' alt="" onClick={()=> setView('text')}/>}
                                </div>
                                <button type="submit" className="btn w-100 mt-3 mb-2" onClick={(e)=> getapi(e)}>Login</button>
                                <span>Forgot Password?</span>
                            </form>
                            <div className="copy_right mt-auto">
                                <span className="me-3">Terms of Use</span>
                                <span>Privacy Policy</span>
                                <p className="mt-1">© Punctualiti 2022. All rights reserved</p>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-7 right_sec">
                        <div className="text-center position-relative mt-5">
                            <img src="../vouchapp/images/Rectangle 268.png" alt="" />
                            <img src="../vouchapp/images/Rectangle 269.png" alt="" className="position-absolute"/>
                        </div>
                        <div className="right_sec_foot text-center my-auto">
                            <p className="mb-0">360° Solution for Asset Management</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   

export default Login;