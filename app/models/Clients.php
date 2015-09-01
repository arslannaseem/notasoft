<?php

class Clients extends Eloquent {

    /**
     * The database table used by the model.
     * jobs_applied
     * @var string
     */
    protected $table = 'clients';
    protected $primaryKey = 'cid';
    protected $fillable = array('usertype', 'idnumber', 'passport', 'firstname', 'Lastname1', 'Lastname2', 'nationality',
        'gender', 'province', 'county', 'district', 'country', 'fprovince', 'state',
        'city', 'zip', 'address1', 'address2', 'postcode', 'dob', 'death');

}
