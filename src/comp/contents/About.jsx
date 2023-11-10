// ReactJs, component, JSX, Props, State, Regist
import React from "react";
import Line from "../css_design/Line";
import styled from 'styled-components';
import useScrollFadeIn from "../../hook/useScrollFadeIn";

const school ={
    title: "학력",
    contents :(
        `<h5>2015~2018 광남고등학교 졸업</h5>
        <h5>2021~2025 가천대학교 졸업</h5>
        <p> 대학교에서는 Python, C, C++, JAVA, HTML,CSS,JS
        Node, react,등 여러가지 프로그래밍 언어들을 배웠으며
        운영체제, 데이터통신, 소프트웨어공학,컴퓨터 구조,
        알고리즘등 이론적인 내용도 학습했습니다. 또한 P-프로젝트와
        졸업프로젝트등의 프로젝트도 진행하였고 졸업프로젝트는
        TOP5안에 들어 장학금을 받았습니다.</p>
        `
    )
}
const certificate = {
    title:"자격증",
    contents:(
        `<h5>2021 - SQLD,컴퓨터활용능력1급</h5>
        <h5>2022 - 토익 900점, 한국사 1급</h5>
        <h5>2023 - 게임 프로그래밍전문가 자격증,리눅스마스터1급</h5>
        <h5>2024 - 게임 기획전문가 자격증</h5>
        <h5>2025 - 정보처리기사</h5>`
    )
}
const competition = {
    title:"대회 수상 경력",
    contents:(
        `<h5>2022 - 메타버스 개발자 경진대회 장려상</h5>
        <h5>2023 - 가천대학교 프로그래밍 경진대회 은상</h5>
        <h5>2024 - 교내 졸업프로젝트 대상</h5>
        <h5> 2025 - 이브아이 게임톤 대상</h5>`
    )
}



const About = ()=>{
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.4),
        2: useScrollFadeIn('up', 1, 0.4),
        3: useScrollFadeIn('up', 1, 0.4),
      };
      
    return(
    <div>
        <div>
        <Aboutme {...animatedItem[0]} >
        <img src="/images/myface.png" alt="" style={{ width: '250px', height: '250px', marginRight: '40px' }} />
        
        <p><h2> About me</h2    >
            <b>항상 성장하는 게임 서버 프로그래머 백은규입니다.</b><br/>
            저는 어렸을적 부터 게임을 좋아하여 게임을 많이하는 학생이였습니다.
             그러다 보니 자연스럽게 컴퓨터공학에 진학하게 되고 내가 좋아하는 게임을 내가 한번 만들어보자라는 생각을 하게되어 진로를 결정하였습니다.
              그래서 일찍이 제 공부, 프로젝트등의 커리큘럼을 게임 서버 프로그래밍에 도움이 되도록 계획했고 학기중 유니티와 C++를 따로 
              학습하여 졸업프로젝트에서 유니티를 이용한 AI게임으로 대상을 탔습니다. 또한 이브아이 게임톤 대회에서도 ONE SHOT 이라는
               1인칭 FPS게임으로 대상을 탔고 현재 1인 게임개발에 몰두하고있습니다.</p>
        </Aboutme>
        </div>

        <div  {...animatedItem[1]}>
        <Box>
        <Line title={school.title} contents={school.contents} />
        <img src="/images/school.png" alt="" style={{ width: '400px', height: '300px', marginRight: '0px', marginTop: '50px' }} />
        </Box>
        </div>

        <div {...animatedItem[2]}>
        <Box>
        <img src="/images/certificate.png" alt="" style={{ width: '250px', height: '250px', marginRight: '80px', marginLeft: '60px' }} />
        <Line title={certificate.title} contents={certificate.contents}/>
        </Box>
        </div>

        <div {...animatedItem[3]}>
        <Box style={{ marginBottom: '100px' }} >
        <Line title={competition.title} contents={competition.contents}/>
        <img src="/images/competition.png" alt="" style={{ width: '250px', height: '250px', marginRight: '40px', marginLeft: '60px', marginTop: '30px' }} />
        </Box>
        </div>

    </div>
    )
}
export default About ;

// margin: 100px 150px, Line에서 사라지는 애니메이션 추가시 threshold:0.8
const Aboutme = styled.div`
flex: 1;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 70px 150px;
min-width:800px;
transition: 0.5s;
&:hover{
    color: white;
    background: darkcyan;
}
&:hover h2 {
    color: white;
  };
`

const Box = styled.div`
flex: 1;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 50px 140px;
min-width:800px;
`
