import React from "react"
import SongList from "../SongList"
import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux'
import { searchSong, updateSearch } from '../../actions';

const SongSearch = ({fetchSongs, search, updateSearch}) => {

    return <div>
        <TextField
            id="standard-basic"
            placeholder={"Rechercher un titre ..."}
            value={search}
            onChange={e => {
                fetchSongs(e.target.value)
                updateSearch(e.target.value)
            }}
        />
        <SongList selectionType={false}/>
    </div>
}

const mapStateToProps = state =>  ({
    search: state.search
})

const mapDispatchToProps = dispatch => ({
    fetchSongs: search => dispatch(searchSong(search)),
    updateSearch: newSearch => dispatch(updateSearch(newSearch))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongSearch)
