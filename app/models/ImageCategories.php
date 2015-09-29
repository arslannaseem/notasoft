<?php

class ImageCategories extends Eloquent {

    /**
     * The database table used by the model.
     * jobs_applied
     * @var string
     */
    protected $table = 'image_categories';
    protected $primaryKey = 'id';
    protected $fillable = array('category_name');

}
