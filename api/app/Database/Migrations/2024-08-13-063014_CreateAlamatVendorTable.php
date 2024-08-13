<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateAlamatVendorTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id_alamat_vendor' => [
                'type'           => 'INT',
                'constraint'     => 10,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'id_vendor' => [
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

        // Set Primary Key
        $this->forge->addKey('id_alamat_vendor', true);

        // Set Foreign Key
        $this->forge->addForeignKey('id_vendor', 'master_vendor', 'id_vendor', 'CASCADE', 'CASCADE');

        // Create Table
        $this->forge->createTable('alamat_vendor');
    }

    public function down()
    {
        //

        $this->forge->dropTable('alamat_vendor');
    }
}