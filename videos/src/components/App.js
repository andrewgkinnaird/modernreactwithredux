import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YouTube from '../APIs/YouTube';

class App extends React.Component{

    state = {videos:[]};

    onTermSubmit = async (term) => {
        
        const response = await YouTube.get('/search', {
            params:{
                q:term
            }
        })

        this.setState({videos:response.data.items});
    }

    render(){
        return (
            <div>
                Hi!
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos.
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
    
}

export default App;