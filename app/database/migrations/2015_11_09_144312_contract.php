<?php

use Illuminate\Database\Migrations\Migration;

class Contract extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		 Schema::create('contract', function(Blueprint $table)
        {
            $table->increments('id');
            $table->varchar('user_id',50)->nullable();
            $table->varchar('seller',50)->nullable();
            $table->varchar('buyer',50)->nullable();
            $table->varchar('contract_type',50)->nullable();
            $table->varchar('contract_item_type',50)->nullable();
           

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('contract');
	}

}