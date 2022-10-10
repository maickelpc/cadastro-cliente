<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CityService;
use App\Http\Resources\CityResource;

class CityController extends Controller
{
    private CityService $cityService;
    
    public function __construct(){
        $this->cityService = new CityService();
    }

    public function index(Request $request){
        $data = $this->cityService->getList($request);
        return CityResource::collection($data);
    }

    public function show( $id){
        $data = $this->cityService->find($id);
        return new CityResource($data);
    }
}
