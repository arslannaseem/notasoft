<?php

use Illuminate\Database\Migrations\Migration;

class Citizens extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		 Schema::create('citizens', function(Blueprint $table)
        {
            $table->integer('Número_de_Cédula');
            $table->integer('Número_de_Folio');
            $table->integer('Número_de_Cédula_del_Padre');
            $table->integer('Número_de_Cédula_de_la_Madre');
            $table->integer('Código_del_Hospital');
            $table->integer('Hora_del_Suceso');
            $table->integer('Fecha_del_Suceso');
            $table->integer('Sexo');
            $table->integer('Nacionalidad_del_Inscrito');
            $table->integer('Indicador_de_Defunción');
            $table->integer('País_de_Procedencia_del_Padre');
            $table->integer('País_de_Procedencia_de_la_Madre');
            $table->integer('Campo_de_Relleno');
            $table->integer('Provincia_y_Cantón_de_Procedencia_de_la_Madre');
            $table->integer('Fecha_de_Naturalización');
            
            
            $table->char('Campo_de_Relleno1');   
            $table->char('Primer_Apellido');
            $table->char('Segundo_Apellido');
            $table->char('Nombre');
            $table->char('Nombre_del_Padre');
            $table->char('Nombre_de_la_Madre');
            $table->char('Lugar_de_Nacimiento');

        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
            Schema::drop('citizens');
		
	}

}