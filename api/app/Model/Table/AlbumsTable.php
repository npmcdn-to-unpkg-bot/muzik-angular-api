<?php
namespace App\Model\Table;

use Core\Model\Table\Table;

class AlbumsTable extends Table
{
    protected $table = 'albums';

    public function single($id)
    {
        return $this->query('SELECT *, albums.name as "albums_name", tracks.name as "track_name" FROM albums INNER JOIN tracks ON albums.id=tracks.album_id WHERE albums.id = ? ', [$id], false);
    }

    public function artist($id)
    {
        return $this->query('SELECT *, albums.name as "albums_name", albums.id as "albums_id" FROM albums INNER JOIN artists ON albums.artist_id=artists.id WHERE artists.id = ?', [$id], false);

    }

    public function rand()
    {
        return $this->query('SELECT * FROM albums ORDER BY rand() LIMIT 0, 10');
    }
}