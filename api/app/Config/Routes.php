<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->resource('masterbarang');
// $routes->get('/', 'Home::index');
$routes->post('masterbarang', 'MasterBarang::create');
$routes->get('masterbarang', 'MasterBarang::index');

$routes->resource('mastervendor', ['controller' => 'VendorController']);
$routes->post('mastervendor', 'VendorController::create');
$routes->get('mastervendor', 'VendorController::index');
$routes->put('mastervendor/(:num)', 'VendorController::update/$1');
$routes->delete('mastervendor/(:num)', 'VendorController::delete/$1');

//pelanggan

$routes->resource('masterpelanggan', ['controller' => 'PelangganController']);
$routes->post('masterpelanggan', 'PelangganController::create');
$routes->get('masterpelanggan', 'PelangganController::index');
$routes->put('masterpelanggan/(:num)', 'PelangganController::update/$1');
$routes->delete('masterpelanggan/(:num)', 'PelangganController::delete/$1');


// $routes->resou('mastervendor', function($routes) {
//     $routes->get('/', 'VendorController::index'); // Menampilkan semua vendor
//     $routes->get('/(:num)', 'VendorController::show/$1'); // Menampilkan vendor berdasarkan ID
//     $routes->post(' /', 'VendorController::create'); // Menambahkan vendor baru
//     $routes->put('/(:num)', 'VendorController::update/$1'); // Mengupdate vendor berdasarkan ID
//     $routes->delete('/(:num)', 'VendorController::delete/$1'); // Menghapus vendor berdasarkan ID
// });

