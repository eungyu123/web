import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
    return (
      <div>
      <HeaderS> 
               <Link to={"/"}><img src="/images/title.png" alt="" style={{ width: '300px', height: '150px' }} /></Link>
      </HeaderS>
      </div>
    );
  }

  export default Header ;

  const HeaderS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7em;
  height: 10vh;
  padding: 20px;
  margin-top: 20px`
