<?php

use Illuminate\Database\Migrations\Migration;

class AvailableCorporations extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		 Schema::create('available_corporations', function(Blueprint $table)
        {
            $table->increments('id'); // autoincrement id field
            $table->string('corporation_type', 50)->nullable();   // string field
            $table->string('corporation_name', 50)->nullable();
            $table->string('idnumber', 50)->nullable();
            $table->string('registration_book', 50)->nullable();
            $table->string('province', 50)->nullable();
            $table->string('country', 50)->nullable();
            $table->string('district', 50)->nullable();
            $table->string('capital', 50)->nullable();
            $table->string('address1', 50)->nullable();
            $table->string('address2', 50)->nullable();
            $table->string('share_value', 50)->nullable();
            $table->string('president', 50)->nullable();
            $table->string('vice_president', 50)->nullable();
            $table->string('secretary', 50)->nullable();
            $table->string('treasurer', 50)->nullable();
            $table->string('comptroller', 50)->nullable();
            $table->string('manager1', 50)->nullable();
            $table->string('manager2', 50)->nullable();
            $table->string('tomo', 50)->nullable();
            $table->string('asiento', 50)->nullable();
            $table->string('no_of_shares', 50)->nullable();
            $table->string('shareholder', 50)->nullable();
            $table->string('vice_president_2', 50)->nullable();
            $table->string('page', 50)->nullable();
            $table->string('record', 50)->nullable();
          
            
            
            $table->datetime('created_at', 50)->nullable();
            $table->datetime('updated_at', 50)->nullable();

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('available_corporations');
	}

}