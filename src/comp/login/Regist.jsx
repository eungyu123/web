import React from "react";
import styled from 'styled-components';

const Regist = () => {
    return (
      <FormContainer>
          <h2>회원가입</h2>
          <Form>
              <InputLabel>이름</InputLabel>
              <InputField type="text" name = "name" size="30" />
              <InputLabel>아이디</InputLabel>
              <InputField type="text" name = "loginid" size="30" />
              <InputLabel>비밀번호</InputLabel>
              <InputField type="password" name = "pwd" size="30" />
              <InputLabel>전화번호</InputLabel>
              <InputField type="text" name = "tel" size="30" />
              <InputLabel>주소</InputLabel>
              <InputField type="text" name = "address" size="30" />
              <SubmitS type = "submit" size="30"/>
          </Form>
      </FormContainer>
);
};


export default Regist;

const FormContainer = styled.div`
background-color: #f9f9f9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 150px; 
margin-bottom: 200px; 
margin-left: 300px; 
margin-right: 200px; 
padding: 30px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

`;


const Form = styled.form`
display: flex;
flex-direction: column;
`;

const InputLabel = styled.label`
margin-top: 10px;
font-weight: bold;
`;

const InputField = styled.input`
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 16px;
`;
const SubmitS = styled.input`
margin-top: 20px; 
margin-bottom: 10px; 
margin-left: 0px; 
margin-right: 0px;
padding: 10px 20px;
background-color: black;
color: white;
border: none;
border-radius: 5px;
font-size: 18px;
cursor: pointer;

`
