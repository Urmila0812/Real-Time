import React from 'react'
import img1 from '../../Assets/notificationimg.png';
import './Jobcreation.css'
import img2 from '../../Assets/backarrow.png';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from "react-router-dom";



const Jobcreation = () => {

    const [workingHours, setworkingHours] = React.useState('');
    
  const handleChange = (event) => {
    setworkingHours(event.target.value);
   
    
  };

  const [selectCTA, setselectCTA] = React.useState('');
  const handleChangeCTA=(event)=>{
    setselectCTA(event.target.value);
  }

  const [selectOpenings, setselectOpenings] = React.useState('');
  const handleChangeOpenings = (event)=>{
    setselectOpenings(event.target.value);
  }
  const [address, setAddress] = React.useState('');
  const handleChangeAddress = (event)=>{
    setAddress(event.target.value);
  }
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate("/Jobs");
  }

    return (
        <>
            <section className="jobcreation-container">
                <div className="container-top">
                    <div className="top-text">
                    <img  src={img2}  alt="backarrow-img" onClick={handleClick}/>
                        <h6>Jobs</h6>
                    </div>
                    <img  src={img1}  alt="notification-img" />
                </div>
                <div className="container-bottom">
                        <div className="heading">
                        <h3>Job Creation</h3>
                        </div>
                   <div className="container-bottom-text">
                        <div className="job-title">
                            <div className="job-title-left">
                                <h4>Job title</h4>
                                <p>A job title must describe one position only</p>
                            </div>
                            <textarea name="postcontent" placeholder="Enter job title here" id="textarea-job-title"/> 
                        </div>
                        <div className="job-title">
                            <div className="job-title-left">
                                <h4>Job Descritption</h4>
                                <p>Provide a short description about the job. Keep it short 
                                    and to the point</p>
                            </div>
                            <textarea name="postcontent" placeholder="Enter the job description" id="textarea-job-description"/>  
                        </div>
                        <div className="job-title">
                            <div className="job-title-left">
                                <h4>Job Requirements</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <textarea name="postcontent" placeholder="Enter your requirements" id="textarea"/> 
                        </div>
                        <div className="job-title">
                            <div className="job-title-left">
                                <h4>Employement Type</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="employement-type" >  
                                <div className="radio-type">
                                    <input type="checkbox"/>
                                    <p>Full-time</p>
                                </div>
                                <div className="radio-type">
                                    <input type="checkbox"/>
                                    <p>Part-timne</p>
                                </div>
                                
                                <div className="radio-type">
                                    <input type="checkbox"/>
                                    <p>Internship</p>
                                </div>
                                <div className="radio-type">
                                    <input type="checkbox"/>
                                    <p>Freelancer</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="job-title">
                            <div className="job-title-left">
                                <h4>Working shedule</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <Box sx={{ minWidth: 410 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Workinghours</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={workingHours}
                                    label="workingHours"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={7-2}>7am-2pm</MenuItem>
                                    <MenuItem value={9-6}>9am-6pm</MenuItem>
                                    <MenuItem value={10-6}>10am-6pm</MenuItem>
                                    <MenuItem value={10-6}>10am-6pm</MenuItem>
                                    <MenuItem value={1-8}>1pm-8pm</MenuItem>
                                    <MenuItem value={8-1}>8pm-1pm</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="job-title">
                            <div className="job-title-left">
                                <h4>Salary</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <Box sx={{ minWidth: 410 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select salary range in CTA</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectCTA}
                                    label="selectCTA"
                                    onChange={handleChangeCTA}
                                    >
                                    <MenuItem value={1-2}>1-2 CTA</MenuItem>
                                    <MenuItem value={2-3}>2-3 CTA</MenuItem>
                                    <MenuItem value={3-4}>3-4 CTA</MenuItem>
                                    <MenuItem value={4-5}>4-5 CTA</MenuItem>
                                    <MenuItem value={5-6}>5-6 CTA</MenuItem>
                                    <MenuItem value={6-7}>6-7 CTA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="job-title">
                            <div className="job-title-left">
                                <h4>Hiring multiple candidates</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <Box sx={{ minWidth: 410 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select number of openings</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectOpenings}
                                    label="selectOpenings"
                                    onChange={handleChangeOpenings}
                                    >
                                    <MenuItem value={1}>1 Opening</MenuItem>
                                    <MenuItem value={2}>2 Openings</MenuItem>
                                    <MenuItem value={3}>3 Openings</MenuItem>
                                    <MenuItem value={4}>4 Openings</MenuItem>
                                    <MenuItem value={5}>5 Openings</MenuItem>
                                    
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        < div className="job-title">
                            <div className="job-title-left">
                                <h4>Interview type</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                                <FormControl>
                                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Onsite"
                                        name="radio-buttons-group"
                                        value={address}
                                        onChange={handleChangeAddress}
                                    >
                                        <FormControlLabel value="onSite" control={<Radio />} label="Onsite" />
                                        <FormControlLabel value="onLine" control={<Radio />} label="Online" />
                                        <FormControlLabel value="phoneCall" control={<Radio />} label="Phonecall" />
                                    </RadioGroup>
                                </FormControl>
                            
                        </div>
                        {address === 'onSite' && 
                            <div className="address-container">
                            <div className="address">
                                <div className="address-line">
                                    <h4>Address Line</h4>
                                    <input type="email" placeholder="linda@framecreative.com" id="address-placeholder"/>
                                </div>
                                <div className="address-line">
                                    <h4>City</h4>
                                    <input type="email" placeholder="linda@framecreative.com" id="address-placeholder"/>
                                </div>
                                <div className="address-line">
                                    <h4>District</h4>
                                    <input type="email" placeholder="linda@framecreative.com" id="address-placeholder"/>
                                </div>
                                <div className="address-line">
                                    <h4>State</h4>
                                    <input type="text" placeholder="20Apr2024" id="address-placeholder"/>
                                </div>
                                <div className="address-line">
                                    <h4>Pincode</h4>
                                    <input type="text" placeholder="linda@framecreative.com" id="address-placeholder"/>
                                </div>
                                <div className="address-line">
                                    <h4>Country</h4>
                                    <input type="text" placeholder="WWW.Creative.com" id="address-placeholder"/>
                                </div>
                            </div>
                        </div>
                        }
                        {address === 'onLine' &&
                            <div className="skill-container">
                                <div className="job-title">
                                    <div className="job-title-left">
                                        <h4>Skils & Experience</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="skill-right">
                                        <input type="text" placeholder="Add skill" id="skill-placeholder"/>
                                        <h6>+Add</h6>
                                    </div> 
                                </div>
                                <div className="skill-button-main">
                                    <button className="skill-button" onClick={handleClick}>Submit</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Jobcreation
