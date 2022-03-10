import {Link} from 'react-router-dom'
import style from './header.module.scss'

const Header=()=>{
    console.log('header component');
    return(
        <div className={style.header}>
            <Link className="link" to="/">
                <img src="https://firebasestorage.googleapis.com/v0/b/firestore-e6d3d.appspot.com/o/Capture%20(1).PNG?alt=media&token=b6524a7f-6f6e-4f77-a7ed-4110ac1138b3" alt="" srcset="" />
            </Link>
            <div className={style.user}>
            <Link className="link" to="/user"><i className="fa-solid fa-user"></i></Link>    
            </div>
        </div>
    )
}
export default Header;