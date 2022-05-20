import React, { useState } from 'react';
//import Accordion from './components/Accordion';
//import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
    

    return (
        <div>
            <Translate />
        </div>
    )
};

export default App;