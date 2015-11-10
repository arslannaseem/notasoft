<?php

use Illuminate\Database\Migrations\Migration;

class ContractDetail extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		
		 Schema::create('contract_detail', function(Blueprint $table)
        {
            $table->increments('id');
            $table->varchar('contract_id',50)->nullable();
            $table->varchar('user_id',50)->nullable();
            $table->varchar('contract_item_type',50)->nullable();
            $table->varchar('vehicle_no',50)->nullable();
            $table->varchar('vehicle_price',50)->nullable();
            
            $table->varchar('engine_no',50)->nullable();
            $table->varchar('vehicle_model',50)->nullable();
            $table->varchar('property_no',50)->nullable();
            $table->varchar('property_price',50)->nullable();
            $table->varchar('property_area',50)->nullable();
            $table->varchar('propert_location',50)->nullable();
            $table->varchar('other_name',50)->nullable();
            $table->varchar('other_amount',50)->nullable();
            $table->datetime('created_at');
            $table->datetime('updated_at');
           

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('contract_detail');
	}

}