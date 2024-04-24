import React,{useState} from "react";
import "./Job.css"
import img1 from "../../Assets/jobimg1.png";
import img2 from "../../Assets/jobimg2.png";
import img3 from "../../Assets/jobimg3.png";
import img4 from "../../Assets/jobimg4.png";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AllJobs from "../../Components/allJobs/allJobs";
import Header from "../../Components/Header/header";
import { useNavigate } from "react-router-dom";

function Job(){
    const navigate = useNavigate();
    const [value, setValue] = useState('activeJobs');
    const handleChange = () => {
        value === 'activeJobs' ? setValue('allJobs'): setValue('activeJobs');
      };

      const handleClick =()=>{
        navigate("/Jobcreation");
      }
    return(
        <>
           {/* <Header/> */}
       
        <section className="job-container">
            <div className="job-header-main">
                <Header/>
            </div>
            <div className="job-container-main">
            <TabContext value={value}>
            <div className="container-top">
                <div className="container-top-left">
               
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Active Jobs" value="activeJobs" />
                        <Tab label="All Jobs" value="allJobs" />
                        </TabList>
                    </Box>
                    
                    {/* <h6 className="active">Active Jobs</h6>
                    <h6>All Jobs</h6> */}
                </div>
                <div className="container-top-right">
                    <p className="all">All</p>
                    <p className="span">Design</p>
                    <p className="span">Development</p>
                    <p className="span">Testing</p>
                    { value === 'activeJobs' ? (<button onClick={handleClick}>Create Job</button>) : ''}
                    
                    
                </div>

            </div>
            <TabPanel value="activeJobs">
            <div className="conatiner">
                <div className="jobs">
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                    <div className="job">
                        <h2>UI Designer</h2>
                        <p>Madhapur • Hyderabad, Telangana • 2 days ago</p>
                        <div className="card-info">
                            <div className="info">
                                <div className="info-card">
                                    <img  src={img1}  alt="job-img" /> 
                                    <span>$800 - $1,000</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img2}  alt="job-img" />
                                    <span> Full Time</span>
                                </div>
                                
                            </div>
                            <div className="info-b">
                                <div className="info-card">
                                    <img  src={img3}  alt="job-img" /> 
                                    <span>Day Shift</span> 
                                </div>
                                <div className="info-card">
                                    <img  src={img4}  alt="job-img" />
                                    <span> 5 Openings</span>
                                </div>
                            </div>
                        </div>
                        <p>As a design team that is responsible for <br/>delivering final design for our end-users, you<br/> will be assigned to a team...</p>
                        <div className="buttons">
                            <button className="button-one" onClick={handleClick}>Edit</button>
                            <button className="button-two">Deactivate</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </TabPanel>
            <TabPanel value="allJobs">
            <div className="container-bottom">
                <AllJobs></AllJobs>
            </div>
            </TabPanel>
            </TabContext>
            </div>
    </section>


        </>
    )
}

export default Job;