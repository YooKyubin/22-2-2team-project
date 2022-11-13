import React, {useRef, useState} from "react";
import {useNavigate, Link} from 'react-router-dom';

export default function Signup(){
    console.log('new rendering')
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const checkRef = useRef(null);
    const birthRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const mailRef = useRef(null);


    const [verification, setVerification] = useState('');
    const [sign_up_able,setSign_up] = useState(false);
    console.log('new_render sign_up_able: ',sign_up_able);

    const nevigate = useNavigate();

    const checksame = ()=>{
        if(pwdRef.current.value === "" || checkRef.current.value === ""){
            setVerification('');
        }
        else if (pwdRef.current.value === checkRef.current.value){
            // 이게 왜 되는지 모르겠지만 일단 됨 
            // state 두개 연달아 써도 문제가 없나?
            setVerification('비밀번호가 일치합니다.');
            setSign_up(true);
        }else{
            setVerification('비밀번호가 일치하지 않습니다.');
            setSign_up(false);
            console.log('sign_up_able', sign_up_able);
        }
    }

    function onSubmit(e){
        e.preventDefault();
        if (sign_up_able){
            fetch(`http://localhost:3001/account`,{
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    // 데이터
                    id: idRef.current.value,
                    pwd: pwdRef.current.value,
                    email: mailRef.current.value,
                    phone: phoneRef.current.value,
                    birth: birthRef.current.value,
                    name: nameRef.current.value
                    
                })
            }).then(res=>{
                if (res.ok){
                    alert('회원가입이 완료되었습니다.')
                    nevigate(`/login`);
                }
            })
        }else{
            alert('비밀번호를 확인하세요');
        }
    }

    return (
        <>
        <h1>회원가입</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='sign_id'>ID(학번)</label>
                <input type='text' required="required" id="sign_id" ref={idRef} pattern="[0-9]{10}"/>
            </div>
            <div>
                <label htmlFor='sign_pwd'>비밀번호</label>
                <input type='password' required="required" id="sign_pwd" ref={pwdRef}
                onChange={checksame} minLength="8" maxLength="16"/>
            </div>
            <div>
                <label htmlFor='sign_pwd_check'>비밀번호 확인</label>
                <input type='password' required="required" id="sign_pwd_check" 
                ref={checkRef} onChange={checksame} minLength="8" maxLength="16"/>
                <p className="alert">{verification}</p>
            </div>
            <div>
                <label htmlFor='sign_name'>이름</label>
                <input type='text' required="required" id="sign_name" ref={nameRef}/>
            </div>
            <div>
                <label htmlFor='sign_birth'>생년월일</label>
                <input type='text' required="required" id="sign_birth" ref={birthRef}
                pattern="[0-9]{6}"/>
            </div>
            <div>
                <label htmlFor='sign_phone'>전화번호</label>
                <input type='text' required="required" id="sign_phone" ref={phoneRef}
                pattern="[0-9]{11}"/>
            </div>
            <div>
                <label htmlFor='sign_mail'>e-mail</label>
                <input type='email' required="required" id="sign_mail" ref={mailRef}/>
            </div>
            <div className="account">
                <button>회원 가입</button>
            </div>
        </form>
        <Link to='/login'>로그인 하기</Link>
        </>
    )
}