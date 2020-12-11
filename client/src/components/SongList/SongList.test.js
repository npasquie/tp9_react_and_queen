import React from "react"
import SongList from "../SongList"
import {render} from "@testing-library/react"

describe('SongList Component', () => {
    it('Displays a list of songs', () => {
        const mockSongList = ["songName1", "songName2"]
        const renderedSongList = render(<SongList list={mockSongList}/>)

        const song1 = renderedSongList.getByText("songName1")
        const song2 = renderedSongList.getByText("songName2")

        expect(song1).toHaveTextContent("songName1")
        expect(song2).toHaveTextContent("songName2")
    })
})
