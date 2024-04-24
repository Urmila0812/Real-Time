import React from 'react'
import './Profile.css';
import img1 from '../../Assets/backarrow.png';
import img2 from '../../Assets/notificationimg.png';
import img3 from '../../Assets/companydetailsimg.png';
import img4 from '../../Assets/detailstop.png';
import img5 from '../../Assets/details.png';
import { useNavigate } from "react-router-dom";


const Profile = () => {
   
    const navigate = useNavigate();
    const handleChange =()=>{
        navigate("/Home");
      }
    return (
        <>
           <section className="profile-container">
                <div className="profile-header">
                    <div className="profile-header-left">
                        <img src={img1} onClick={handleChange} alt="arrow-img"/>
                        <h2>Profile</h2>
                    </div>
                    <div className="profile-header-right">
                            <img  src={img2}  alt="notification-img" />
                    </div>
                </div>
                <div className="profile-bottom">
                    <div className="profile-bottom-left">
                        <div className="image-text">
                            <img src={img3} alt="profileimg"/>
                            <p>Upload your image</p>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <p>adipiscing elit. </p>
                        </div>
                        <div className="details-text">
                            <div className="details-line">
                                <div className="circle-text">
                                    <img src ={img4} alt="circleimg"/>
                                    <div className="text-basic">
                                        <h6>Basic Details</h6>
                                        <p>Lorem consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="side-line"></div>
                                <div className="circle-text">
                                    <img src ={img5} alt="circleimg"/>
                                    <div className="text-basic">
                                        <h6>Contact Details</h6>
                                        <p>Lorem consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="side-line"></div>
                                <div className="circle-text">
                                    <img src ={img5} alt="circleimg"/>
                                    <div className="text-basic">
                                        <h6>Company Details</h6>
                                        <p>Lorem consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>

                    </div>
                    <div className="line"></div>
                    <div className="profile-bottom-right">
                        <div className="profile-bottom-right-down">
                        <div className="right-heading">
                            <h4>Company Details</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
                        </div>
                        <div className="companydetails-boxs">
                            <div className="companydetails-box">
                                <h6>Company Details</h6>
                                <div className="box">Tata</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Establish Year</p>
                                <div className="box">2019</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Founder Name</p>
                                <div className="box">Ramana</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Number of  Employees </p>
                                <div className="box">200</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Annual Income</p>
                                <div className="box">2000000</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Departments</p>
                                <div className="box">3</div>
                            </div>
                        </div>
                        <div className="right-heading">
                            <h4>Basic Details</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
                        </div>
                        <div className="companydetails-boxs">
                            <div className="companydetails-box">
                                <p>Mobile Number</p>
                                <div className="box">9988776661</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Email Id</p>
                                <div className="box">ramana@gmail.com</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Website</p>
                                <div className="box">linda@framcreative.com</div>
                            </div>
                            <div className="companydetails-box">
                                <p>LinkedIn Profile </p>
                                <div className="box">https://www.linkedin.com/pulse/easy-</div>
                            </div>
                         </div>
                         <div className="right-heading">
                            <h4>Contact Details</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
                        </div>
                        <div className="companydetails-boxs">
                            <div className="companydetails-box">
                                <p>Address Line</p>
                                <div className="box">2326 Smithfield Avenue</div>
                            </div>
                            <div className="companydetails-box">
                                <p>State</p>
                                <div className="box">Texas</div>
                            </div>
                            <div className="companydetails-box">
                                <p>City</p>
                                <div className="box">Lubbock</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Pincode </p>
                                <div className="box">79401</div>
                            </div>
                            <div className="companydetails-box">
                                <p>District </p>
                                <div className="box">Gleneden</div>
                            </div>
                            <div className="companydetails-box">
                                <p>Country </p>
                                <div className="box">United States</div>
                            </div>
                         </div>
                        </div>
                        <div className="button">
                            <button className="save" onClick={handleChange} >Save</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Profile;
