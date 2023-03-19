import React, { useRef} from "react";
import Tabledata from './Tabledata';

const Viewclient= ()=>{

    const actions= useRef();

    const displayBlock=(e)=>{
        const element= e.target;
        element.nextElementSibling.style.display= 'block';
    }

    const displayNone=()=>{
        const targetEle= actions.current.children;
         for(var i = 0; i<targetEle.length; i++){
            const targetchildEle= targetEle[i].children[targetEle[i].children.length - 1].children[1];
                  targetchildEle.style.display= 'none';
        };
     }

    return(
        <>
            <div className="table_content">
                <div className="d-flex search_bar justify-content-between px-4">
                    <div className="input-group my-4">
                        <img src="../vouchapp/images/search.png" alt="" srcset="" />
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <div className="filter w-md-50 justify-content-end align-items-center">
                        <select name="selectrowcol" id="selectrowcol" className="form-control">
                            <option value="Columns">Columns</option>
                            <option value="Row">Row</option>
                        </select>
                        <button type="button" className="btn ms-auto ms-sm-3">Export</button>
                    </div>
                </div>
                <div >
                    <table id="example" className="table "  >
                        <thead >
                        <tr className="border-top ">
                            <th scope="col" className="ps-4">Company Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Contact Person</th>
                            <th scope="col">Facilitator</th>
                            <th scope="col">Sites</th>
                            <th scope="col">Tenants</th>
                            <th scope="col">Tenant Groups</th>
                            <th scope="col" className="pe-4">Actions</th>
                        </tr>
                        </thead>
                        <tbody ref={actions}>

                        {
                            Tabledata.map((elem, ind)=>{
                                const {cname, email, phone, contact, facili, site, tenants, tenantg, action, popup: {detail, edit, block, del}} = elem;
                                return(
                                    <tr key={ind} onClick={()=>{displayNone()}}>
                                        <td scope="row" className="ps-4">{cname}</td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                        <td>{contact}</td>
                                        <td>{facili}</td>
                                        <td>{site}</td>
                                        <td>{tenants}</td>
                                        <td>{tenantg}</td>
                                        <td className="pe-4 text-center position-relative">
                                            <img src={action} alt="" onClick={(e)=>{displayBlock(e)}}/>
                                            <div className="actions" >
                                                <ul className="text-start ps-0 me-4">
                                                    <li className="d-flex align-items-center mb-4">
                                                        <img src={detail.img} alt="view" width={'16px'} height={'10px'} className="me-2"/>
                                                        <span>{detail.text}</span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-4">
                                                        <img src={edit.img} alt="view" width={'14px'} height={'13px'} className="me-2"/>
                                                        <span>{edit.text}</span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-4">
                                                        <img src={block.img} alt="view" width={'14px'} height={'14px'} className="me-2"/>
                                                        <span>{block.text}</span>
                                                    </li>
                                                    <li className="d-flex align-items-center ">
                                                        <img src={del.img} alt="view" width={'13px'} height={'14px'} className="me-2"/>
                                                        <span>{del.text}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                )
                        })
                        }
                      
                        
                       
                        </tbody>
                    </table>
                    <div className="pagination">
                        <ul className="d-flex text-center">
                            <li className="activ">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>...</li>
                            <li>48</li>
                            <li>49</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Viewclient;