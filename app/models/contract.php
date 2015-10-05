<?php

class contract extends Eloquent {

    /**
     * The database table used by the model.
     * jobs_applied
     * @var string
     */
    protected $table = 'contract';
    protected $primaryKey = 'id';
    protected $fillable = array('seller,buyer,contract_type,contract_item_type');

}
