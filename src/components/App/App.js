import './App.css';
import SongSearch from '../SongSearch'
import React, {useState} from "react"

function App() {
    const [selectedSongs, setSelectedSongs] = useState([])

    // todo : verifier la best-practice de nommage
    function handleSongClicked(song){
        setSelectedSongs([...selectedSongs, song])
    }

    // todo : virer ca
    console.log(selectedSongs)

  return (
    <div className="App">
        <br/>
        <h1>Ici on aime Queen</h1>
        <br/>
        <SongSearch handleSongClicked={handleSongClicked()}/>
    </div>
  )
}

export default App
