import React from "react"
import "./SongList.css"
import { connect } from 'react-redux';
import {
    addSong, deleteSongs,
    removeSong, setSongs, trueOpen,
} from "../../actions";
import Button from "@material-ui/core/Button";

const SongList = ({selectionType, selectedSongs, addSong, searchedSongs,
                      removeSong, handleOpen, deleteSongs}) => {

    const list = selectionType ? selectedSongs : searchedSongs
    const optionalTitle =
        selectedSongs.length > 0 && selectionType
            ?
            <>
                <h2>Titres selectionnés</h2>
                <Button variant="contained" color="primary" onClick={() => {
                    handleOpen()
                }}
                        className={"validate"}>
                    Valider
                </Button>

            </>
            :
            null

    const songs = list.map((song, i) => (
        <p key={i} onClick={() => {
            if (selectedSongs.some(songFromState => songFromState === song))
                removeSong(song)
            else
                addSong(song)
        }}>{song}</p>
    ))

    return <>
        {optionalTitle}
        {songs}
    </>
}

const mapStateToProps = state =>  ({
    selectedSongs: state.selectedSongs,
    searchedSongs: state.songs
})

const mapDispatchToProps = dispatch => ({
    addSong: song => dispatch(addSong(song)),
    removeSong: song => dispatch(removeSong(song)),
    handleOpen: () => dispatch(trueOpen()),
    setSongs: songs => dispatch(setSongs(songs)),
    deleteSongs: () => dispatch(deleteSongs())
})

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
