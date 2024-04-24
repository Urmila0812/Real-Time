import React from "react";
// import img1 from '../../Assets/notificationimg.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartContainer} from '@mui/x-charts/ChartContainer';
import {  BarPlot } from '@mui/x-charts';

  


function Dashboard(){

    
    const englishPercentage = 28;
    const logicalReasoningPercentage = 100;
    const csepPercentage = 65;
    const csapPercentage = 85;

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 4,
        width:200,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: '#e5caca',
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#F96E6F' : '#e5caca',
        },
      }));

      const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
        height: 4,
        width:200,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: '#e5caca',
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#FFAB00' : '#e5caca',
        },
      }));

      const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
        height: 4,
        width:200,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: '#c2d9cc',
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#28C76F' : '#c2d9cc',
        },
      }));

      const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
        height: 4,
        width:200,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: '#a590e0',
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#7947F7' : '#a590e0',
        },
      }));

    return(
        <>
        <section className="dashboard-container">
            <div className="dashboard-heading">
                <h3>Company Admin</h3>
                {/* <img  src={img1}  alt="notification-img" />  */}
            </div>
            <div className="dashboard-main">
                <div className="dashboard-cards">
                    <div  className="dashboard-card">
                        <h4>English</h4>
                        <div className="circle-bar-text">
                            <p>English Course <br/>
                                Progress</p>
                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar value={englishPercentage} text={`${englishPercentage}%`}
                                styles={buildStyles({
                                    textColor: "#F96E6F",
                                    pathColor: "#F96E6F",
                                    trailColor: "#e5caca"
                                })
                            }/>
                            </div>
                        </div>
                        <div className="modules">
                            <p>Modules</p>
                            <div className="prograssbar">
                                <BorderLinearProgress variant="determinate" value={36} />
                                <span>4/12</span>
                            </div>
                        </div> 
                    </div>
                    <div  className="dashboard-card">
                        <h4>Logical Reasoning</h4>
                        <div className="circle-bar-text">
                            <p>Logical Reasoning <br/>
                            Course Progress</p>
                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar value={logicalReasoningPercentage} text={`${logicalReasoningPercentage}%`}
                                styles={buildStyles({
                                    textColor: "#FFAB00",
                                    pathColor: "#FFAB00",
                                    trailColor: "#e5caca"
                                })
                            }/>
                            </div>
                        </div>
                        <div className="modules-logic">
                            <p>Modules</p>
                            <div className="prograssbar">
                                <BorderLinearProgress1 variant="determinate" value={100} />
                                <span>10/10</span>
                            </div>
                        </div> 
                    </div>
                    <div  className="dashboard-card">
                        <h4>CSEP</h4>
                        <div className="circle-bar-text">
                            <p>CSEP Course <br/>
                                Progress</p>
                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar value={csepPercentage} text={`${csepPercentage}%`}
                                styles={buildStyles({
                                    textColor: "#28C76F",
                                    pathColor: "#28C76F",
                                    trailColor: "#c2d9cc"
                                })
                            }/>
                            </div>
                        </div>
                        <div className="modules-csep">
                            <p>Modules</p>
                            <div className="prograssbar">
                                <BorderLinearProgress2 variant="determinate" value={60} />
                                <span>6/10</span>
                            </div>
                        </div> 
                    </div>
                    <div  className="dashboard-card">
                        <h4>English</h4>
                        <div className="circle-bar-text">
                            <p>CSAP Course <br/>
                                Progress</p>
                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar value={csapPercentage} text={`${csapPercentage}%`}
                                styles={buildStyles({
                                    textColor: "#7947F7",
                                    pathColor: "#7947F7",
                                    trailColor: "#a590e0"
                                })
                            }/>
                            </div>
                        </div>
                        <div className="modules-csap">
                            <p>Modules</p>
                            <div className="prograssbar">
                                <BorderLinearProgress3 variant="determinate" value={50} />
                                <span>1/2</span>
                            </div>
                        </div> 
                    </div>

                </div>
            </div>
            <div className="performance-container">
                <div className="performance-cards">
                    <div className="performance-card">
                        <div className="performance-heading">
                            <h5>Students Performance</h5>
                            <div className="performance-heading-right">
                                <span>Monthly</span>
                                <p>Weekly</p>
                            </div>
                        </div>
                
                     <div className="performance-chart">
                        <ChartContainer
                        width={550}
                        height={400}
                        series={[
                            {
                            data: [0, 30, 20, 50, 20, 30, 20, 30, 20, 30, 50, 40],
                            type: 'line',
                            showMark: false,
                            },
                        ]}
                        xAxis={[
                            {
                            scaleType: 'point',
                            data: [
                                'jan',
                                'feb',
                                'mar',
                                'apr',
                                'may',
                                'jun',
                                'july',
                                'aug',
                                'sep',
                                'oct',
                                'nov',
                                'dec',
                            ],
                            },
                        ]}
                        yAxis={[{ scaleType: 'linear', min: 0, max: 100 }]}
                    >
                        <LinePlot />
                        <ChartsXAxis />
                        <ChartsYAxis />
                    </ChartContainer>
                    </div>
                    </div>
                
                    <div className="performance-card">
                        <div className="performance-heading">
                            <h5>Academic Performance</h5>
                            <div className="performance-heading-right">
                                <span>Monthly</span>
                                <p>Weekly</p>
                            </div>
                        </div>
                
                    <div className="performance-chart">
                    <ChartContainer
                        width={550}
                        height={400}
                        series={[
                            {
                            data: [3, 4, 5, 6, 7, 8, 6, 7, 9, 11, 11, 11],
                            type: 'bar',
                            showMark: false,
                            color:['#0557A2']
                            },
                        ]}
                        xAxis={[
                            {
                            scaleType: 'band',
                            data: [
                                'jan',
                                'feb',
                                'mar',
                                'apr',
                                'may',
                                'jun',
                                'july',
                                'aug',
                                'sep',
                                'oct',
                                'nov',
                                'dec',
                            ],
                            categoryGapRatio: 0.8
                            },
                            
                        ]}
                    >
                        <BarPlot />
                        <ChartsXAxis />
                        <ChartsYAxis />
                    </ChartContainer>
                    </div>
                    </div>
                    <div className="performance-card">
                        <div className="performance-heading">
                            <div className="performance-heading-down">
                                <h5>CSEP</h5>
                                <div className="color-id">
                                    <div className="color-text">
                                        <div className="line-yellow"></div>
                                        <p>Design</p>
                                    </div>
                                    <div className="color-text">
                                        <div className="line-blue"></div>
                                        <p>Devlopment</p>
                                    </div>
                                    <div className="color-text">
                                        <div className="line-green"></div>
                                        <p>Testing</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="performance-heading-right">
                                <span>Monthly</span>
                                <p>Weekly</p>
                            </div>
                        </div>
                        <div className="performance-chart">
                        <ChartContainer
                        width={550}
                        height={400}
                        series={[
                            {
                            data: [0, 50, 10, 80, 50, 60, 30, 50, 20, 50, 80, 50],
                            type: 'line',
                            showMark: false,
                            color:'#FFBD35',
                            },
                            {
                            data: [0, 30, 10, 50, 10, 30, 10, 30, 10, 30, 50, 20],
                            type: 'line',
                            showMark: false,
                            color:'#0557A2',
                            },
                            {
                            data: [0, 40, 20, 40, 20, 50, 10, 20, 10, 20, 40, 20],
                            type: 'line',
                            showMark: false,
                            color:'#34B53A',
                            },
                        ]}
                        xAxis={[
                            {
                            scaleType: 'point',
                            data: [
                                'jan',
                                'feb',
                                'mar',
                                'apr',
                                'may',
                                'jun',
                                'july',
                                'aug',
                                'sep',
                                'oct',
                                'nov',
                                'dec',
                            ],
                            },
                        ]}
                        yAxis={[{ scaleType: 'linear', min: 0, max: 100 }]}
                    >
                        <LinePlot />
                        <ChartsXAxis />
                        <ChartsYAxis />
                    </ChartContainer>
                    </div>
                    </div>
                    <div className="performance-card">
                        <div className="performance-heading">
                            <div className="performance-heading-down">
                                <h5>CSAP</h5>
                                <div className="color-id">
                                    <div className="color-text">
                                        <div className="line-green"></div>
                                        <p>GRE</p>
                                    </div>
                                    <div className="color-text">
                                        <div className="line-blue"></div>
                                        <p>TOFEL</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="performance-heading-right">
                                <span>Monthly</span>
                                <p>Weekly</p>
                            </div>
                        </div>
                        <div className="performance-chart">
                        <ChartContainer
                        width={550}
                        height={400}
                        series={[
                            {
                                data: [0, 40, 20, 40, 20, 60, 10, 20, 10, 20, 40, 20],
                            type: 'line',
                            showMark: false,
                            color:'#34B53A',
                            },
                            {
                            data: [0, 30, 10, 50, 10, 30, 10, 30, 10, 30, 50, 20],
                            type: 'line',
                            showMark: false,
                            color:'#0557A2',
                            },
                        ]}
                        xAxis={[
                            {
                            scaleType: 'point',
                            data: [
                                'jan',
                                'feb',
                                'mar',
                                'apr',
                                'may',
                                'jun',
                                'july',
                                'aug',
                                'sep',
                                'oct',
                                'nov',
                                'dec',
                            ],
                            },
                        ]}
                        yAxis={[{ scaleType: 'linear', min: 0, max: 100 }]}
                    >
                        <LinePlot />
                        <ChartsXAxis />
                        <ChartsYAxis />
                    </ChartContainer>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Dashboard;