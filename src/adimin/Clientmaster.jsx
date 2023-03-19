import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Clientmore from "./Clientmore"
import Viewclient from "./Viewclient";
import Addclient from "./addclient/Addclient";
import Createpro from "./addclient/Createpro";

const Clientmaster=()=>{

    const [instate, setinstate]= useState();

    const setval=(event)=>{
        const [name, value]= event.target;
        setinstate((prevVal)=>{
            return { ...prevVal, [name]: value }
        })
    }
    console.log(instate);

    return (
            <>
            <Routes>
                <Route element={<Clientmore />}>

                    <Route exact path="/vouchapp" element={<Viewclient />}/>
                    <Route path="/vouchapp/addclient" element={<Addclient  />}/>

                </Route>    
            </Routes> 
            </> 
    )                
}

export default Clientmaster;