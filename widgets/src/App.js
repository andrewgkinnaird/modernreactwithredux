import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';


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

    return (
        <div>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    label='Choose a color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}/>
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
            
        </div>
    )
};

export default App;