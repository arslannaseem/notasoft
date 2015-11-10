<?php

use Illuminate\Database\Migrations\Migration;

class ImageCategories extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		 Schema::create('image_categories', function(Blueprint $table) {
            $table->increments('id');
            $table->varchar('category_name',50)->nullable();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('image_categories');
	}

}