import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const languages = [
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Japanese',
        value:'ja'
    }
]

const Translate = () => {
    const [language,setLanguage] = useState(languages[0]);
    const [text,setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>{setText(e.target.value); console.log(text)} } />
                </div>
                
            </div>
            
            <Dropdown  
                label='Select a Language'
                options={languages}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert
                language={language}
                text={text}
            />

        </div>
    )
}

export default Translate;