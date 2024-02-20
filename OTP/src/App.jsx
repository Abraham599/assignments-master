import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import OTP from "./components/OTP";
import Login from "./components/Login";

function App() {

  return (
    <>
      {/* <Profile></Profile> */}
      {/* <BGChanger></BGChanger> */}
      {/* <Para></Para> */}
      {/* <RecoilRoot>
      <GithubProfile></GithubProfile>
      </RecoilRoot> */}
      <Router>
      <Routes>
        <Route path="/" element={<OTP />}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App
