import React from "react"
import Profile from "./components/Profile"
import BGChanger from "./components/BGChanger";
import Para from "./components/Para";
import GithubProfile from "./components/GithubProfile";
import { RecoilRoot } from "recoil";
import OTP from "./components/OTP";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import Login from "./components/login";
import BirthdayCard from "./components/BirthdayCard";
import Card from "./components/Card";
function App() {

  return (
    <>
      {/* <Profile></Profile> */}
      {/* <BGChanger></BGChanger> */}
      {/* <Para></Para> */}
      {/* <RecoilRoot>
      <GithubProfile></GithubProfile>
      </RecoilRoot> */}
      {/* <Router>
      <Routes>
        <Route path="/" element={<OTP />} />
        <Route path="/login" element={<Login></Login>}/>
      </Routes>
    </Router> */}
<RecoilRoot>
    <Router>
      <Routes>
      <Route path="/" element={<BirthdayCard/>}/>
      <Route path="/wishes" element={<Card/>}/>
      </Routes>
    </Router>
    </RecoilRoot>
    </>
  );
}

export default App
