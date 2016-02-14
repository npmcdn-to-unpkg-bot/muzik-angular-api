<?php
namespace App\Model\Table;

use Core\Model\Table\Table;

class ArtistsTable extends Table
{
    protected $table = 'artists';

    public function single($id)
    {
        return $this->query('SELECT * FROM artists WHERE `id` = ?', [$id], true);
    }
}