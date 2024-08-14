<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;

/**
 * Cross-Origin Resource Sharing (CORS) Configuration
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 */
class Cors extends BaseConfig
{

    public array $api = [
        'alloweOrigins' => ['http://localhost:3000/IventoryApps'],
        'allowedOriginPatterns' => [],
        'supportCredentials' => true,
        'allowedHeaders' => ['Authorization', 'Content-Type'],
        'exposedHeaders' => [],
        'allowedmethods' => ['GET', 'POST', 'PUT', 'DELETE'],
        'maxAge' => 7200
    ];

}

