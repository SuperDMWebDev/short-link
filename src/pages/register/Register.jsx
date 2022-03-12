import {useNavigate} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import Header from '../../components/header/Header';
import style from './register.module.scss';

const Register=()=>{
    const navigate=useNavigate();

    const statusRef=useRef()

    const [userName,setUserName]=useState('');
    const [passWord,setPassWord]=useState('');
    const [restartPassword,setRestartPassword]=useState('')

    const [status,setStatus]=useState()

    const handleRegister=async()=>{
       
    }
    useEffect(() => {
        if(status === 1) {
            statusRef.current.innerHTML = 'Mật khẩu không trùng khớp'
        }
        else if(status === 2) {
            statusRef.current.innerHTML = 'Mật khẩu tối thiểu 6 ký tự'
        }
        else if(status === 3) {
            statusRef.current.innerHTML = 'Vui lòng điền đầy đủ thông tin'
        }
        else if(status === 4) {
            statusRef.current.innerHTML = 'Địa chỉ email đã tồn tại'
        }
    }, [status])
    return(
        <>
            <Header/>
            <div className={style.register}>
                <div className={style.title}>TẠO TÀI KHOẢN MỚI</div>
                <div className={style.wrapper}>
                    <div className={style.account}>
                        <span className={style.custom}>Thông tin khách hàng</span>
                        <div className={style.infoLogin}>
                            <span className={style.custom}>Thông tin đăng nhập</span>
                            <div className={style.inputButton}>
                                <span>Tên đăng nhập</span>
                                <input
                                    type="email"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className={style.inputButton}>
                                <span>Mật khẩu</span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={style.inputButton}>
                                <span>Nhập lại mật khẩu</span>
                                <input
                                    type="password"
                                    value={rePassword}
                                    onChange={e => setRePassword(e.target.value)}
                                    onKeyPress={e => e.key === 'Enter' && handleRegister()}
                                />
                            </div>
                            <div className={style.status} ref={statusRef}></div>
                        </div>
                        <div
                            className={style.registerButton}
                            onClick={handleRegister}
                        >
                            Đăng ký
                        </div>
                    </div>
                    <div className={style.login}></div>
                </div>
            </div>
        </>
    )
}