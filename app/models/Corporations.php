<?php

class Corporations extends Eloquent {

    /**
     * The database table used by the model.
     * jobs_applied
     * @var string
     */
    protected $table = 'corporations';
    protected $primaryKey = 'id';
    protected $fillable = array('corporation_name', 'idnumber', 'registration_book', 'province', 'country', 'district', 'capital',
        'address1', 'address2', 'share_value', 'president', 'vice_president', 'secretary', 'treasurer','comptroller', 'manager1', 'manager2');

}
