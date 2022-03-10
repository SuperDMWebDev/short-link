import {useEffectt, useRef, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import axios from 'axios'

import Header from '../../components/header/Header'
import style from './home.module.scss'
import {userSelector, urlSelector, shortUrlSelector, tokenSelector} from '../../features/selector';
function Home()
{   console.log('tra ve trang home');
    //useSelector la mot react hook dung de 
    //access vao state va action cua react store
    
    //lay user va link
    const user=useSelector(userSelector);
    const link= useSelector(urlSelector);
    const shortLink=useSelector(shortUrlSelector); 
    const token=useSelector(tokenSelector);
    
    //su dung de thuc hien action
    // const dispatch=useDispatch();

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

    const handleShort=()=>{

    }
    const handleClickCopyShortUrl=()=>{

    }
    const handleClickCopyUrl=()=>{

    }
    return(
        <>
            <Header/>
            {/* <div className={style.home}>
                <input
                    value={url}
                    onChange={e=>setUrl(e.currentTarget.value)}
                    type="text"
                    placeholder='Link need to short'
                />

            
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
            </div> */}
        </>
    )
}
export default Home;