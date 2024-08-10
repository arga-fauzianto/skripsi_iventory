<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;
use App\Models\MasterBarang as MasterBarangModel;

class MasterBarang extends ResourceController
{
    protected $modelName = MasterBarangModel::class;
    protected $format    = 'json';

    /**
     * Return an array of resource objects, themselves in array format.
     *
     * @return ResponseInterface
     */
    public function index()
    {
        // Implementasi untuk mengambil semua data barang
        $data = $this->model->findAll();
        return $this->respond($data);
    }

    /**
     * Return the properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function show($id = null)
    {
        // Implementasi untuk mengambil data barang berdasarkan ID
        $data = $this->model->find($id);
        if ($data) {
            return $this->respond($data);
        }
        return $this->failNotFound('Data not found');
    }

    /**
     * Return a new resource object, with default properties.
     *
     * @return ResponseInterface
     */
    public function new()
    {
        // Biasanya digunakan untuk menampilkan form pembuatan data (jika diperlukan)
        return $this->respond(['message' => 'Display form for creating a new resource']);
    }

    /**
     * Create a new resource object, from "posted" parameters.
     *
     * @return ResponseInterface
     */
    public function create()
    {
        // Mengambil data dari request
        $data = $this->request->getPost();

        // Validasi data
        if (!$this->validate($this->model->getValidationRules(), $this->model->getValidationMessages())) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        // Simpan data ke database
        if ($this->model->save($data)) {
            return $this->respondCreated(['message' => 'data berhasil disimpan', 'data' => $data]);

        } else {
            return $this->fail('data gagal disimpan');
        }
    }

    /**
     * Return the editable properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function edit($id = null)
    {
        // Biasanya digunakan untuk menampilkan form edit data (jika diperlukan)
        return $this->respond(['message' => 'Display form for editing a resource']);
    }

    /**
     * Add or update a model resource, from "posted" properties.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function update($id = null)
    {
        // Mengambil data dari request
        $data = $this->request->getRawInput();

        // Validasi data
        if (!$this->validate($this->model->getValidationRules(), $this->model->getValidationMessages())) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        // Update data di database
        if ($this->model->update($id, $data)) {
            return $this->respond(['message' => 'data berhasil diupdate']);
        } else {
            return $this->fail('data gagal diupdate');
        }
    }

    /**
     * Delete the designated resource object from the model.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function delete($id = null)
    {
        // Hapus data berdasarkan ID
        if ($this->model->delete($id)) {
            return $this->respondDeleted(['message' => 'data berhasil dihapus']);
        } else {
            return $this->fail('data gagal dihapus');
        }
    }
}
