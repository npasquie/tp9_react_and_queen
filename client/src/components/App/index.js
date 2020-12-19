import './App.css'
import SongSearch from '../SongSearch'
import SongList from "../SongList";
import React from "react"
import Button from '@material-ui/core/Button'
import {
    AppBar,
    Typography,
    Toolbar,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogContentText,
    DialogActions
} from '@material-ui/core';
import { addSong, deleteSongs, trueOpen, falseOpen, removeSong, setSongs, initializeSelectedSongs } from '../../actions';
import { connect} from 'react-redux'

const App = ({handleOpen, handleClose, open, addSong, deleteSongs, setSongs, songs, selectedSongs}) => {

    const handleSongClicked = song => {
        // verifies if selected song is already in the array
        if (selectedSongs.some(songFromState => songFromState === song))
            //setSelectedSongs(selectedSongs.filter(
                //songFromState => songFromState !== song
            //))
            removeSong(song)
        else
            addSong(song)
    }

    const handleValidation = () => {
        handleOpen()
        setSongs(selectedSongs.join(', '))
        deleteSongs()
        return selectedSongs.join(', ')
    }


    const optionalTitle = 
        selectedSongs.length > 0
            ?
            <>
                <h2>Titres selectionnés</h2>
                <Button variant="contained" color="primary" onClick={() => handleValidation()}
                        className={"validate"}>
                    Valider
                </Button>

            </>
            :
            null

    const dialog =
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            animation="false"
        >
            <DialogTitle id="alert-dialog-title" animation="false">{'Your selected songs'}</DialogTitle>
            <DialogContent animation="false">
                <DialogContentText id="alert-dialog-description" animation="false">
                    {songs}
                </DialogContentText>
            </DialogContent>
            <DialogActions animation="false">
                <Button animation="false" onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>

    return <div className="App">
        <AppBar position="static" animation="false">
            <Toolbar animation="false">
                <Typography variant="h6">
                    Queen Songs
                </Typography>
            </Toolbar>
        </AppBar>
        {optionalTitle}
        <SongList list={selectedSongs} handleSongClicked={handleSongClicked}/>
        <h1>Ici on aime Queen</h1>
        <SongSearch handleSongClicked={handleSongClicked}/>
        {dialog}
    </div>
}

const mapStateToProps = state =>  ({
    open: state.open,
    songs: state.songs,
    selectedSongs: state.selectedSongs
})

const mapDispatchToProps = dispatch => ({
    handleClose: () => dispatch(falseOpen()),
    handleOpen: () => dispatch(trueOpen()),
    addSong: song => dispatch(addSong(song)),
    removeSong: song => dispatch(removeSong(song)),
    deleteSongs: () => dispatch(deleteSongs()),
    setSongs: songs => dispatch(setSongs(songs)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
