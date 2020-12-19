import songReducer from '../reducer/index'
import * as actions from '../actions/index'

describe('song reducer', () => {

    it('test initial state', () => {
        expect(songReducer(undefined, {})).toEqual({
            open: false,
            selectedSongs: [],
            songs: []
        }); 
    });

    it('can addSong', () => {
        expect(songReducer(undefined, {type: actions.ADD_SONG, payload: "We are the champions"})).toEqual({
            open: false,
            selectedSongs: ["We are the champions"],
            songs: []
        }); 
    });

    it('can deleteSong', () => {
        expect(songReducer(undefined, {type: actions.DELETE_SONGS})).toEqual({
            open: false,
            selectedSongs: [],
            songs: []
        }); 
    });

    it('can change open to true', () => {
        expect(songReducer(undefined, {type: actions.TRUE_OPEN})).toEqual({
            open: true,
            selectedSongs: [],
            songs: []
        }); 
    });

    it('can change open to false', () => {
        expect(songReducer(undefined, {type: actions.FALSE_OPEN})).toEqual({
            open: false,
            selectedSongs: [],
            songs: []
        }); 
    });
    
    it('can remove a song', () => {
        expect(songReducer({open: false, selectedSongs: ["I sing"], songs:["song", "sang"]}, {type: actions.REMOVE_SONG, payload: "I sing"}))
        .toEqual({
            open: false,
            selectedSongs: [],
            songs: ["song", "sang"]
        }); 
    });

});


