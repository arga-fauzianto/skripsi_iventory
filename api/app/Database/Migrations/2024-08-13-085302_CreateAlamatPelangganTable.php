<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateAlamatPelangganTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id_alamat_pelanggan' => [
                'type'           => 'INT',
                'constraint'     => 10,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'id_pelanggan' => [
                'type'       => 'INT',
                'constraint' => 10,
                'unsigned'   => true,
            ],
            'street' => [
                'type'       => 'VARCHAR',
                'constraint' => 33,
            ],
            'city' => [
                'type'       => 'VARCHAR',
                'constraint' => 25,
            ],
            'state' => [
                'type'       => 'VARCHAR',
                'constraint' => 10,
            ],
            'postal_code' => [
                'type'       => 'CHAR',
                'constraint' => 10,
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => true
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => true
            ]
            
        ]);

        $this->forge->addKey('id_alamat_pelanggan', true);

        // Set Foreign Key
        $this->forge->addForeignKey('id_pelanggan', 'master_pelanggan', 'id_pelanggan', 'CASCADE', 'CASCADE');

        // Create Table
        $this->forge->createTable('alamat_pelanggan');
    }

    public function down()
    {
        //
        $this->forge->dropTable('alamat_pelanggan');
    }
}
