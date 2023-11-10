import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
    return (
      <HeaderS> 
               <Link to={"/"}><img src="/images/title.png" alt="" style={{ width: '300px', height: '150px' }} /></Link>
      </HeaderS>
    );
  }

  export default Header ;

  const HeaderS = styled.div`
  min-width:1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7em;
 
  padding: 20px;
  margin-top: 20px
  height:15vh;
  min-hegiht:120px;
  `

