<?php

use Illuminate\Database\Migrations\Migration;

class ContractItemTypes extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
			 Schema::create('contract_item_types', function(Blueprint $table)
        {
            $table->increments('id');
            $table->varchar('contract_item_type_name',50)->nullable();
           

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('contract_item_types');
	}

}