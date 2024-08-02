const Artist = require("./Artist");
const Genre = require("./Genre");
const  Album = require("./Album");
const Song = require("./Song");


Genre.belongsToMany(Artist, {through: 'genreArtist'})
Artist.belongsToMany(Genre, {through: 'genreArtist'})


 Album.belongsTo(Artist)
 Artist.hasMany(Album)

 
 Song.belongsTo(Album)
 Album.hasMany(Song)


Song.belongsToMany(Artist, {through: 'songArtists'})
Artist.belongsToMany(Song, {through: 'songArtists'})

Song.belongsToMany(Genre, {through: 'songGenre'})
Genre.belongsToMany(Song, {through: 'songGenre'})
