import axios from 'axios';


export const ADD_SONG = 'ADD_SONG'
export const DELETE_SONGS = "DELETE_SONG"
export const FALSE_OPEN = "FALSE_OPEN"
export const TRUE_OPEN = "TRUE_OPEN"
export const REMOVE_SONG = "REMOVE_SONG"
export const SEARCH_SONG_SUCCESS = "SEARCH_SONG_SUCCESS"
export const SEARCH_SONG_STARTED = "SEARCH_SONG_STARTED"
export const SEARCH_SONG_FAILURE = "SEARCH_SONG_FAILURE"
export const UPDATE_SEARCH = "UPDATE_SEARCH"



export const searchSong= (searchSong ) => {
  return dispatch => {
    console.log(searchSong)
    dispatch(searchSongStarted());

    axios
      .get('http://localhost:8081/' + searchSong, {
        
      })
      .then(res => {
        console.log(res.data)
        dispatch(searchSongSuccess(res.data));
      })
      .catch(err => {
        dispatch(searchSongFailure(err.message));
      });
  };
};

const searchSongSuccess = songs => ({
    type: SEARCH_SONG_SUCCESS,
    payload: {
      songs
    }
  });
  
const searchSongStarted = () => ({
    type: SEARCH_SONG_STARTED
});
  
const searchSongFailure = error => ({
    type: SEARCH_SONG_FAILURE,
    payload: {
      error
    }
});


export const addSong = newSong => ({
    type: ADD_SONG,
    payload: newSong
})

export const deleteSongs = () => ({
    type: DELETE_SONGS,
    payload: ""
})

export const removeSong = (song) => ({
    type: REMOVE_SONG,
    payload: song
})

export const falseOpen = () => ({
    type: FALSE_OPEN,
    payload: false
})

export const trueOpen = () => ({
    type: TRUE_OPEN,
    payload: true
})

export const updateSearch = (newSearch) => ({
    type: UPDATE_SEARCH,
    payload: newSearch
})