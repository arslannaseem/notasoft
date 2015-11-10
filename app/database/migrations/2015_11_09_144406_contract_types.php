<?php

use Illuminate\Database\Migrations\Migration;

class ContractTypes extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('contract_types', function(Blueprint $table) {
            $table->increments('id');
            $table->varchar('name',50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('contract_types');
    }

}
