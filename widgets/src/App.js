import React, { useState } from 'react';
//import Accordion from './components/Accordion';
//import Search from './components/Search';
import Dropdown from './components/Dropdown';

/*
const items = [
    {
        title:'What is React?',
        content:'Its a front end javascript framework.'
    },
    {
        title:'Why use React?',
        content:'It makes life easier.'
    },
    {
        title:'Who uses React?',
        content:'Many engineers use React.'
    }
]
*/
const options = [
    {
        label:'The color red',
        value: 'red'
    },
    {
        label:'The color blue',
        value: 'blue'
    },{
        label:'The color green',
        value: 'green'
    }

]

const App = () => {
    const [selected,setSelected] = useState(options[0]);
    const[showDropdown,setShowDropdown] = useState(true);

    return (
        <div>
            { showDropdown ?
                <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
                : null
            }
           <button onClick={()=>{setShowDropdown(!showDropdown);}}>Show Drop Down {showDropdown}</button>
           
        </div>
    )
};

export default App;