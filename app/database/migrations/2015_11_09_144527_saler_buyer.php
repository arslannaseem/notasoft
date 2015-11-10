<?php

use Illuminate\Database\Migrations\Migration;

class SalerBuyer extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		  Schema::create('saler_buyer', function(Blueprint $table) {
            $table->increments('id');
            $table->varchar('saler_id',50)->nullable();
            $table->varchar('buyer_id',50)->nullable();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		  Schema::drop('saler_buyer');
	}

}