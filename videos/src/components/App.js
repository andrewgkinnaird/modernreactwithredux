import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../APIs/YouTube';

class App extends React.Component{
    onTermSubmit = (term) => {
        console.log(`${term} passed to App component`);
        YouTube.get('/search', {
            params:{
                q:term
            }
        })
    }

    render(){
        return (
            <div>
                Hi!
                <SearchBar onTermSubmit={this.onTermSubmit}/>
            </div>
        )
    }
    
}

export default App;