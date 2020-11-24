import React, {useState} from "react"
import SongList from "./SongList/SongList"
import { allSongs } from "../assets/songs"

function SongSearch(props) {
    const [search, setSearch] = useState('')
    // filter songs by including search, not case-sensitive, the regex is used to display the full list if the search
    // is empty or contains only whitespaces
    const filteredList = search.replace(/\s/g, '').length > 0 ?
        allSongs.filter(song => song.toLowerCase().includes(search.toLowerCase())) :
        allSongs

    return (
        <>
            <input
                type={"text"}
                size={25}
                placeholder={"Rechercher un titre ..."}
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <SongList
                list={filteredList}
                handleSongClicked={props.handleSongClicked}
            />
        </>
    )
}

export default SongSearch