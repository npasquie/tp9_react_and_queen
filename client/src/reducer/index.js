import { ADD_SONG, DELETE_SONGS, FALSE_OPEN, REMOVE_SONG, TRUE_OPEN} from '../actions'

export const songReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                selectedSongs: [...state.selectedSongs, action.payload],
            }

        case DELETE_SONGS:
            return {
                selectedSongs: []
            }

        case REMOVE_SONG:
            return {
                selectedSongs: state.selectedSongs.filter(
                    songFromState => songFromState !== action.payload)
            }

        case FALSE_OPEN:
            return {
                open: false
            }

        case TRUE_OPEN:
            return {
                open: true
            }

        default:
            return state
    }
}