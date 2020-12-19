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
import { falseOpen } from '../../actions';
import {connect} from 'react-redux'

const App = ({ handleClose, open, selectedSongs}) => {

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
                    {selectedSongs.map(song => <p key={song}>{song}</p>)}
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
        <SongList selectionType={true}/>
        <h1>Ici on aime Queen</h1>
        <SongSearch/>
        {dialog}
    </div>
}

const mapStateToProps = state =>  (
    {open: state.open, selectedSongs: state.selectedSongs})

const mapDispatchToProps = dispatch => ({
    handleClose: () => dispatch(falseOpen())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)