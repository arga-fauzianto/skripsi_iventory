<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->resource('masterbarang');
$routes->get('/', 'Home::index');
$routes->post('masterbarang', 'MasterBarang::create');
$routes->get('masterbarang', 'MasterBarang""index', ['filter' => 'cors']);

