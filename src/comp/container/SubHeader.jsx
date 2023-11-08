import styled from 'styled-components';
import {  Link } from "react-router-dom";

function SubHeader() {
    let isLogined = sessionStorage.getItem("isLogined");
    // 이걸로 로그인 or 백은규 로그아웃
    function logout(){
      sessionStorage.setItem("isLogined",false)
    }

    return (
      <div>
      <SubHeaderS>
      {!isLogined ? <FontLink to="/Login">로그인</FontLink>  :
        <div>백은규<FontLink to="/" onClick={logout}>로그아웃</FontLink></div>}
        
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.png" alt="" style={{ width: '40px', height: '40px', marginRight: '14px' }} /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img src="/images/github.png" alt="" style={{ width: '40px', height: '40px', marginRight: '14px' }} /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src="/images/facebook.png" alt="" style={{ width: '40px', height: '40px', marginRight: '16px' }} /></a>
      </SubHeaderS>
      </div>
    );
  }


  export default SubHeader ;

  const SubHeaderS = styled.div`
  display: flex;
  align-items: flex-end ;
  justify-content: flex-end ;
  font-size: 1.7em;
  height: 3vh;
  border-bottom: 3px solid black;
  `
  const FontLink = styled(Link)`
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 10px 15px;
  padding: 4px 12px;
  background: transparent;
  color: rgb(79, 62, 180);
  border: 2px solid rgb(79, 62, 180);
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(79, 62, 180);
    color: white;
  }
`;

const DivS = styled.div`
margin-bottom: 13px;
`