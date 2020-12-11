import React from "react"
import SongList from "../SongList"
import {fireEvent, render} from "@testing-library/react"
import App from "./index";

describe('App Component', () => {
    it('When we try to add a song', () => {
        const mockSongList = ["songName"]
        const mockHandleSongClicked = jest.fn()
        const renderedSongList = render(<SongList list={mockSongList} handleSongClicked={mockHandleSongClicked}/>)

        const text = renderedSongList.getByText("songName")

        text.click()

        expect(text).toHaveTextContent("songName")
        expect(mockHandleSongClicked).toHaveBeenCalledTimes(1)
        expect(mockHandleSongClicked).toHaveBeenCalledWith("songName")
    })

    it('When we try to confirm our song selection', async () => {
        const renderedApp = render(<App/>)
        const input = renderedApp.getByPlaceholderText("Rechercher un titre ...")
        fireEvent.change(input, {target: {value: 'azy'}})
        const song = await renderedApp.findByText("I Go Crazy")
        song.click()
        const title = renderedApp.getByText("Titres selectionnés")

        expect(title).toBeInTheDocument()

        const button = renderedApp.getByText("Valider")
        button.click()
        const validationPopup = renderedApp.getByText("Your selected songs")

        expect(validationPopup).toBeInTheDocument()
        expect(title).not.toBeInTheDocument()
    })
})
