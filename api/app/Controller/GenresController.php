<?php
namespace App\Controller;

use Core\Controller\Controller;

class GenresController extends Controller {

    public function __construct() {
        $this->loadModel('Genres');
    }

    public function getAll()
    {
        $genres = $this->Genres->all();

        $this->render(compact('genres'), true);
    }
    public function single($id)
    {
        $genres = $this->Genres->single($id);
        $this->render(compact('genres'), true);
    }
}