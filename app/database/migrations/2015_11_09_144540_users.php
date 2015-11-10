<?php

use Illuminate\Database\Migrations\Migration;

class Users extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('users', function(Blueprint $table) {
            $table->increments('id'); // autoincrement id field
            $table->enum('gender',50)->nullable();   // string field
            $table->varchar('fristname',50)->nullable();
            $table->varchar('lastname',50)->nullable();
            $table->varchar('email');
            $table->varchar('mobile',50)->nullable();
            $table->varchar('password');
            $table->varchar('remember_token',50)->nullable();
            $table->varchar('lastIPAddress',50)->nullable();
            $table->smallint('year',50)->nullable();
            $table->varchar('month',50)->nullable();
            $table->smallint('date',50)->nullable();
            $table->timestamp('created_at');
            $table->tinyint('death');
            $table->timestamp('updated_at');
            $table->tinyint('is_deleted');
            $table->varchar('vcode');
            $table->varchar('active');
            $table->varchar('phone1');
            $table->varchar('email1');
            $table->varchar('phone2');
            $table->varchar('email2');
            $table->varchar('cellphone');
            $table->varchar('homephone');
            $table->varchar('cellphone2');
            $table->varchar('fax');
            $table->varchar('facebook');
            $table->varchar('twitter');
            $table->varchar('linkedin');
            $table->varchar('google');
            $table->varchar('photoids');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('users');
    }

}
