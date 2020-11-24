import React from "react"

function SongList(props) {

    let songs = props.list.map((song,i) => (
        <li key={i}>
            <p onClick={props.handleSongClicked(song)}>{song}</p>
        </li>
    ))
    return (
        <>
            <br/>
            <ul>
                {songs}
            </ul>
        </>
    )
}

export default SongList