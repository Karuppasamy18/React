import React from "react";
import { logout, selectUser } from "../option/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css"
const Logout=()=>{
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout());
    };
   
    


    return(
        <div>
            <h1>
                Welcome{user.name}
            </h1>
<button className="logout_button" onClick={(e)=>handleLogout(e)}>Logout</button>  

          
        </div>
    )
}
export default Logout