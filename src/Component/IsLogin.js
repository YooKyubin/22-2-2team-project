import React from 'react';
 import { Navigate } from 'react-router-dom';

 function IsLogin({ account, component: Component }) {
   return (
    // index.js의 StrictMode때문에 두 번 알림나옴
     !!account ? Component : <Navigate to='/login' {...alert("IsLogin: 로그인 먼저 해주세요.")} />
   )
 }

 export default IsLogin;