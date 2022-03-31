import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import style from './Info.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import { userSelector } from "../../features/selector";
import userSlice from "../../features/users/userSlice";
const Info=()=>{
    //lam sao ma biet lay state nao ma tra ra
    const user = useSelector(userSelector);


    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("user lay duoc tu info");
    // thuc ra o day la tra ve state.users.user
    // tuc la tra ve username tai trong dtb
    // user chi gom id va username
    console.log(user);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleLogout=()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch(userSlice.actions.logout);
    }

    return (
        <>
            <Header />
            <div className={style.infoMe}>
                <div className={style.options}>
                    <span className={style.account}>
                        Tài khoản của tôi
                    </span>
                    <span className={style.invoice}>
                        <Link className="link" to="/links">Danh sách link</Link>
                    </span>
                    <span 
                        className={style.logout}
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </span>
                </div>

                <div className={style.info}>
                    <div className={style.title}>
                        TÀI KHOẢN CỦA TÔI
                    </div>
                    <span className={style.acc}>Thông tin tài khoản</span>
                    <div className={style.infoAccount}>
                        <span>Thông tin liên lạc</span>
                        <span>{user.username}</span>
                        <span><Link className="link" to="/password">Thay đổi mật khẩu</Link></span>                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Info;