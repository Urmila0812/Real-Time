import React from 'react'
import './Header2.css'
import img6 from "../../Assets/search.png";
import img7 from "../../Assets/notificationimg.png";

const Header2 = () => {
    return (
        <>
            <div className="candidates-header">
                <h2>Candidates</h2>
                <div className="candidates-header-right">
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

export default Header2
