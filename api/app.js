import express from 'express'
import bodyParser from 'body-parser'
import { allSongs } from "./assets/songs";

const app = express()

app.use(bodyParser.json())
app.use(function(_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/:search', (req, res) => {
  // the regex is used to send an empty list if the search is empty or contains only whitespaces
  const songsFound = req.params.search.replace(/\s/g, '').length > 0
        ?
      allSongs.filter(song => song.toLowerCase().includes(req.params.search.toLowerCase()))
        :
      []
  res.status(200).json(songsFound)
})

app.get('/', (req, res) => {
  res.status(400).json([])
})

export default app
