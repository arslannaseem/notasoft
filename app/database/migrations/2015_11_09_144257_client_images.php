<?php

use Illuminate\Database\Migrations\Migration;

class ClientImages extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		 Schema::create('client_images', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('client_id',11)->nullable();
            $table->integer('category_id',11)->nullable();
            $table->varchar('photoid',255)->nullable();
           

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('client_images');
	}

}