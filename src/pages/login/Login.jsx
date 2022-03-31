import axios from "axios"
import { useState,useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import Header from "../../components/header/Header"
import userSlice from "../../features/users/userSlice"
import style from './login.module.scss'
const Login= ()=>{
    //su dung de dieu huong duong dan 
    const navigate=useNavigate()
    // su dung de thi trien cac action duoc tao boi createSlice
    const dispatch=useDispatch()
    // luu ten dang nhap 
    const [userName,setUserName]= useState('')
    // luu mat khau 
    const [passWord,setPassWord]=useState('')
    // luu cac status khi nhap mat khau
    const [status,setStatus]=useState()
    
    const statusRef = useRef()
    const handleLogin= async ()=>{
        if(!userName||!passWord)
        {
            setStatus(1);
        }
        else{
            //axios gui thong tin len server de nhan ve data

            const res= await axios.post('https://shortlinkdm.herokuapp.com/api/auth/login',{
                username:userName,
                password:passWord
            })

            console.log(res.data);
            // tra ve status tuong ung voi du lieu 
            setStatus(res.data.enumError);
            // vi du enumerror:3 
            //message:"User not found"
            //success:false

            if(res.data.success){
                //du lieu khi dang nhap than hcong
                // da cap nhat user 
                //res.data day la 1 user 
                dispatch(userSlice.actions.login(res.data))
                localStorage.setItem('user', JSON.stringify(res.data.info))
                localStorage.setItem('token', JSON.stringify(res.data.accessToken))
                // navigate('/')
            }
        }
    }
    useEffect(() => {
        if(status === 1) {
            statusRef.current.innerHTML = 'Vui lòng điền đầy đủ thông tin'
        }
        else if(status === 2) {
            statusRef.current.innerHTML = 'Mật khẩu tối thiểu 6 ký tự'
        }
        else if(status === 3) {
            statusRef.current.innerHTML = 'Thông tin tài khoản không chính xác'
        }
        else if(status === 4) {
            statusRef.current.innerHTML = 'Mật khẩu không chính xác'
        }

        return () => {}
    }, [status])
    return (
        <>
            <Header/>
            <div className={style.login}>
                <div className={style.title}>
                    account
                </div>    
                <div className={style.wrapper}>
                    <div className={style.account}>
                        <span className={style.custom}>
                        Khách hàng đã đăng kí tài khoản
                        </span>
                        <span>Bạn đã có tài khoản, xin mời đăng nhập bằng địa chỉ email đăng ký.
                        </span> 
                        <div className={style.inputButton}>
                        <span>Tên đăng nhập</span>
                            <input 
                                type="text" 
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className={style.inputButton}>
                            <span>Mật khẩu</span>
                            <input 
                                type="password" 
                                value={passWord}
                                onChange={e => setPassWord(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && handleLogin()}
                            />
                        </div>
                        <div className={style.status} ref={statusRef}></div>
                        <div className={style.loginButton}>
                            <span onClick={handleLogin}>Đăng nhập</span>
                            <span>Quên mật khẩu</span>
                        </div>
                    </div>    
                    <div className={style.register}>
                        <span>Khách hàng mới</span>
                        <div className={style.registerButton}>
                            <Link className="link" to="/register">Đăng ký</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Login;