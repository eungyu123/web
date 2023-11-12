import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import menu from "./menu";
import { Link, useNavigate } from "react-router-dom";

function Main({ page }) {

  const navigate = useNavigate();
  const [activeB, setActiveB] = useState(0);
  const [fadein, setFadeIn] = useState(0);

  useEffect(() => {
    // 페이지 주소가 변경될 때마다 실행됨
    if (window.location.pathname === '/') {
      setActiveB(0);
      setFadeIn(0);
    } else if (window.location.pathname === '/Skills') {
      setActiveB(1);
      setFadeIn(1);
    } else if (window.location.pathname === '/Project') {
      setActiveB(2);
      setFadeIn(2);
    } else if (window.location.pathname === '/Goal') {
      setActiveB(3);
      setFadeIn(3);
    }else if (window.location.pathname === '/QnA') {
      setActiveB(4);
      setFadeIn(4);
    }
  }, [navigate]); 
  return (
    <MainS>
      <NavS>
      {menu.map((content, id) => (
        <Link to={content.pagelink}>
          <NavButton
          key = {id}
          className={`${activeB === id ? "active" : ""} ${fadein === id ? "fadeIn" : ""}`} >
                  {content.title}
          </NavButton>
        </Link>
      ))}
      </NavS>

      <ContentS>
        {page}
      </ContentS>
    </MainS>
  );
}


export default Main;

const MainS = styled.div`
flex: 1;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
min-width:1600 px;
`

const NavS = styled.div`

  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  order: -1;
  align-items: flex-end; 
  border-right: 3px solid black;`

const NavButton = styled.button`
  font-weight:700;
  margin-left:160px;
  margin-top:20px;
  margin-bottom:20px; 
  margin-right:15px;
  border: none;
  background-color: white;
  color: black;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: none;
  transition: text-decoration 0.3s ease;

  @media (min-width: 1800px) {
    margin-left:250px;
    margin-top:20px;
    margin-bottom:20px; 
    margin-right:15px;
  }
  
  &.active{
    text-decoration: underline;
    text-decoration-thickness: 6px;
    text-underline-offset: 8px;
    text-decoration-color: rgb(79, 62, 180); }
  &:hover{
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
    text-decoration-color: orange; 
    cursor: pointer;
    
  }`
  
  const ContentS = styled.div`
  min-width:1000 px; 
  display: flex;
  flex: 1 1 60%;
  justify-content: baseline;
  align-items: baseline;
  flex-direction: column;
  `