<?php

use Illuminate\Database\Migrations\Migration;

class Clients extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		 Schema::create('clients', function(Blueprint $table)
        {
            $table->increments('cid'); // autoincrement id field
            $table->varchar('user_id', 50)->nullable();   // string field
            $table->varchar('usertype');
            $table->varchar('idnumber', 50)->nullable();
            $table->varchar('passport', 50)->nullable();
            $table->varchar('firstname', 50)->nullable();
            $table->varchar('Lastname1', 50)->nullable();
            $table->varchar('Lastname2', 50)->nullable();
            
            $table->tinyint('nationality', 50)->nullable();
            $table->tinyint('gender', 50)->nullable();
            
            $table->varchar('province', 50)->nullable();
            $table->varchar('county', 50)->nullable();
            $table->varchar('district', 50)->nullable();
            $table->varchar('country', 50)->nullable();
            $table->varchar('fprovince', 50)->nullable();
            $table->varchar('state', 50)->nullable();
            $table->varchar('city', 50)->nullable();
            $table->varchar('zip', 50)->nullable();
            $table->varchar('address2',50)->nullable();
            $table->varchar('postcode',50)->nullable();
            $table->varchar('dob',50)->nullable();
            $table->tinyint('death',1);
            $table->datetime('created_at',50)->nullable();
            $table->datetime('updated_at',50)->nullable();
            $table->varchar('phone1',255)->nullable();
            $table->varchar('email1',255)->nullable();
            $table->varchar('phone2',255)->nullable();
            $table->varchar('email2',255)->nullable();
            $table->varchar('cellphone',255)->nullable();
            $table->varchar('homephone',255)->nullable();
            $table->varchar('cellphone2',255)->nullable();
            $table->varchar('fax',255)->nullable();
            $table->varchar('facebook',255)->nullable();
            $table->varchar('twitter',255)->nullable();
            $table->varchar('linkedin',255)->nullable();
            $table->varchar('google',255)->nullable();
            $table->varchar('photoids',255)->nullable();
            $table->varchar('profile_image',255)->nullable();
            $table->int('active',11)->nullable();

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
	Schema::drop('clients');	
	}

}