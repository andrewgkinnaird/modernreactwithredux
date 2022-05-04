import React from "react";

class SearchBar extends React.Component{
    state = {
        term:'Hi!'
    };

    formOnSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.formOnSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="input" value={this.state.term} onChange={e => this.setState({term:e.target.value.toUpperCase()})}></input>
                    </div>
                    
                </form>
            </div>
        );
        
    }
}

export default SearchBar;