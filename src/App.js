
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Careerpedia from './Pages/Careerpedia/Careerpedia';
import Home from './Pages/Home/Home';
import Candidates from './Pages/Candidates/Candidate';
import SideBar from './Components/Sidebar/Sidebar';
import Job from './Pages/Job/Job';
import Jobcreation from './Pages/Jobcreation/Jobcreation';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<Careerpedia />} />
            <Route path="Home" element={< Home/>} />
            <Route path="Dashboard" element={<Dashboard/>} />
            <Route path="Candidates" element={<Candidates />} />
            <Route path="Jobs" element={<Job />} />
            <Route path="Jobcreation" element={<Jobcreation />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
