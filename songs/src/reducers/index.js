import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title:'My Way', duration:'4:05'},
        {title:'Viva Las Vegas', duration:'4:05'},
        {title:'Lithium', duration:'4:05'},
        {title:'Strangers in the Night', duration:'4:05'}
    ]
}

const songSelectedReducer = (songSelected=null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload.song;
    }
    return songSelected;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:songSelectedReducer
})