import Header from "../../components/header/Header";
import { tokenSelector } from "../../features/selector";
import {useDispatch,useSelector} from 'react-redux'
import {useEffect, useState} from 'react';
import style from './manager.module.scss';
import axios from "axios";
const Manager=function(){
    // state dung de chua cac links
    const [links,setLinks]=useState()


    //dung de ep buoc trang phai rerender
    const [reload,setReload]=useState()

    const token=useSelector(tokenSelector)
    const dispatch=useDispatch()
    

    //delete 1 link
    const handleDelete=async (id)=>{
        console.log('vao ham xoa');
        await axios.get(`https://shortlinkdm.herokuapp.com/${id}`, {
                headers: {
                    token: token
                }
            })
            //  chi dung de reload lai list
        setReload(id);
    }
    useEffect(()=>{
        const fetchList = async()=>{
            const res= await axios.get('https://shortlinkdm.herokuapp.com//list',{
                headers:{
                    token:token
                }
            }
            )
            console.log("Du lieu list manager");
            console.log(res.data);
            setLinks(res.data)
        }
        fetchList();
    },[reload]);

    return(
        <>
            <Header/>
            <div  className={style.manager}>
                <div className={style.title}>Danh sach link da duoc rut gon</div>
                <table className="table">
                    <thead>
                        <tr>
                            {// scope= "col" chi ra rang doi tuong
                            /* dang la head cua mot cot*/} 
                            <th scope="col">#</th>
                            <th scope="col">Sort Link</th>
                            <th scope="col">Link</th>
                            <th scope="col">Click</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {links && links.map((element,index)=>{
                            return(
                                <tr id={element._id} key={index}>
                                    <td style={{width: "5%"}} scope="row">{index+1}</td>
                                    <td style={{width: "20%"}}><a href={`https://shortlinkdm.herokuapp.com/${element.shortLink}`}>{`https://shortlinkdm.herokuapp.com/${element.shortLink}`}</a></td>
                                    <td style={{width: "50%"}}>{element.oldLink}</td>
                                    <td style={{width: "20"}}>{element.click}</td>
                                    <td style={{width: "5%"}}className={style.del} onClick={() => handleDelete(element._id)} >Delete</td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Manager;