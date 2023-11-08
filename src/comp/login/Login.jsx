import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import userdata from './userdata';


// id : ohbin
// pwd : 1017
export const Login = () => {
    const [userid, SetUserId] = useState("");
    const [password, SetPassword] = useState("");
    const changeId = (e) => {
        SetUserId(e.target.value);
        console.log(userid)
        };
    const changePwd = (e) => {
        SetPassword(e.target.value);
        console.log(password)
    };
        
    function submit() {
        if(userid === userdata.id && password=== userdata.pwd ){
            sessionStorage.setItem("isLogined",true)
            console.log(sessionStorage.getItem("isLogined"))
        }
      }
    return (
            <FormContainer>
                <Form>
                    <InputLabel>아이디</InputLabel>
                    <InputField type="text" size="30" value={userid}  onChange={changeId}/>
                    <InputLabel>비밀번호</InputLabel>
                    <InputField type="password"  size="30" value={password} onChange={changePwd}/>
                    <Buttonlogin onClick={submit()}>  로그인 </Buttonlogin>
                    <ButtonRegist to="/Regist">회원가입</ButtonRegist><br/>
                </Form>
            </FormContainer>
    );
};
export default Login;


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

const Buttonlogin = styled.button`
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

    &:hover {
        background-color: #333;
    }
`;
const ButtonRegist = styled(Link)`
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
    text-decoration: none;
    text-align:center;
    &:hover {
        background-color: #333;
    }
`;


