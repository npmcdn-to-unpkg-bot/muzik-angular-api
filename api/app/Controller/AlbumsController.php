<?php
namespace App\Controller;

use Core\Controller\Controller;

class AlbumsController extends Controller {
    public function __construct() {
        $this->loadModel('Albums');
    }

    public function getAll()
    {
        $albums = $this->Albums->all();
        $this->render(compact('albums'), true);
    }

    public function single($id)
    {
        $albums = $this->Albums->single($id);
        $cover = isset($albums['0']->cover) ? $albums['0']->cover : null;
        $name = isset($albums['1']->albums_name) ? $albums['1']->albums_name : null;

        $this->render(compact('albums', 'cover', 'name'), true);
    }

    public function artist($id)
    {
        $albums = $this->Albums->artist($id);
        $this->render(compact('albums', 'name'), true);
    }

    public function rand()
    {
        $albums = $this->Albums->rand();
        $this->render(compact('albums'), true);
    }
}