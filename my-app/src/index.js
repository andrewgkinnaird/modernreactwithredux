// import react and reactDom libraries
import React from 'react';
import ReactDOM  from 'react-dom';

// create a react component
const App = function(){
    let message = "Hi there!!!"
    return (
        <div>
            <button style={{backgroundColor:'red'}}>{message}</button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// view react component on screen