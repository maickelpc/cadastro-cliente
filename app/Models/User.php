<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasFactory, Notifiable, Uuid, SoftDeletes;
    
    protected $keyType = 'string';
    public $incrementing = false;


    protected $fillable = [
        'id',
        'nome',
        'sobrenome',
        'cpf',
        'rg',
        'email_verified_at',
        'password',
        'remember_token',
        'cidade_id',
        'endereco_tipo',
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'cep',
        'fone',
        'sexo',
        'data_nascimento',
        'email'

    ];


    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $dates = [
        'created_at', 'updated_at', 'deleted_at'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
