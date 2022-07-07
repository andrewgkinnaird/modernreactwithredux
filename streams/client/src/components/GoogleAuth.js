import React from "react";

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '88967786819-hp8dvj3kgeii2ngjnbc9gin4r35lonfp.apps.googleusercontent.com',
                scope:'email',
                plugin_name:'Streamy'
            })
        });
    }
    render(){
        return (
            <div>Auth</div>
        );
    }
}

export default GoogleAuth;