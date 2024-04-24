import React from 'react'
import './header.css'
import img6 from "../../Assets/search.png";
import img7 from "../../Assets/notificationimg.png";


const header = () => {
    return (
        <>
            <div className="job-header">
                <h1>Jobs</h1>
                <div className="job-header-right">
                    <div className="header-button">
                        <input type="text" placeholder="Try Search"/>
                        <img  src={img6}  alt="search-img" />
                    </div>
                    <img  src={img7}  alt="notification-img" />
                    
                </div>
            </div>
        </>
    )
}

export default header
