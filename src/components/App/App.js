import './App.css'
import SongSearch from '../SongSearch'
import SongList from "../SongList/SongList";
import React, {useState} from "react"

function App() {
    const [selectedSongs, setSelectedSongs] = useState([])

    const handleSongClicked = song => {
        // verifies if selected song is already in the array
        if (selectedSongs.some(songFromState => songFromState === song))
            setSelectedSongs(selectedSongs.filter(
                songFromState => songFromState !== song
            ))
        else
            setSelectedSongs([...selectedSongs, song])
    }

    const handleValidation = () => {
        alert(selectedSongs.join(', '))
        setSelectedSongs([])
    }

    const optionalTitle =
            selectedSongs.length > 0
        ?
            <>
                <h2>Titres selectionnés</h2>
                <div
                    onClick={() => handleValidation()}
                    className={"validate"}
                >✅ Valider ✅</div>
            </>
        :
            null

    return (
        <div className="App">
            <br/>
            {optionalTitle}
            <SongList list={selectedSongs} handleSongClicked={handleSongClicked}/>
            <h1>Ici on aime Queen</h1>
            <br/>
            <SongSearch handleSongClicked={handleSongClicked}/>
        </div>
    )
}

export default App
