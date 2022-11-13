import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mypage from "./Mypage";

export default function Main(){
    console.log('main.js rendering')
    const [account,setAccount] = useState(localStorage.getItem('idx'));

    return (
        <>
        <h1>메인 페이지</h1>
        <h2>
            {!!account ? '로그인 됨':'로그인 안됨'}
            {console.log('Main, account:',account)}
        </h2>
        <div>
            <Link to="/login">login</Link>
        </div>
        <div>
            <Link to="/signup">signup</Link>
        </div>
        <button onClick={()=>{
            setAccount(localStorage.removeItem('idx'));
            window.location.replace('/')
            }}>로그아웃</button>
        <Mypage account={account}/>
        </>
    )
};