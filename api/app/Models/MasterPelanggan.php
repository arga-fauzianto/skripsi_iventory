<?php

namespace App\Models;

use CodeIgniter\Model;

class MasterPelanggan extends Model
{
    protected $table            = 'master_pelanggan';
    protected $primaryKey       = 'id_pelanggan';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['nama_pelanggan', 'phone_number', 'email_address'];

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
        'nama_pelanggan'   => 'required|string|max_length[33]',
        'phone_number'  => 'required|max_length[13]',
        'email_address' => 'required|valid_email|max_length[33]',
    ];
    protected $validationMessages   = [
           'nama_pelanggan'   => [
            'required'    => 'Nama pelanggan harus diisi',
            'varchar' => 'Nama pelanggan harus berupa character',
            'max_length'  => 'Nama pelanggan tidak boleh lebih dari 33 karakter',
        ],
        'phone_number'  => [
            'required'    => 'Nomor telepon harus diisi',
            'char' => 'Nomor telephone harus berupa character',
            'max_length'  => 'Nomor telepon tidak boleh lebih dari 13 karakter',
        ],
        'email_address' => [
            'required'    => 'Alamat email harus diisi',
            'valid_email' => 'Alamat email tidak valid',
            'max_length'  => 'Alamat email tidak boleh lebih dari 33 karakter',
        ],];
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
