import './App.css'
import SongSearch from '../SongSearch'
import SongList from "../SongList";
import React, {useState} from "react"
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
import { addSong, deleteSongs, trueOpen, falseOpen, removeSong } from '../../actions';
import {useDispatch} from 'react-redux'


const App = () => {
    const [selectedSongs, setSelectedSongs] = useState([])
    const [open, setOpen] = useState(false)
    const [songs, setSongs] = useState()
    const dispatch = useDispatch();

    const handleSongClicked = song => {
        // verifies if selected song is already in the array
        if (selectedSongs.some(songFromState => songFromState === song))
            //setSelectedSongs(selectedSongs.filter(
                //songFromState => songFromState !== song
            //))
            dispatch(removeSong(song))
        else
            // setSelectedSongs([...selectedSongs, song])
            dispatch(addSong)
    }

    const handleValidation = () => {
        handleOpen()
        setSongs(selectedSongs.join(', '))
        //setSelectedSongs([])
        dispatch(deleteSongs)
        return selectedSongs.join(', ')
    }

    const handleClose = () => {
        // setOpen(false)
        dispatch(falseOpen)
    }

    const handleOpen = () => {
        //setOpen(true)
        dispatch(trueOpen)
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

export default App
