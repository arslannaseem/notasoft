<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * Guard and protect important columns
	 */
	protected $fillable = array('fristname', 'lastname', 
								'email', 
								'accesstype', 'lastIPAddress');
	protected $hidden = array('id', 'password', 'remember_token');

	

	/*
	|--------------------------------------------------------------------------
	| Setter and getter for user's IP address (lastIPAddress)
	|--------------------------------------------------------------------------
	*/

	/**
	 * Setter for  'lastIPAddress'
	 *
	 * @param  string  $value
	 */
	public function setLastIPAddressAttribute($value)
    {
        $this->attributes['lastIPAddress'] = $value;
    }

    /**
	 * Getter for  'lastIPAddress'
	 *
	 * @return string
	 */
    public function getLastIPAddressAttribute()
    {
        return $this->attributes['lastIPAddress'];
    }



    /*
	|--------------------------------------------------------------------------
	| Setter and getter for user's geographical position (lat and long)
	|--------------------------------------------------------------------------
	*/
    
    /**
	 * Setter for  'latitude' (lat)
	 *
	 * @param  double  $value
	 */
    public function setLatAttribute($value)
    {
        $this->attributes['lat'] = $value;
    }

    /**
	 * Getter for  'lat'
	 *
	 * @return double
	 */
    public function getLatAttribute()
    {
        return $this->attributes['lat'];
    }

    /**
	 * Setter for  'longitude' (long)
	 *
	 * @param  double  $value
	 */
    public function setLongAttribute($value)
    {
        $this->attributes['long'] = $value;
    }

    /**
	 * Getter for  'long'
	 *
	 * @return double
	 */
    public function getLongAttribute()
    {
        return $this->attributes['long'];
    }



	/*
	|--------------------------------------------------------------------------
	| Setter and getter for userType
	|--------------------------------------------------------------------------
	*/

	/**
	 * Setter for  'userType'
	 *
	 * @param  integer  $value
	 */
	public function setUserTypeAttribute($value)
    {
        $this->attributes['usertype'] = $value;
    }

    /**
	 * Getter for  'userType'
	 *
	 * @return integer
	 */
    public function getUserTypeAttribute()
    {
        return $this->attributes['usertype'];
    }



    /*
	|--------------------------------------------------------------------------
	| Setter and getter for accessType
	|--------------------------------------------------------------------------
	*/

	/**
	 * Setter for  'accessType'
	 *
	 * @param  integer  $value
	 */
	public function setAccessTypeAttribute($value)
    {
        $this->attributes['accessType'] = $value;
    }

    /**
	 * Getter for  'accessType'
	 *
	 * @return integer
	 */
    public function getAccessTypeAttribute()
    {
        return $this->attributes['accessType'];
    }




    /*
	|--------------------------------------------------------------------------
	| Setter and getter for currentStatus
	|--------------------------------------------------------------------------
	*/

	/**
	 * Setter for  'currentStatus'
	 *
	 * @param  integer  $value
	 */
	public function setCurrentStatusAttribute($value)
    {
        $this->attributes['currentStatus'] = $value;
    }

    /**
	 * Getter for  'currentStatus'
	 *
	 * @return integer
	 */
    public function getCurrentStatusAttribute()
    {
        return $this->attributes['currentStatus'];
    }


    

	/**
	 * Get reminder email 
	 *
	 * @return string
	 */
	public function getReminderEmail()
	{
		return $this->email;
	}

	
	/*
	|--------------------------------------------------------------------------
	| Implementing methods related to interface UserInterface
	|--------------------------------------------------------------------------
	*/
	public function getAuthIdentifier()
	{
		return $this->getKey();
	}

	public function getAuthPassword()
	{
		return $this->password;
	}

	public function getRememberToken()
	{
	    return $this->remember_token;
	}

	public function setRememberToken($value)
	{
	    $this->remember_token = $value;
	}

	public function getRememberTokenName()
	{
	    return 'remember_token';
	}


	

}