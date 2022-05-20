import React, { useEffect, useState } from "react";
//import axios from 'axios';

const Convert = ({language,text}) => {
    const [translated,setTranslated] = useState('hi');
    const [debouncedText,setDebouncedText] = useState(translated);

    useEffect(()=>{
        
        setTranslated(`${language.value} combined with ${text}`);

        const timer = setTimeout(()=>{
            setDebouncedText(text);
        },1000)

        return ()=>{
            clearTimeout(timer);
        }
        
    },[language,text]);

    useEffect(()=>{
        console.log("making api request for " + debouncedText);

        /*
        axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q:text,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        });*/
    },[debouncedText]);

    return (
        <div>{translated}</div>
    )
}

export default Convert;