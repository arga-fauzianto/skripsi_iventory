<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateBarangTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id_barang' => [
                'type'           => 'INT',
                'unsigned'       => true,
                'auto_increment' => true
            ],
            'kode_barang' => [
                'type'       => 'VARCHAR',
                'constraint' => '10',
                'null'       => false
            ],
            'nama_barang' => [
                'type'       => 'VARCHAR',
                'constraint' => '33',
                'null'       => false
            ],
            'jumlah' => [
                'type'       => 'INT',
                'constraint' => 5,
                'null'       => false
            ],
            'qty' => [
                'type'       => 'INT',
                'constraint' => 5,
                'null'       => false
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => true
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => true
            ],
        ]);

        $this->forge->addKey('id_barang', true);
        $this->forge->createTable('barang');
    }

    public function down()
    {
        $this->forge->dropTable('barang');
    }
}