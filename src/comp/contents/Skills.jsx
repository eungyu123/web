import React from 'react';
import styled from 'styled-components';

const MyComponent = () => {

  return (
    <div>
    <H>Skills</H>
    <Table>
      <thead>
        <tr>
            <th>프로젝트 관리</th><th>데이터베이스</th><th>프론트엔드</th><th>백엔드</th><th>기타 언어</th><th>개발도구</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="/images/github.png" alt="" style={{ width: '30px', height: '35px', marginRight: '5px'}} />Gitgub</td>
          <td><img src="/images/mysql.png" alt="" style={{ width: '30px', height: '35px', marginRight: '5px'}} />MYSQL</td>
          <td><img src="/images/C.png" alt="" style={{ width: '30px', height: '35px', marginRight: '7px'}} />C#</td>
          <td><img src="/images/c++.png" alt="" style={{ width: '40px', height: '35px', marginRight: '5px'}} />C++</td>
          <td><img src="/images/java.png" alt="" style={{ width: '40px', height: '35px', marginRight: '5px'}} />JAVA</td>
          <td><img src="/images/vscode.png" alt="" style={{ width: '30px', height: '35px', marginRight: '5px'}} />VS CODE</td>
        </tr>
        <tr>
          <td></td>
          <td><img src="/images/oracle.png" alt="" style={{ width: '35px', height: '35px', marginRight: '5px'}} />ORACLE</td>
          <td><img src="/images/html5.png" alt="" style={{ width: '35px', height: '35px', marginRight: '5px'}} />HTML/CSS</td>
          <td><img src="/images/python.png" alt="" style={{ width: '35px', height: '35px', marginRight: '5px'}} />Python</td>
          <td></td>
          <td><img src="/images/unity.png" alt="" style={{ width: '35px', height: '35px', marginRight: '5px'}} />UNITY</td>
        </tr>
        <tr>
          <td></td><td></td>
          <td><img src="/images/react.png" alt="" style={{ width: '35px', height: '35px', marginRight: '5px'}} />React</td>
          <td><img src="/images/nodejs.png" alt="" style={{ width: '35px', height: '35px', marginRight: '5px'}} />Node.js</td>
          <td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td>
          <td></td><td><img src="/images/docker.png" alt="" style={{ width: '35px', height: '35px', marginRight: '5px'}} />docker</td>
          <td></td><td></td>
        </tr>
      </tbody>
    </Table>
    <Htwo>데이터베이스</Htwo>
    <SubTable>
        <tr>
          <th>MYSQL</th><td>node.js, docker등 백엔드 개발할때 주로 사용하는 DB입니다. 기본적인 문법을 알고 데이터베이스 설계 및 관리, 데이터 조작, 쿼리 작성을 하는데 이용합니다. </td>
        </tr>
        <tr>
          <th>ORACLE</th><td>오라클도 MYSQL과 마찬가지로 백엔드 개발할때 사용하는 DB입니다. 학교에서 처음배워 여러가지 프로젝트에서 활용해 보고있습니다.</td>
        </tr>
    </SubTable>
    <Htwo>프론트엔드</Htwo>
    <SubTable>
        <tr>
          <th>C#</th><td>클라이언트를 개발할때 사용하는 언어로, 충돌, 움직임, 애니메이션, 소리, 이벤트 등의 작업을 Unity에서 구현할 수 있습니다.옵저버패턴, 오브젝트 풀링 패턴, 싱글톤 패턴등 간단한 디자인 패턴을 구현할 수 있습니다.</td>
        </tr>
        <tr>
          <th>HTML/CSS</th><td>웹사이트를 구성할때 기본적으로 사용하는 언어입니다. 여러가지 토이프로젝트를 진행했고 쇼핑몰, 포트폴리오 사이트를 만들어본 경험이 있으며 레이아웃 구성과 디자인적인 측면에서 여러가지 무리없이 개발할 수 있습니다. </td>
        </tr>
        <tr>
          <th>react</th><td>리액트로도 여러가지 토이프로젝트를 진행했고 페이스북, 유튜브 같은 각종 웹사이트들을 클론코딩 해본적이 있습니다. 리액트의 훅을 활용하고 이벤트를 활용하며 프로젝트에서 컴포넌트 간의 상태 공유, 비동기 작업 처리, 렌더링 최적화등의 문제를 해결한 경험이 있습니다</td>
        </tr>
    </SubTable>
    <Htwo>백엔드</Htwo>
    <SubTable>
        <tr>
          <th>C++</th><td>제일 많이 사용하는 언어 입니다. 백준 플레티넘5티어이고 게임 서버를 구현할때 사용합니다. 클라이언트 변조에 대한 보안, 매크로 보안, 로깅, 캐릭터 움직임등에 대한 프로그래밍과 최적화를 시킬 수 있습니다.</td>
        </tr>
        <tr>
          <th>python</th><td>백준 골드3, 인공지능을 이용한 얼굴인식, 텍스트 처리 기술을 구현할수있고 매크로, 자동주행등 여러가지 응용프로그램을 만들수있습니다. 또한 Pygame라이브러리를 이용해 혼자서 간단한 게임 여러개를 구현해본 경험이 있습니다. 
          </td>
        </tr>
        <tr>
          <th>node.js</th><td>저는기본적으로 js할 줄 알아서 js 런타임을지원하는 node.js를 사용하게 됬습니다. 기본적인 CURD와 세션관리 파일 업로드, 데이터베이스 관리, 통신, 로깅등 다양한 기능을 구현할 수 있습니다. </td>
        </tr>
        <tr>
          <th>docker</th><td>도커를 이용해서 실제 웹을 서비스를 해본 경험이 있으며 프론트엔드, 백엔드의 연결과 클라이언트 사이의 원할한 통신을 구현할 수 있습니다. </td>
        </tr>
    </SubTable>
    <Htwo>기타 언어</Htwo>
    <SubTable>
        <tr>
          <th>JAVA</th><td>학교에서만 배웠으며 책에 있는 단순한 예제들과 간단한 프로그램들은 개발 가능하지만 복잡한 프로그램 개발은 어렵습니다.</td>
        </tr>
    </SubTable>
    </div>
  );
};


export default MyComponent;


const Table = styled.table`
  width: 60%;
  border-collapse: collapse;
  min-width:800px;
  margin-top: 0px; 
  margin-bottom: 50px; 
  margin-left: 200px; 
  margin-right: 200px; 
  text-align: center;
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const SubTable = styled.table`
min-width:800px;
  width: 60%;
  border-collapse: collapse;
  margin-top: 0px; 
  margin-bottom: 100px; 
  margin-left: 200px; 
  margin-right: 200px; 
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
`;
const H = styled.h1`
margin-top: 70px; 
margin-bottom: 20px; 
margin-left: 200px; 
margin-right: 200px; 
`
const Htwo = styled.h2`
margin-top: 70px; 
margin-bottom: 20px; 
margin-left: 200px; 
margin-right: 200px; 
`
