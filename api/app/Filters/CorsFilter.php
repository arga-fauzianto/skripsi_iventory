<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class CorsFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // Set CORS headers for all requests
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        $method = $_SERVER['REQUEST_METHOD'];

        // Handle preflight requests (OPTIONS requests)
        // if ($request->getMethod() === 'options') {
        //     $response = service('response');
        //     $response->setStatusCode(200);
        //     $response->send();
        //     exit;
        // }
        if($method == "OPTIONS"){
            die();
        };
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Add CORS headers to all responses
      
    }
}
