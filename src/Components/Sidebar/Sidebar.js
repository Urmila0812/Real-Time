import React from 'react';
import { Outlet, Link } from "react-router-dom";
import img1 from "../../Assets/Group.png";
import img2 from "../../Assets/sidebarhome.png";
import img3 from "../../Assets/dashboard.png";
import img4 from "../../Assets/candidate.png";
import img5 from "../../Assets/job.png";
import './Sidebar.css'
import { FaShoppingBag } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";



import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
        <section className="sidebar-container">
            <NavLink to="/" className="side_logo" >
                        <img  src={img1}  alt="slider1" /></NavLink>
            <div className="line"></div>
                        
            <div className="sidebar-links">
                <div className="sidebar-link" id="home-logo">
                <NavLink to="/Home" className="side_link" style={{textDecoration:"none" , color:'#7D8FB3'}} >
                        <img  src={img2}  alt="slider2" /> 
                        <p>Katie Pena</p>
                        </NavLink>
                </div>
                <div className="sidebar-link">
                <NavLink to="/Dashboard" className="side_link"  style={{
                    textDecoration:"none" , 
                    color: "#7D8FB3"}} >
<RxDashboard />
                        <p>Dashboard</p>
                        </NavLink>
                </div>
                <div className="sidebar-link">
                <NavLink to="/Candidates" className="side_link"  style={{textDecoration:"none" , color:"#7D8FB3"}} >
                <FaGraduationCap />
                        <p>Candidates</p>
                        </NavLink> 
                </div>
                <div className="sidebar-link">
                <NavLink to="/Jobs" className="side_link"  style={{textDecoration:"none" , color:"#7D8FB3"}} >
                <FaShoppingBag />
                        <p>Jobs</p>
                        </NavLink>     
                </div>

            </div>
                        
        </section>
        {/* <nav className="sidebar-container">
            <div className="side_menu">
                <ul className="side_list">
                    <li className="side_item">
                        <Link to="/" className="side_link">
                        <img  src={img1}  alt="slider1" />
                        </Link>
                    </li>
                    <li className="side_item">
                        <Link to="/Home" className="side_link">
                        <img  src={img2}  alt="slider2" /> Katie Pena</Link>
                    </li>
                    <li className="side_item">
                        <Link to="/src/Pages/Dashboard" className="side_link">
                        <img  src={img3}  alt="slider2" /> Dashboard</Link>
                    </li> 
                    <li className="side_item">
                        <Link to="/Candidates" className="side_link"><img  src={img4}  alt="slider4" />Candidates</Link>
                    </li>
                    <li className="side_item">
                        <Link to="/Jobs" className="side_link"><img  src={img5}  alt="slider5" />Job</Link>
                    </li>
                </ul>
            </div> 
        
           
        </nav> */}
        <Outlet />
        </>
    )
}

export default Sidebar
