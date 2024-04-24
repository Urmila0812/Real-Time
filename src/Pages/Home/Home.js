import React from "react";
import './Home.css';
import img1 from "../../Assets/backarrow.png";
import img2 from "../../Assets/notificationimg.png";
import img3 from "../../Assets/edit.png";
import img4 from "../../Assets/companydetailsimg.png";
import { useNavigate } from "react-router-dom";


function Home(){

    const navigate = useNavigate();
    const handleClick =()=>{
        navigate("/Profile");
      }
      const handleChange =()=>{
        navigate("/Dashboard");
      }
    return(
        <>
        <section className="company-container">
            <div className="companyprofile-header">
                <div className="companyprofile-header-left">
                    <img src={img1} onClick={handleChange} alt="arrow-img"/>
                    <h2>Company Profile</h2>
                 </div>
                <div className="companyprofile-header-right">
                        <img  src={img2}  alt="notification-img" />
                </div>
            </div>
            <div className="companyprofile-bottom">
                <div className="companydetails">
                    <div className="companydetails-text">
                        <h2>Company Details</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
                    </div>
                    <img src={img3}  onClick={handleClick} alt="edit-image"/>
                </div>
                <div className="companydetails-text-down">
                    <div className="companydetails-text-down-left">
                        <img src={img4} alt="details-img"/>
                        <div className="img-text">
                            <h6>Company Name       :   <span>  Tata</span></h6>
                            <h6>Founder Name       :   <span>  Ramana</span></h6>
                            <h6>Establish Year     :   <span>  2019</span></h6>
                        </div>
                    </div>
                    <div className="companydetails-text-down-right">
                            <h6>Departments        :   <span>  3</span></h6>
                            <h6>Annual Income      :   <span>  Tata</span></h6>
                            <h6>Number Of <br/>
                                Employees          :   <span>  200</span></h6>
                    </div>
                </div>
                <div className="companydetails">
                    <div className="companydetails-text">
                        <h2>Basic Details</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
                    </div>
                </div>
                <div className="companydetails-text-down">
                    <div className="companydetails-text-down-left">
                        <div className="img-text">
                            <h6>Mobile Number       :   <span>  9988776661</span></h6>
                            <h6>Website             :   <span>WWW.loremipsum.com</span></h6>
                            
                        </div>
                    </div>
                    <div className="companydetails-text-down-right">
                            <h6>Email Id            :   <span>  ramana@gmail.com</span></h6>
                            <h6>LinkedIn Profile    :   <span>  https://www.linkedin.com/pulse/<br/>easy-share-link-generator-social-media<br/>-networks-raul-colon/</span></h6>
                    </div>
                </div>
                <div className="companydetails">
                    <div className="companydetails-text">
                        <h2>Contact Details</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
                    </div>
                </div>
                <div className="companydetails-text-down">
                    <div className="companydetails-text-down-left">
                        <div className="img-text">
                            <h6>Address line       :   <span>  2326 Smithfield Avenue</span></h6>
                            <h6>City               :   <span>Lubbock</span></h6>
                            <h6>District           :   <span>Gleneden</span></h6>
                            
                        </div>
                    </div>
                    <div className="companydetails-text-down-right">
                            <h6>State           :   <span> Texas</span></h6>
                            <h6>Pincode         :   <span>  79401</span></h6>
                            <h6>Country         :   <span>  United States</span></h6>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;