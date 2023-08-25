<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FormsController extends Controller
{
    public function button(){
        return Inertia::render("UI/Button");
    }

    public function form(){
        return Inertia::render("UI/Form");
    }
}
