<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// Grup untuk 'api/masterbarang'
$routes->group('api/masterbarang', ['filter' => 'cors:api'], static function (RouteCollection $routes): void {
    // Resource routes for MasterBarang controller
    $routes->resource('/', ['controller' => 'MasterBarang']);

    // Handling CORS preflight OPTIONS request
    $routes->options('/', static function () {});
    $routes->options('/(:any)', static function () {});

    // Additional route for POST request to create
    $routes->post('/', 'MasterBarang::create');
    $routes->get('/', 'MasterBarang::index');
});



$routes->resource('mastervendor', ['controller' => 'VendorController']);
$routes->post('mastervendor', 'VendorController::create');
$routes->get('mastervendor', 'VendorController::index');
$routes->put('mastervendor/(:num)', 'VendorController::update/$1');
$routes->delete('mastervendor/(:num)', 'VendorController::delete/$1');

//pelanggan

$routes->resource('masterpelanggan', ['controller' => 'PelangganController', ['filter' => 'cors']]);
$routes->post('masterpelanggan', 'PelangganController::create', ['filter' => 'cors']);
$routes->get('masterpelanggan', 'PelangganController::index');
$routes->put('masterpelanggan/(:num)', 'PelangganController::update/$1');
$routes->delete('masterpelanggan/(:num)', 'PelangganController::delete/$1');



$routes->group('api', ['filter' => 'cors:api'], static function (RouteCollection $routes): void {
    $routes->resource('user');

    $routes->options('user', static function () {});
    $routes->options('user/(:any)', static function () {});
});
