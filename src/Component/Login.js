import React from "react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login(){
    const idRef = useRef(null);
    const pwdRef = useRef(null);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [suc, setSuc] = useState(true);
    
    const navigate = useNavigate();
    
    
    const onSubmit =(e)=>{
        e.preventDefault();
        if (!id) {
            return alert("ID를 입력하세요.");
        }
        else if (!password) {
            return alert("Password를 입력하세요.");
        }else{
            fetch(`http://localhost:3001/login_info`,{
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    // 데이터
                    id: id,
                    pwd: password
                })
            }).then(res=>{
                return res.json();
            }).then(success=>{
                if(!!success){
                    console.log(success);
                    console.log("로그인 성공");
                    localStorage.setItem('idx', id);
                    //navigate('/');
                    window.location.replace('/');
                }else{
                    console.log("로그인 실패")
                    setSuc(false);
                }
            })
        }
    }
    
    

    return (
        <>
            <h1>
                로그인 페이지 입니다.
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='login_id'>ID(학번)</label>
                    <input type='text' required="required" id="login_id" ref={idRef} pattern="[0-9]{10}"
                    value={id} onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor='login_pwd'>비밀번호</label>
                    <input type='password' required="required" id="login_pwd" ref={pwdRef}
                    minLength="8" maxLength="16" value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button type="submit">로그인</button>
                <p>{suc ? "": "로그인 실패"}</p>
            </form>
            <div>
                <Link to='/signup'>회원 가입 하기</Link>
            </div>
        </>
    );
};