<?php
namespace App\Model\Table;

use Core\Model\Table\Table;

class TracksTable extends Table
{
    protected $table = 'tracks';

    public function single($id)
    {
        return $this->query('SELECT * FROM tracks WHERE `id` = ?', [$id], true);
    }
}

