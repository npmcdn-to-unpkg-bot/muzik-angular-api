<?php
namespace Core\Controller;

use App\App;


class Controller
{
    protected function render(array $array, $debug = false)
    {

        header('Content-type: application/json');
        echo json_encode($array);


        die;
    }

    /**
     * Load model into controller
     * @param string $model
     * @return void
     */
    protected function loadModel($model)
    {
        $this->$model = $this->app()->getTable($model);
    }

    /**
     * App container
     * @return object
     */
    protected function app()
    {
        return App::getInstance();
    }
}