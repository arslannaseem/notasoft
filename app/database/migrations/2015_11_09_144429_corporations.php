<?php

use Illuminate\Database\Migrations\Migration;

class Corporations extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		
		 Schema::create('corporations', function(Blueprint $table)
        {
            $table->increments('id'); // autoincrement id field
            $table->varchar('user_id',50)->nullable();   // string field
            $table->varchar('corporation_type',50)->nullable();
            $table->varchar('corporation_name',50)->nullable();
            $table->varchar('idnumber',50)->nullable();
            $table->varchar('registration_book',50)->nullable();
            $table->varchar('province',50)->nullable();
            $table->varchar('country',50)->nullable();
            $table->varchar('district',50)->nullable();
            $table->varchar('capital',50)->nullable();
            $table->varchar('address1',50)->nullable();
            $table->varchar('address2',50)->nullable();
            $table->varchar('share_value',50)->nullable();
            $table->varchar('president',50)->nullable();
            $table->varchar('vice_president',50)->nullable();
            $table->varchar('secretary',50)->nullable();
            $table->varchar('treasurer',50)->nullable();
            $table->varchar('comptroller',50)->nullable();
            $table->varchar('manager1',50)->nullable();
            $table->varchar('manager2',50)->nullable();
            $table->datetime('created_at');
            $table->datetime('updated_at');
            $table->varchar('tomo',50)->nullable();
            $table->varchar('asiento',50)->nullable();
            $table->varchar('no_of_shares',50)->nullable();
            $table->varchar('shareholder',50)->nullable();
            $table->varchar('vice_president_2',50)->nullable();
            $table->varchar('page',50)->nullable();
            $table->varchar('record',50)->nullable();

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('corporations');
	}

}