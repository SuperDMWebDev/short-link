import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'

import Header from '../../components/header/Header'
import style from './home.module.scss'
import linkSlice from '../../features/links/linkSlice'
import {userSelector, urlSelector, shortUrlSelector, tokenSelector} from '../../features/selector';
function Home()
{   console.log('tra ve trang home');
    //useSelector la mot react hook dung de 
    //access vao state va action cua react store
    
    //lay user va link
    const user=useSelector(userSelector);
    console.log("User home.jxs "+user);
    const link= useSelector(urlSelector);
    console.log("link home.jxs "+link);
    const shortLink=useSelector(shortUrlSelector); 
    console.log("shortlink home.jxs "+shortLink);
    const token=useSelector(tokenSelector);
    console.log("token home.jxs "+token);

    //su dung de thuc hien action
    const dispatch=useDispatch();

    // khoi tao cac useState dung cho return
    const [url,setUrl]=useState('')
    //tailUrl la duoi url
    const [tailUrl,setTailUrl]=useState('');
    const [status,setStatus]=useState();


    const shortUrl=useRef()
    const URL=useRef()
    const buttonShortURL=useRef()
    const buttonURL=useRef()
    const statusRef = useRef()

    //xu ly nut short 
    const handleShort=()=>{
        console.log(user);
        const fetchShort = async()=>{
            console.log(user);
            //neu co user thi gui len userId 
            // van con vuong cho axios.post (url,tailUrl,userId)
            // tai sao lai push 3 doi so nhu the 
            //muc dich axios.post push header len server de nhan ve res.data
            if(user){
                const res=await axios.post("https://shortlink123.herokuapp.com/short",{
                    url: url,
                    tailUrl: tailUrl,
                    userId: user._id,
                });
                console.log("data nhan duoc tu fetch "+res.data);
                
                dispatch(linkSlice.actions.short(res.data))
                console.log("link slice bao gom"+linkSlice);
                localStorage.setItem('url', JSON.stringify(res.data.url))
                localStorage.setItem('shortUrl', JSON.stringify(res.data.shortUrl))
                setStatus(res.status)
            } else {
                const res = await axios.post("https://shortlink123.herokuapp.com/short", {
                    url: url,
                    tailUrl: tailUrl,
                })
                dispatch(linkSlice.actions.short(res.data))
                localStorage.setItem('url', JSON.stringify(res.data.url))
                localStorage.setItem('shortUrl', JSON.stringify(res.data.url))
                setStatus(res.status)
            }
        }
        fetchShort()
    }

    // muon dung copy truoc tien phai chon duoc
    // doi tuong input muon copy.select() sau do goi document.execCommand
    const handleClickCopyShortUrl = (e) => {
        e.preventDefault()
        const copyText = shortUrl.current;
        copyText.select()
        document.execCommand('copy')
        buttonShortURL.current.style.display = 'flex'
        setTimeout(() => buttonShortURL.current.style.display = 'none', 500)

    }

    const handleClickCopyUrl = (e) => {
        e.preventDefault()
        const copyText = URL.current
        console.log(copyText);
        copyText.select()   
        document.execCommand('copy')
        buttonURL.current.style.display = 'flex'
        setTimeout(() => buttonURL.current.style.display = 'none', 500)
    }
    //useEffect set khi status bi thay doi 
    useEffect(() => {
        setUrl('')
        setTailUrl('')
        if (status === 201) {
            statusRef.current.innerHTML = 'Phần thay thế đã bị sử dụng'
            statusRef.current.style.color = 'red'
        }
        else if (status === 200) {
            statusRef.current.innerHTML = 'Rút gọn thành công'
            statusRef.current.style.color = '#28a745'
        }
        else if (status === 202) {
            statusRef.current.innerHTML = 'Vui lòng điền đủ link'
            statusRef.current.style.color = 'red'
        }
    }, [status])
    return(
        <>
            <Header/>
            <div className={style.home}>
                <div className={style.oldLink}>
                <input
                    value={url}
                    onChange={e=>setUrl(e.currentTarget.value)}
                    type="text"
                    placeholder='Link need to short'
                />
                </div>

            
            <div className={style.tailLink}>
                <input
                    value={tailUrl}
                    onChange={e=>setTailUrl(e.currentTarget.value)}    
                    type="text"
                    placeholder='Part to replace'/>
                    <div onClick={handleShort}
                    className={style.short}>Short</div>
            </div>

            <div className={style.shorted}>
                <span
                    ref={statusRef}
                    className={style.status}
                >
                    Please input your link which's need shorted    
                </span>  
                <div className={style.shortURL}>
                    <span>Short url</span>
                    <div className={style.copy}>
                        <input 
                            ref={shortUrl}
                            type="text"
                            readOnly
                            value={shortLink}/> 
                        <button onClick={handleClickCopyShortUrl} >
                            Copy
                        </button>  
                        <div 
                            ref={buttonShortURL}
                            className={style.copied}
                        >
                            copied
                        </div>
                    </div>    
                </div>  
                <div className={style.shortURL}>
                    <span>URL</span>
                    <div className={style.copy}>
                        <input
                                ref={URL}
                                type="text"
                                readOnly="readonly" 
                                value={link}
                            />
                            <button
                                onClick={handleClickCopyUrl}
                            >
                                Copy
                            </button>
                            <div
                                ref={buttonURL}
                                className={style.copied}
                            >
                                copied
                            </div>
                    </div>    
                </div>
             </div>
            </div>
        </>
    )
}
export default Home;