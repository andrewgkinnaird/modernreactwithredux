import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
};