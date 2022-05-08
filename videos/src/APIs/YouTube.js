import axios from 'axios';

const KEY = 'AIzaSyDYb7blJ3a20Masr8z6TUz-3H71y5WijCU';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        type:'video',
        key:KEY
    }
})