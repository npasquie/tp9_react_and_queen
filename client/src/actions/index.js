export const ADD_SONG = 'ADD_SONG'
export const DELETE_SONGS = "DELETE_SONG"
export const FALSE_OPEN = "FALSE_OPEN"
export const TRUE_OPEN = "TRUE_OPEN"
export const REMOVE_SONG = "REMOVE_SONG"

export const addSong = newSong => ({
    type: ADD_SONG,
    payload: newSong
})

export const deleteSongs = () => ({
    type: DELETE_SONGS,
    payload: ""
})

export const removeSong = (song, songFromState) => ({
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