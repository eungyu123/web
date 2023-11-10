import styled from 'styled-components';

function Footer() {
    return (
      <FooterS>Copyright 2023. 백은규 all rights reserved. 연락처 : 010-6316-1440</FooterS>
    )
  }


  export default Footer ;

  const FooterS = styled.div`
  display: flex;
  height: 15vh;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  border-top: 3px solid black;
  min-hegiht:150px;
  min-width:1400px;
`