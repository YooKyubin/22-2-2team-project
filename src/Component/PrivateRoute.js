import React from 'react';
 import { Navigate } from 'react-router-dom';

 function PrivateRoute({ account, component: Component }) {
   return (
    // index.js의 StrictMode때문에 두 번 알림나옴
     !account ? Component : <Navigate to='/' {...alert("PrivateRoute: 접근할 수 없는 페이지입니다.")} />
   )
 }

 export default PrivateRoute 