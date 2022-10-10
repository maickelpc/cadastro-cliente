<?php

namespace App\Services;

use App\Models\Customer;

class CustomerService
{
    private function getQuery($filters){
        $query = Customer::with('city','city.state');

        if($filters->get('name', '') !== ''){
            $name = '%' . strtolower($filters->get('name')) . '%';
            $query->whereRaw('LOWER(name) like ?',[$name]);
        }

        if($filters->get('address', '') !== ''){
            $address = '%' . strtolower($filters->get('address')) . '%';
            $query->whereRaw('LOWER(address) like ?',[$address]);
        }

        if($filters->get('identity', '') !== ''){
            $identity = $filters->get('identity');
            $query->where("identity", $identity);
        }

        if($filters->get('birth_date', '') !== ''){
            $birth_date = $filters->get('birth_date');
            $query->whereRaw("DATE(birth_date) = ?", [$birth_date]);
        }   
        
        if($filters->get('gender', 'ALL') !== 'ALL'){
            $gender = $filters->get('gender');
            $query->where('gender', $gender);
        }

        if($filters->get('city_id', '') !== ''){
            $city_id = $filters->get('city_id');
            $query->where('city_id', $city_id);
        }

        if($filters->get('state_id', '') !== ''){
            $state_id = $filters->get('state_id');
            $query->join('cities', 'cities.id','customers.city_id')
                ->where('state_id',$state_id);
        }

        if($filters->has('orderBy')){
            $orderBy = $filters->get('orderBy');
            $order = $filters->get('order', 'asc');
            $query = $query->orderBy($orderBy, $order);
        }

        return $query->select('customers.*');

    }


    public function getList($params){
        return $this->getQuery($params)->paginate($params->get('per_page',25));
    }

    public function find($id){
        return Customer::with('city','city.state')->findOrFail($id);
    }

    public function store($arr){
        $data = Customer::create($arr);
        $data->load('city','city.state');
        return $data;
    }

    public function update($id, $arr){
        $data = Customer::findOrFail($id);
        $data->fill($arr);
        $data->save();
        $data->load('city','city.state');
        return $data;
    }


    public function destroy($id){
        $customer = Customer::with('city','city.state')->findOrFail($id);
        $customer->delete();

        return $customer;
    }

    
}
