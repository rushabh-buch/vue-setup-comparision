<?php

namespace App\Http\Controllers;


class IndexController extends Controller
{
    public function index()
    {
        return inertia(
            'Index/Index',
            [
                'message' => 'Developer at substantive research',
            ]
        );
    }

    public function show()
    {
        return inertia('Index/Show');
    }
}
