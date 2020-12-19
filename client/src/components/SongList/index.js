import React from "react"
import "./SongList.css"
import { connect } from 'react-redux';

const SongList = props => {
    console.log(props)
    let songs = props.list.map((song, i) => (
        <p key={i} onClick={() => props.handleSongClicked(song)}>{song}</p>
    ))
    return <>
        {songs}
    </>
}

const mapStateToProps = state =>  ({
    list: state.selectedSongs,
})

export default connect(mapStateToProps)(SongList)
