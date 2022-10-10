<?php

namespace App\Services;

use App\Models\State;

class StateService
{
    private function getQuery($filters){
        $query = State::where('id','>', 0);

        if($filters->get('name', '') !== ''){
            $name = '%' . strtolower($filters->get('name')) . '%';
            $query->whereRaw('LOWER(name) like ?',[$name]);
        }

        if($filters->get('sigla', '') !== ''){
            $sigla = '%' . strtolower($filters->get('sigla')) . '%';
            $query->whereRaw('LOWER(sigla) like ?',[$sigla]);
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

    public function getAll($params){
        return $this->getQuery($params)->get();
    }

    public function find($id){
        return State::findOrFail($id);
    }
}
