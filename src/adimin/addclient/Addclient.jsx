import React, { useState,useRef, useEffect } from "react";
import Createpro from "./Createpro";
import Paymentset from  "./Paymentset";
import Module from  "./Module";
import Theme from  "./Theme";
import Infoadded from "./Infoadded";

const Addclient= ()=>{
    const [count, setcount]= useState(0);
    const [instate, setinstate]= useState({
        name: ''
    });

    const onChangeval=(event)=>{
        const {name, value}= event.target;
        setinstate(()=>{
            return { [name]: value }
        })
    }

    const content = [
            <Createpro onChangeval={onChangeval} instate= {instate}/>, 
            <Paymentset onChangeval={onChangeval} instate= {instate}/>, 
            <Theme onChangeval={onChangeval} instate= {instate}/>, 
            <Module onChangeval={onChangeval} instate= {instate}/>, 
            <Infoadded onChangeval={onChangeval} instate= {instate}/>
        ];

    
    const formSecHead = useRef(); 

    const changeFields=(e)=>{
        e.preventDefault(); 
        setcount(count + 1);
        console.log(count);
        let listArr= formSecHead.current.children;
        const imgEle=  document.createElement('img')
        imgEle.src= '../vouchapp/images/right.png';
        const textNode= listArr[count].childNodes[0];
        listArr[count].insertBefore(imgEle, textNode);
        listArr[count].style.color="#030037";

    }


    return(
        <>
            <div className="table_content creat_pro pb-4">
                <div className="d-flex search_bar ">
                    <ul className="navbar w-100 " ref={formSecHead}>
                        <li className={count === 0 ? "nav-item py-4 activ px-md-5" : "nav-item py-4  px-md-5"} >
                            01 CREATE PROFILE
                        </li>
                        <li className={count === 1 ? "nav-item py-4 activ px-md-5" : "nav-item py-4  px-md-5"}  > 
                            02 PAYMENT SETUP
                        </li>
                        <li className={count === 2 ? "nav-item py-4 activ px-md-5" : "nav-item py-4  px-md-5"} > 
                            03 THEME SETUP
                        </li>
                        <li className={count === 3 ? "nav-item py-4 activ px-md-5" : "nav-item py-4  px-md-5"} > 
                            04 MODULES SETUP
                        </li>
                    </ul>
                </div>
                <form action="" className="w-100 px-4 ">
                {content[count]}
                    <div className="d-flex align-items-center mt-4">
                        <button type="submit" className="btn" onClick={(e)=>changeFields(e)}>Save & Continue</button>
                        <span className="reset_form ps-4 ms-5" >
                            Reset
                        </span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addclient;