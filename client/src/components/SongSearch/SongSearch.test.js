import React from "react"
import SongSearch from "../SongSearch"
import {render, fireEvent} from "@testing-library/react"

describe('SongSearch Component', () => {
    it('Displays an empty input', () => {
        const renderedSongSearch = render(<SongSearch/>)
        const input = renderedSongSearch.getByPlaceholderText("Rechercher un titre ...")
        expect(input).toHaveValue("")
    })

    it('When we try to search for a song', async () => {
        const renderedSongSearch = render(<SongSearch/>)
        const input = renderedSongSearch.getByPlaceholderText("Rechercher un titre ...")
        fireEvent.change(input, {target: {value: 'azy'}})

        expect(input).toHaveTextContent(/^$/)
        expect(await renderedSongSearch.findByText('Crazy Little Thing Called Love')).toBeInTheDocument();
        expect(await renderedSongSearch.findByText('I Go Crazy')).toBeInTheDocument();
        expect(await renderedSongSearch.findByText('Stone Cold Crazy')).toBeInTheDocument();
    })
})
