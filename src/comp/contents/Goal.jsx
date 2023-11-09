import React from 'react';
import Box from '../css_design/Box';
import styled from 'styled-components';
import useScrollFadeIn from "../../hook/useScrollFadeIn";

const school ={
  title: "학업",
  contents :(
      `
      <ul type='a'>
        <li>일주일에 한시간 이상 알고리즘 공부하기 - 일주일에 한시간이라도 꾸준하게 한다면 그게 쌓이고 쌓여서 나중엔 정말 실력이 많이 늘어난다고 믿습니다.</li>
        <li>대학교 졸업하기 전까지 토익 800점 달성 - 토익은 대학교 졸업 조건과 동시에 기초적인 스펙입니다.</li>
        <li>대학교 졸업하기 전까지 나만의 게임 만들어 서비스하기 - 실제 나 혼자 게임을 만들고 자기만족에 그치는 것은 큰 도움이 되지 않는것 같습니다. 실제 서비스를 해보고 오류 발생과 유저들의 피드백을 받는것이 중요하다고 생각합니다. </li>
      </ul>
      `
  )
}
const health = {
  title:"건강",
  contents:(
      `<ul type='a'>
        <li>매일 산책 1시간 하기 - 허리디스크가 있기 때문에 매일 산책하며 치료할 것입니다. </li>
        <li>30살이 되기 전에 70 KG 달성 - 나이가 들수록 몸무게를 빼기 힘들기 때문에 30살을 마지노선으로 천천히 몸무게를 뺄것입니다.</li>
        <li>일찍 자고 일찍 일어나기 - 잠을 잘자는 것만으로 삶의 질이 많이 올라간다고 생각하여 매일 일찍 자고 일찍 일어나는 생활 패턴을 만드는 것이 목표입니다.</li> 
      </ul>`
  )
}
const work = {
  title:"취업",
  contents:(
      `<ul type='a'>
      <li>27살에 취업하는것이 목표입니다. - 더 좋은 회사를 가기위해 준비하는 시간보다 어떤 회사에서라도 실무를 경험해 보는것이 더 많이 성장할 것이라고 생각합니다.</li> 
      <li>한 회사에서 오래동안 버티기 - 여러 회사를 이직하며 다니는 것 또한 큰 성장의 발판이 될 수 있지만 저는 어디에서든지 꾸준하게 하는사람은 절대 이길수 없다고 생각합니다. 그래서 한 회사에서 최대한 오래 다니며 나만의 기술과 노하우를 익히고 싶습니다.</li> 
      </ul>`
  )
}

const Goal = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1, 0),
    1: useScrollFadeIn('left', 1, 0.4),
    2: useScrollFadeIn('left', 1, 0.4),
  };
  return (
    <div>
      <H>Goal</H>
      <GoalA {...animatedItem[0]} >
        <Box title={school.title} contents = {school.contents}></Box>
      </GoalA>
      <GoalB {...animatedItem[1]} >
        <Box title={health.title} contents = {health.contents}></Box>
      </GoalB>
      <GoalC {...animatedItem[2]} >
        <Box title={work.title} contents = {work.contents}></Box>
      </GoalC>
    </div>
  );
};

export default Goal;

const GoalA = styled.div`

flex: 1;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 70px 180px;
transition: 0.5s;
li {
  margin: 5px 0px;
}
&:hover{
    background: #FF6F61;
    color: white;
}

`
const GoalB = styled.div`
flex: 1;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 70px 180px;
transition: 0.5s;
li {
  margin: 5px 0px;
}
&:hover{
    color: white;
    background: dimgray;
}

`
const GoalC = styled.div`
flex: 1;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 70px 180px;
transition: 0.5s;
li {
  margin: 5px 0px;
}
&:hover{
    color: white;
    background: #A0522D;
}
`

// 코랄 (Coral): #FF6F61
// 스카이 블루 (Sky Blue): #87CEEB
// 모카 (Mocha): #A0522D
// 허니 (Honey): #FFD700
// 라벤더 (Lavender): #E6E6FA
//rgb255 165 0

const H = styled.h1`
  margin-top: 65px; 
  margin-bottom: 35px; 
  margin-left: 180px; 
  margin-right: 200px; 
`