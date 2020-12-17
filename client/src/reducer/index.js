import { ADD_SONG, DELETE_SONGS, FALSE_OPEN, REMOVE_SONG, TRUE_OPEN, SEARCH_SONG_SUCCESS, UPDATE_SEARCH, SET_SONGS, INITIALIZE_SELECTEDSONGS} from '../actions'

const initialState = {
    open : false,
    selectedSongs: [],
    songs: ""
};


export const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state,
                selectedSongs: [...state.selectedSongs, action.payload],
            }

        case DELETE_SONGS:
            return {
                ...state,
                selectedSongs: []
            }

        case REMOVE_SONG:
            return {
                ...state,
                selectedSongs: state.selectedSongs.filter(
                    songFromState => songFromState !== action.payload)
            }

        case INITIALIZE_SELECTEDSONGS:
            return {
                ...state,
                selectedSongs: []
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
        
        case SET_SONGS:
            return {
                ...state,
                songs: action.payload.songs
            }

        default:
            return state
    }
}