import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css"

export default function Header(){
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
                <div onClick={()=>{navigate('/')}}>프로젝트 명</div>
                <nav className={styles.navigation}>
                    <ul>
                        <li onClick={()=>{
                            navigate('/carpool')
                        }}>카풀</li>
                        <li onClick={()=>{navigate('/taxi')}}>택시</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};