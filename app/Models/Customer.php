<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'name',
        'identity',
        'birth_date',
        'gender',
        'address',
        'city_id',
    ];

    protected $dates = [
        'birth_date',
        'created_at',
        'updated_at'
    ];

    public function city(){
        return $this->belongsTo(City::class,'city_id');
    }
}
