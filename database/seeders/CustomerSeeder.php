<?php

namespace Database\Seeders;
use App\Models\Customer;
use App\Models\City;

use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder 
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    
        $customers = [
            [
                'name' => 'Maickel Pirchiner',
                'identity' => '448.029.480-50',
                'birth_date' => '1985-10-31',
                'gender' => 'MALE',
                'address' => 'Rua das Couves, 12',
                'city_id' => City::orderByRaw('RAND()')->first()->id
            ],

            [
                'name' => 'Nilceia da Silva',
                'identity' => '182.823.080-48',
                'birth_date' => '2001-05-19',
                'gender' => 'FEMALE',
                'address' => 'R. Ouro Verde, 1294 - AP 12',
                'city_id' => City::orderByRaw('RAND()')->first()->id
            ],

            [
                'name' => 'Diego Pirchiner',
                'identity' => '537.349.410-08',
                'birth_date' => '2000-11-05',
                'gender' => 'MALE',
                'address' => 'Avenida Brasil, 900 - Casa dos Fundos',
                'city_id' => City::orderByRaw('RAND()')->first()->id
            ],

            [
                'name' => 'Regis Mariano',
                'identity' => '026.440.500-57',
                'birth_date' => '2000-11-05',
                'gender' => 'MALE',
                'address' => 'Avenida Brasil, 900 - Casa dos Fundos',
                'city_id' => City::orderByRaw('RAND()')->first()->id
            ],

            [
                'name' => 'Silvane da Costa',
                'identity' => '301.328.060-37',
                'birth_date' => '1968-11-05',
                'gender' => 'FEMALE',
                'address' => 'Avenida Brasil, 900 - Casa dos Fundos',
                'city_id' => City::orderByRaw('RAND()')->first()->id
            ],

            [
                'name' => 'Nilson da Silva',
                'identity' => '616.119.620-48',
                'birth_date' => '1980-19-01',
                'gender' => 'MALE',
                'address' => 'Avenida Brasil, 900 - Casa dos Fundos',
                'city_id' => City::orderByRaw('RAND()')->first()->id
            ],

            [
                'name' => 'Natalina da Costa',
                'identity' => '770.027.020-17',
                'birth_date' => '1965-11-05',
                'gender' => 'FEMALE',
                'address' => 'Avenida Brasil, 900 - Casa dos Fundos',
                'city_id' => City::orderByRaw('RAND()')->first()->id
            ],
           

        ];

        foreach($customers as $customer){
            Customer::create($customer);
        }
        
    }
}
