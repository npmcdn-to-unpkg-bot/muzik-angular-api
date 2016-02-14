<?php
/**
 * Route de base
 */


/**
 * Albums
 */
$router->get('/albums', 'Albums->getAll', 'albums.getAll');
$router->get('/albums/rand', 'Albums->rand', 'albums.rand');
$router->get('/albums/:id:', 'Albums->single', 'albums.single')->with('id', '[0-9]+');
$router->get('/albums/artist/:id:', 'Albums->artist', 'albums.artist')->with('id', '[0-9]+');


/**
 * Artists
 */
$router->get('/artists', 'Artists->getAll', 'artists.getAll');
$router->get('/artists/:id:', 'Artists->single', 'artists.single')->with('id', '[0-9]+');


/**
 * Tracks
 */
$router->get('/tracks', 'Tracks->getAll', 'tracks.getAll');
$router->get('/tracks/:id:', 'Tracks->single', 'tracks.single')->with('id', '[0-9]+');

/**
 * Genres
 */

$router->get('/genres', 'Genres->getAll', 'genres.getAll');
$router->get('/genres/:id:', 'genres->single', 'genres.single')->with('id', '[0-9]+');