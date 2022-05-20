import React, { useEffect, useState } from "react";
import axios from 'axios';

const Convert = ({language,text}) => {
    const [translated,setTranslated] = useState('');
    const [debouncedText,setDebouncedText] = useState(translated);

    useEffect(()=>{
        
        console.log(language);
        const timer = setTimeout(()=>{
            console.log(language);
            setDebouncedText(text);
        },1000)

        return ()=>{
            clearTimeout(timer);
        }
        
    },[language,text]);

    useEffect(()=>{
        
        const  getGoogleTranslation = async() => {
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:text,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(response.data.data.translations[0].translatedText);
        }
        getGoogleTranslation();

    },[debouncedText,language]);

    return (
        <div>{translated}</div>
    )
}

export default Convert;