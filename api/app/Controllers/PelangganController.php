<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\MasterPelanggan;
use App\Models\AlamatPelanggan;

class PelangganController extends BaseController

{
    protected $masterPelangganModel;
    protected $alamatPelangganModel;
    protected $format    = 'json';

    public function __construct()
    {
        $this->masterPelangganModel = new MasterPelanggan();
        $this->alamatPelangganModel = new AlamatPelanggan();
    }

    public function index()
    {
        //

        $pelanggans = $this->masterPelangganModel
            ->select('master_pelanggan.*, alamat_pelanggan.street, alamat_pelanggan.city, alamat_pelanggan.state, alamat_pelanggan.postal_code')
            ->join('alamat_pelanggan', 'master_pelanggan.id_pelanggan = alamat_pelanggan.id_pelanggan')
            ->findAll();

        return $this->response->setJSON($pelanggans);
    }

    public function create()
    {
        // Ambil data dari request
        $data = $this->request->getPost();
    
        // Pisahkan data untuk master_vendor dan alamat_vendor
        $masterPelangganData = [
            'nama_pelanggan'   => $data['nama_pelanggan'],
            'phone_number'  => $data['phone_number'],
            'email_address' => $data['email_address'],
        ];
    
        $alamatPelangganData = [
            'street'       => $data['street'],
            'city'         => $data['city'],
            'state'        => $data['state'],
            'postal_code'  => $data['postal_code'],
        ];
    
        // Masukkan data master_vendor
        if ($this->masterPelangganModel->insert($masterPelangganData)) {
            $idPelanggan = $this->masterPelangganModel->insertID();
    
            // Tambahkan id_vendor ke data alamat_vendor
            $alamatPelangganData['id_pelanggan'] = $idPelanggan;
    
            // Masukkan data alamat_vendor
            if ($this->alamatPelangganModel->insert($alamatPelangganData)) {
                return $this->response->setStatusCode(ResponseInterface::HTTP_CREATED)
                                      ->setJSON(['message' => 'Pelanggan dan alamat berhasil dibuat', 'data' => $data]);
            } else {
                return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                      ->setJSON(['errors' => $this->alamatPelangganModel->errors()]);
            }
        } else {
            return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                  ->setJSON(['errors' => $this->masterPelangganModel->errors()]);
        }
    }

    public function update($id = null)
    {
        $data = $this->request->getRawInput();

        if ($this->masterPelangganModel->update($id, $data)) {
            if ($this->alamatPelangganModel->where('id_pelanggan', $id)->set($data)->update()) {
                return $this->response->setJSON(['message' => 'pelanggan dan alamat berhasil diupdate']);
            } else {
                return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                      ->setJSON(['errors' => $this->alamatPelangganModel->errors()]);
            }
        } else {
            return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                  ->setJSON(['errors' => $this->masterPelangganModel->errors()]);
        }
    }
}
