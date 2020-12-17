import React, {useState} from "react"
import axios from 'axios'
import PropType from "prop-types"
import SongList from "../SongList"
import TextField from '@material-ui/core/TextField'
import {connect, useDispatch} from 'react-redux'
import { searchSong, updateSearch } from '../../actions';

const SongSearch = ({fetchSongs, songList, search, updateSearch}, props) => {
    // const [search, setSearch] = useState('')

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
        <SongList
            list={songList}
            handleSongClicked={props.handleSongClicked}
        />
    </div>
}

const mapStateToProps = state =>  ({
    songList: state.songList,
    search: state.search
})

const mapDispatchToProps = dispatch => ({
    fetchSongs: search => dispatch(searchSong(search)),
    updateSearch: newSearch => dispatch(updateSearch(newSearch))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongSearch)
