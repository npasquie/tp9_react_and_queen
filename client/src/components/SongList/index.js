import React from "react"
import "./SongList.css"

const SongList = props => {
    console.log(props)
    let songs = props.list.map((song, i) => (
        <p key={i} onClick={() => props.handleSongClicked(song)}>{song}</p>
    ))
    return <>
        {songs}
    </>
}

export default SongList
