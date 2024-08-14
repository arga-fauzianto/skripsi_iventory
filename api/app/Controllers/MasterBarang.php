<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\MasterBarang as MasterBarangModel;

class MasterBarang extends ResourceController
{
    protected $modelName = MasterBarangModel::class;
    protected $format    = 'json';

    public function index()
    {
        try {
            $data = $this->model->findAll();
            return $this->respond($data);
        } catch (\Exception $e) {
            return $this->failServerError('Error fetching data: ' . $e->getMessage());
        }
    }

    public function show($id_barang = null)
    {
        try {
            $data = $this->model->find($id_barang);
            if ($data) {
                return $this->respond($data);
            }
            return $this->failNotFound('Data not found');
        } catch (\Exception $e) {
            return $this->failServerError('Error fetching data: ' . $e->getMessage());
        }
    }

    public function create()
    {
        $data = $this->request->getPost();
        var_dump($data);
        die();
        
        // Validate data
        if (!$this->validate($this->model->getValidationRules(), $this->model->getValidationMessages())) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        // Insert data
        if ($this->model->save($data)) {
            $insertID = $this->model->getInsertID();
            $newData = $this->model->find($insertID);

            // Log data
            log_message('info', 'Data baru disimpan: ' . print_r($newData, true));

            return $this->respondCreated([
                'message' => 'data berhasil disimpan',
                'data'    => $newData
            ]);
        } else {
            return $this->fail('data gagal disimpan');
        }
    }

    public function update($id_barang = null)
    {
        try {
            $data = $this->request->getRawInput();
            log_message('info', 'Data received for update: ' . print_r($data, true));

            // Validate data
            if (!$this->validate($this->model->getValidationRules(), $this->model->getValidationMessages())) {
                return $this->failValidationErrors($this->validator->getErrors());
            }

            // Update data
            if ($this->model->update($id_barang, $data)) {
                return $this->respond([
                    'message' => 'Data berhasil diupdate'
                ]);
            } else {
                return $this->fail('Data gagal diupdate');
            }
        } catch (\Exception $e) {
            return $this->failServerError('Error updating data: ' . $e->getMessage());
        }
    }

    public function delete($id_barang = null)
    {
        try {
            if ($this->model->delete($id_barang)) {
                return $this->respondDeleted([
                    'message' => 'Data berhasil dihapus'
                ]);
            } else {
                return $this->fail('Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return $this->failServerError('Error deleting data: ' . $e->getMessage());
        }
    }
}
