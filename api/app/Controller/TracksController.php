<?php
namespace App\Controller;

use Core\Controller\Controller;

class TracksController extends Controller {

    public function __construct() {
        $this->loadModel('Tracks');
    }

    public function getAll()
    {
        $tracks = $this->Tracks->all();

        $this->render(compact('tracks'), true);
    }
    public function single($id)
    {
        $tracks = $this->Tracks->single($id);
        $this->render(compact('tracks'), true);
    }
}