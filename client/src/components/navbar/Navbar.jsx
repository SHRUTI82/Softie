import React, { useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";
const Navbar=() =>{

  const [totop,settotop]=useState(false);

  window.onscroll=()=>{
    settotop(window.pageYOffset===0? false:true);
    return ()=> (window.onscroll=null);
  };
  return (
    <div className ={totop? "navbar totop" : "navbar"}>
    <div className="container">
        <div className='left'>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
       
       <Link to="/" className="link">
       <span>HomePage</span>
       </Link>
       <Link to="/series" className="link">
        <span>Series</span>
       </Link>

       <Link to = "/movies" className="link">
        <span>Movies</span>
       </Link>

       <span>New and popular</span>
       <span>My-list</span>
        </div>
        <div className='right'>
             <SearchIcon className="mui"/>
             {/* <span>Children</span> */}
             {/* <CircleNotificationsIcon  className="mui"/> */}
             <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" />

            
             <div className="profileLogo">
             <ArrowDropDownIcon  className="mui"/>
             <div className="dropdown">

              {/* <span>Profile</span> */}
              {/* <span>Account</span> */}
              {/* <span>Settings</span> */}
              <span>Logout</span>
             </div>
             </div >
            
        </div>
       

    </div>
    </div>
  )
}

export default Navbar