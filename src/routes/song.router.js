const { getAll, create, getOne, remove, update, setArtists, setGenres } = require('../controllers/song.controllers');
const express = require('express');

const routerSong = express.Router();

routerSong.route('/')
    .get(getAll)
    .post(create);

// /songs/:id/artists

routerSong.route('/:id/artists')
    .post(setArtists)

routerSong.route('/:id/genres')
    .post(setGenres)

routerSong.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerSong;