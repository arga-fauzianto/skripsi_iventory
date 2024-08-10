<?php

namespace App\Models;

use CodeIgniter\Model;

class MasterBarang extends Model
{
    protected $table            = 'barang';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['kode_barang', 'jumlah', 'qty', 'nama_barang'];

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
        'jumlah' => 'required|integer|max_length[5]',
        'qty'    => 'required|integer|max_length[5]',
        'nama_barang' => 'required|string|max_length[33]'
    ];
    protected $validationMessages   = [
        'jumlah' => [
            'required'   => 'Jumlah barang wajib diisi',
            'integer'    => 'Jumlah barang harus berupa angka',
            'max_length' => 'Jumlah barang maksimal 5 digit'
        ],
        'qty' => [
            'required'   => 'Qty wajib diisi',
            'integer'    => 'Qty harus berupa angka',
            'max_length' => 'Qty maksimal 5 digit'
        ],
        'nama_barang' => [
            'reuired' => 'nama barang qajib di isi',
            'varchar' => 'nama barang harus berupa character',
            'max_length' => 'maksimal 33'
        ]
    ];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = ['generateKodeBarang'];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    // Method to generate kode_barang
    protected function generateKodeBarang(array $data)
    {
        if (empty($data['data']['kode_barang'])) {
            $data['data']['kode_barang'] = 'BRG-' . strtoupper(bin2hex(random_bytes(3)));
        }
        return $data;
    }
}
