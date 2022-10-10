<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CustomerService;
use App\Http\Resources\CustomerResource;
use App\Http\Requests\CustomerRequest;

class CustomerController extends Controller
{
    private CustomerService $customerService;
    
    public function __construct(){
        $this->customerService = new CustomerService();
    }

    public function index(Request $request){
        $data = $this->customerService->getList($request);
        return CustomerResource::collection($data);
    }

    public function show($id){
        $data = $this->customerService->find($id);
        return new CustomerResource($data);
    }

    public function store(CustomerRequest $request){
        $data = $this->customerService->store($request->all());
        return new CustomerResource($data);
    }

    public function update(CustomerRequest $request, $id){
        $data = $this->customerService->update($id, $request->all());
        return new CustomerResource($data);
    }


    public function destroy($id){
        $data = $this->customerService->destroy($id);
        return new CustomerResource($data);
    }
}
