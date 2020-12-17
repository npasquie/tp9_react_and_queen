import { ADD_SONG, DELETE_SONGS, FALSE_OPEN, REMOVE_SONG, TRUE_OPEN, SEARCH_SONG_SUCCESS, UPDATE_SEARCH} from '../actions'


const initialSelectedSong = {
    selectedSong : [""]
};

const initialOpen = {
    open : false
};

const initialSongList = {
    songList : [""]
};

export const songReducer = (state = initialSongList, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state,
                initialSelectedSong: [...state.selectedSongs, action.payload],
            }

        case DELETE_SONGS:
            return {
                ...state,
                initialSelectedSong: []
            }

        case REMOVE_SONG:
            return {
                ...state,
                initialSelectedSong: state.selectedSongs.filter(
                    songFromState => songFromState !== action.payload)
            }

        case FALSE_OPEN:
            return {
                ...state, 
                open: false
            }

        case TRUE_OPEN:
            return {
                ...state,
                open: true
            }
        
        case UPDATE_SEARCH:
            return {
                ...state, 
                search: action.payload
            }

        case SEARCH_SONG_SUCCESS:
            return {
                ...state,
                songList: action.payload.songs
            }

        default:
            return state
    }
}