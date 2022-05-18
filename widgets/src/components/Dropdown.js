import React, { useEffect, useRef, useState } from 'react';


const Dropdown = ( {options,selected,onSelectedChange}) => {
    const[open,setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click',(event) => {
            if(ref.current.contains(event.target))
            {
                return;
            }

            setOpen(false);
        },{capture:true})
    },[]);

    const renderedItems = options.map((item) => {
        if(item.value !== selected.value)
            return (
                <div 
                    key={item.label} 
                    className= {'item'}
                    onClick={()=>{onSelectedChange(item)}}>
                    {item.label}
                </div>
            )
        else
            return null;
    })

    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className = 'label'>Select a Color</label>
                <div onClick={()=>{setOpen(!open)}} 
                    className={ `ui selection dropdown ${ open ? 'visible active' : ''} ` }>
                        <i className='dropdown icon'></i>
                        <div className='text'>
                            {selected.label}
                        </div>
                            <div className={  `menu ${ open ? 'visible transition' : '' }`    }>
                            {renderedItems}
                        </div>
                 </div>
                    
                
            </div>
        </div>
        
    )
}

export default Dropdown;