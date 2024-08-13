<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\MasterVendor;
use App\Models\AlamatVendor;

class VendorController extends BaseController
{
    protected $masterVendorModel;
    protected $alamatVendorModel;
    protected $format    = 'json';

    public function __construct()
    {
        $this->masterVendorModel = new MasterVendor();
        $this->alamatVendorModel = new AlamatVendor();
    }

    // Mengambil semua vendor dengan alamat mereka
    public function index()
    {
        $vendors = $this->masterVendorModel
            ->select('master_vendor.*, alamat_vendor.street, alamat_vendor.city, alamat_vendor.state, alamat_vendor.postal_code')
            ->join('alamat_vendor', 'master_vendor.id_vendor = alamat_vendor.id_vendor')
            ->findAll();

        return $this->response->setJSON($vendors);
    }

    // Membuat vendor baru dengan alamat
    public function create()
    {
        // Ambil data dari request
        $data = $this->request->getPost();
    
        // Pisahkan data untuk master_vendor dan alamat_vendor
        $masterVendorData = [
            'nama_vendor'   => $data['nama_vendor'],
            'phone_number'  => $data['phone_number'],
            'email_address' => $data['email_address'],
        ];
    
        $alamatVendorData = [
            'street'       => $data['street'],
            'city'         => $data['city'],
            'state'        => $data['state'],
            'postal_code'  => $data['postal_code'],
        ];
    
        // Masukkan data master_vendor
        if ($this->masterVendorModel->insert($masterVendorData)) {
            $idVendor = $this->masterVendorModel->insertID();
    
            // Tambahkan id_vendor ke data alamat_vendor
            $alamatVendorData['id_vendor'] = $idVendor;
    
            // Masukkan data alamat_vendor
            if ($this->alamatVendorModel->insert($alamatVendorData)) {
                return $this->response->setStatusCode(ResponseInterface::HTTP_CREATED)
                                      ->setJSON(['message' => 'Vendor dan alamat berhasil dibuat', 'data' => $data]);
            } else {
                return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                      ->setJSON(['errors' => $this->alamatVendorModel->errors()]);
            }
        } else {
            return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                  ->setJSON(['errors' => $this->masterVendorModel->errors()]);
        }
    }

    // Mengupdate vendor dan alamat yang ada
    public function update($id = null)
    {
        $data = $this->request->getRawInput();

        if ($this->masterVendorModel->update($id, $data)) {
            if ($this->alamatVendorModel->where('id_vendor', $id)->set($data)->update()) {
                return $this->response->setJSON(['message' => 'Vendor dan alamat berhasil diupdate']);
            } else {
                return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                      ->setJSON(['errors' => $this->alamatVendorModel->errors()]);
            }
        } else {
            return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                  ->setJSON(['errors' => $this->masterVendorModel->errors()]);
        }
    }

    // Menghapus vendor dan alamat mereka
    public function delete($id = null)
    {
        if ($this->masterVendorModel->delete($id)) {
            $this->alamatVendorModel->where('id_vendor', $id)->delete();
            return $this->response->setStatusCode(ResponseInterface::HTTP_NO_CONTENT)
                                  ->setJSON(['message' => 'Vendor dan alamat berhasil dihapus']);
        } else {
            return $this->response->setStatusCode(ResponseInterface::HTTP_BAD_REQUEST)
                                  ->setJSON(['errors' => $this->masterVendorModel->errors()]);
        }
    }
}
