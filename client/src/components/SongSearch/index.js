import React, {useState} from "react"
import axios from 'axios'
import SongList from "../SongList"
import TextField from '@material-ui/core/TextField'

const SongSearch = props => {
    const [search, setSearch] = useState('')
    const [songList, setSongList] = useState([])

    const fetchSongs = (search) => {
        axios.get('http://localhost:8081/'+search)
            .then(res => {setSongList(res.data)})
            .catch(() => {setSongList([])})
    }

    return <div>
        <TextField
            id="standard-basic"
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
