import React from "react";
import styles from "./Mypage.module.css";

export default function Mypage(props){

    const account = props.account;
    if (!account){ //로그인이 안 되어 있을 때, idx가 비어있을 때
        return null
    }

    return <>
    <div className={styles.mypage}>
        <h3>Mypage</h3>
        <h4>내 정보(로그인이 되어있어야 함)</h4>
        <div className={styles.mypage}>
            <p>id: {account}</p>
            <p>여기서 fetch get 이든 뭐든 해서 account 에 id 정보 있으니까 
                정보 불러오면 될 듯
            </p>
        </div>
    </div>
    </>;
}