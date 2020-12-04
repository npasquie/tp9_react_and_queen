import React, {useState} from "react"
import axios from 'axios'
import SongList from "../SongList"

const SongSearch = props => {
    const [search, setSearch] = useState('')
    const [songList, setSongList] = useState([])

    const fetchSongs = (search) => {
        axios.get('http://localhost:8081/'+search)
            .then(res => {setSongList(res.data)})
            .catch(() => {setSongList([])})
    }

    return <div>
        <input
            type={"text"}
            size={25}
            placeholder={"Rechercher un titre ..."}
            value={search}
            onChange={e => {
                fetchSongs(e.target.value)
                setSearch(e.target.value)
            }}
        />
        <SongList
            list={songList}
            handleSongClicked={props.handleSongClicked}
        />
    </div>
}

export default SongSearch
