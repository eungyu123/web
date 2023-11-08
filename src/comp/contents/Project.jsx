import React, { useReducer , useRef } from "react";
import styled from 'styled-components';

const projectcontent =[
  {gametitle:"Slay the spire",
  gameimage:"/images/game1.png",},
  {gametitle:"ONE SHOT ONE KILL",
  gameimage:"/images/game2.png",
  },
]

const projectnum = projectcontent.length;
const reducer = (state, action) =>{
  switch (action.type){
    case "INCREMENT":
      return (state+1)%projectnum ;
    case "DECREMENT":
      return ((state - 1 + projectnum) % projectnum);
    default:
      return state
  }
}
const first = Array(projectcontent.length).fill(false);

const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      const open = [...state];
      open[action.index] = true;
      return open;
    case "CLOSE_MODAL":
      const close = [...state];
      close[action.index] = false;
      return close;
    default:
      return state;
  }
};



const Project = () => {
  const [index, dispatch] = useReducer(reducer, 0);
  const [modalOpen, modalDispatch] = useReducer(modalReducer, first);
  const modalBackground = useRef();
  console.log(modalOpen)
  const GamgeImage = ({ index }) => (
    <button
      style={{
        background: `url(${projectcontent[index].gameimage}) no-repeat`,
        backgroundSize: 'contain',
        width: '650px',
        height: '400px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={() => modalDispatch({ type: "OPEN_MODAL", index })}
    />
  );


  return (
    <div>
      <H>Project</H>
      <Box>
        <Buttonleft onClick={() => dispatch({ type: "INCREMENT" })}/>
        <GamgeImage index={index} />
        <Buttonright onClick={() => dispatch({ type: "DECREMENT" })}/>
      </Box>
      <Title>{projectcontent[index].gametitle} </Title>
      <h3 style={{marginLeft:'250px'}}> 교수님 사진 클릭하면 모달 나옵니다.</h3>
      <br/><br/><br/><br/><br/><br/><br/>

      {
        modalOpen[0] &&
        <Modalcontainer ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            modalDispatch({ type: "CLOSE_MODAL", index });
            }}}>
          <Modalcontent>
            <Hmodal>Slay the spire</Hmodal>
            <img src="/images/game1.png" alt="" style={{ width: '600px', height: '400px', marginRight: '5px'}} />
            <P> 개발 기간 : 2022.03.01~10.15</P>
            <P>
            프로젝트 인원 4명<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 기획 : 1명, 서버 프로그래밍 : 1명, 클라이언트 프로그래밍 : 1명, 디자인 : 1명</P>
            <P>프로젝트 소개<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 해당 게임은 유니티로 개발한 전략 게임입니다. <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 카드를 사용하여 스테이지를 깨는 형식으로 만들었습니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 여러가지 직업과 몬스터 디자인을 하는데 집중했습니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 커스텀 모드를 만들어 유저가 직접 게임을 조정할 수 있는 기능을 만들었습니다.</P>
            <P>프로젝트 내 역할 - 서버 프로그래밍<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 게임 진행에 있어서 카드 사용시 발생하는 로직들을 개발했습니다<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 플레이어 정보, 아이템 정보, 점수 등을 데이터 베이스로 관리 했습니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 통신, 게임 세션등을 관리하여 멀티 플레이 구현했습니다.</P>
          </Modalcontent>
        </Modalcontainer>
      }
      {
        modalOpen[1]&&
        <Modalcontainer ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            modalDispatch({ type: "CLOSE_MODAL", index });
            }}}>
          <Modalcontent>
            <Hmodal>ONE SHOT ONE KILL</Hmodal>
            <img src="/images/game2.png" alt="" style={{ width: '600px', height: '400px', marginRight: '20px'}} />
            <PTwo> 개발 기간 : 2024.03.01~6.15</PTwo>
            <PTwo>
            프로젝트 인원 4명<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 기획 : 1명, 서버 프로그래밍 : 1명, 클라이언트 프로그래밍 : 1명, 디자인 : 1명</PTwo>
            <PTwo>프로젝트 소개<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 제가 이브아이 게임톤 대회에서 개발했던 1인칭 게임 ONE SHOT 입니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 해당 프로젝트에서 저는 게임 서버 개발을 맡았습니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 해당 게임에서 저는 히트박스에 대한 부분, 반응속도, 캐릭터 움직임등에 대한 최적화 로직을 개발했습니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 해당 게임은 스페셜포스를 벤치마킹하여 개발한 게임으로 해당 게임이 잘 돌아가는지에 <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  대해 초점을 맞춰 구현하고 테스트하고 잘 안되는 부분을 수정, 추가할 기능을 구현하는 식으로 개발했습니다.<br/></PTwo>
            <PTwo>프로젝트 내 역할 - 서버 프로그래밍<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 게임 진행에 있어서 총쏘는 기능, 이동 기능, FPS 재장전 및 무기 바꾸기 등의 기능을 구현했습니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 게임의 중력, 충돌, 총기반동 등 물리 엔진을 구현했습니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;- 여러가지 맵을 다양하게 만들수 있도록 맵 에디터를 개발했습니다.</PTwo>
          </Modalcontent>
        </Modalcontainer>
      }
    </div>
  );
};

export default Project;


const Box = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex-wrap: nowrap;
margin-top: 50px; 
margin-bottom: 0px; 
margin-left: 200px; 
margin-right: 200px; 
button {
  height: 50px; /* 원하는 높이로 조절하세요 */
}
`
const H = styled.h1`
margin-top: 70px; 
margin-bottom: 70px; 
margin-left: 220px; 
margin-right: 200px; 
`
const Title = styled.h1`
margin-top: 0px; 
margin-bottom: 70px; 
margin-left: 230px; 
margin-right: 200px; 
`
const Buttonleft = styled.button`
  background: url("/images/nextbutton1.png") no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;

`;

const Buttonright = styled.button`
  background: url("/images/nextbutton2.png") no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

const Modalcontainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Modalcontent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center
`

const P = styled.div`
  text-align: left;
  margin: 25px 120px;
`

const PTwo = styled.div`
  text-align: left;
  margin: 25px 70px;
`

const Hmodal = styled.h1`
  text-align:left;
  margin-left:110px;
`