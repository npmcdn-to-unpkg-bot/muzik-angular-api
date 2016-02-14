<?php
namespace App\Model\Table;

use Core\Model\Table\Table;

class GenresTable extends Table
{
    protected $table = 'genres';

    public function single($id)
    {
        return $this->query('SELECT *, genres.name as "genre_name" FROM genres INNER JOIN genres_albums ON genres.id=genres_albums.genre_id INNER JOIN albums ON genres_albums.album_id=albums.id WHERE genres.id = ?', [$id], false);
    }
}