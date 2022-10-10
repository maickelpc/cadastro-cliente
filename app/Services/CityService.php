<?php

namespace App\Services;

use App\Models\City;

class CityService
{
    private function getQuery($filters){
        $query = City::with('state');

        if($filters->get('name', '') !== ''){
            $name = '%' . strtolower($filters->get('name')) . '%';
            $query->whereRaw('LOWER(name) like ?',[$name]);
        }

        if($filters->get('code', '') !== ''){
            $code = strtolower($filters->get('code')) ;
            $query->whereRaw('LOWER(code) = ?',[$code]);
        }

        if($filters->get('state_id', '') !== ''){
            $state_id = $filters->get('state_id');
            $query->where('state_id',$state_id);
        }

        if($filters->has('orderBy')){
            $orderBy = $filters->get('orderBy');
            $order = $filters->get('order', 'asc');
            $query = $query->orderBy($orderBy, $order);
        }

        return $query;

    }


    public function getList($params){
        return $this->getQuery($params)->paginate($params->get('per_page',25));
    }

    public function find($id){
        return City::findOrFail($id);
    }
}
