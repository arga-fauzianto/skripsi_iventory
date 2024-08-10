<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateMasterVendorTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id_vendor'      => [
                'type'           => 'INT',
                'constraint'     => 10,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'nama_vendor'    => [
                'type'           => 'VARCHAR',
                'constraint'     => 33,
            ],
            'phone_number'   => [
                'type'           => 'CHAR',
                'constraint'     => 13,
            ],
            'email_address'  => [
                'type'           => 'VARCHAR',
                'constraint'     => 33,
            ],
            'created_at'     => [
                'type'           => 'DATETIME',
                'null'           => true,
            ],
            'updated_at'     => [
                'type'           => 'DATETIME',
                'null'           => true,
            ],
            'deleted_at'     => [
                'type'           => 'DATETIME',
                'null'           => true,
            ],
        ]);

        $this->forge->addKey('id_vendor', true);
        $this->forge->createTable('master_vendor');
    }

    public function down()
    {
        $this->forge->dropTable('master_vendor');
    }
}
