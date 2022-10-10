<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\StateService;
use App\Http\Resources\StateResource;

class StateController extends Controller
{
    private StateService $stateService;
    
    public function __construct(){
        $this->stateService = new StateService();
    }

    public function index(Request $request){
        $data = $this->stateService->getAll($request);
        return StateResource::collection($data);
    }

    public function show( $id){
        $data = $this->stateService->find($id);
        return new StateResource($data);
    }
}
