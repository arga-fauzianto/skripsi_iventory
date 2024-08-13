<?php

namespace App\Models;

use CodeIgniter\Model;

class AlamatPelanggan extends Model
{
    protected $table            = 'alamat_pelanggan';
    protected $primaryKey       = 'id_alamat_pelanggan';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['id_pelanggan', 'street', 'city', 'postal_code'];

    protected bool $allowEmptyInserts = false;
    protected bool $updateOnlyChanged = true;

    protected array $casts = [];
    protected array $castHandlers = [];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [
        'id_pelanggan'=> 'required|integer',
        'street'      => 'required|string|max_length[33]',
        'city'        => 'required|string|max_length[25]',
        'state'       => 'required|string|max_length[10]',
        'postal_code' => 'required|string|max_length[10]',
    ];
    protected $validationMessages   = [
        'id_pelanggan'   => [
            'required' => 'Id pelanggan harus diisi',
            'integer'  => 'ID pelanggan harus berupa angka',
        ],
        'street'      => [
            'required'    => 'Nama jalan harus diisi',
            'varchar' => 'Street harus di isi berupa character',
            'max_length'  => 'Nama jalan tidak boleh lebih dari 33 karakter',
        ],
        'city'        => [
            'required'    => 'Nama kota harus diisi',
            'varchar' => 'City harus di isi berupa character',
            'max_length'  => 'Nama kota tidak boleh lebih dari 25 karakter',
        ],
        'state'       => [
            'required'    => 'Nama provinsi harus diisi',
            'varchar' => 'State harus di isi berupa character',
            'max_length'  => 'Nama provinsi tidak boleh lebih dari 10 karakter',
        ],
        'postal_code' => [
            'required'    => 'Kode pos harus diisi',
            'char' => 'Postal code harus di isi berupa character',
            'max_length'  => 'Kode pos tidak boleh lebih dari 10 karakter',
        ],
    ];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];
}
