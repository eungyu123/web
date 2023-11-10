import Header from "./comp/container/Header"
import SubHeader from "./comp/container/SubHeader"
import Main from "./comp/container/Main"
import Footer from "./comp/container/Footer"
import About from "./comp/contents/About"
import Skills from "./comp/contents/Skills"
import Project from "./comp/contents/Project"
import Goal from "./comp/contents/Goal"
import QnA from "./comp/contents/QnA"
import Login from "./comp/login/Login"
import Regist from "./comp/login/Regist"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import React from 'react';

import './App.css'

function App(){

  return(
    <Router>
      <DivS> 
      <Header/>
      <SubHeader/>
      <Routes>
      <Route path="/" element={<Main page={<About/>}/>}/>
      <Route path="/Skills" element={<Main page={<Skills/>}/>}/>
      <Route path="/Project" element={<Main page={<Project/>}/>}/>
      <Route path="/Goal" element={<Main page={<Goal/>}/>}/>
      <Route path="/QnA" element={<Main page={<QnA/>}/>}/>
      <Route path="/Login" element={<Main page={<Login/>}/>}/>
      <Route path="/Regist" element={<Main page={<Regist/>}/>}/>
      </Routes>
      <Footer/>
      </DivS>
    </Router>
  )
}

export default App;

const DivS = styled.div`
background-color: white;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
margin: 0 auto;
overflow: auto;
overflow-x: auto;

}
`

