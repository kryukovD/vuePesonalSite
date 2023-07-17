<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RequestForm;
use Illuminate\Support\Facades\Mail;
use App\Mail\Feedback;

class RequestFormController extends Controller
{
    public function send(Request $request){
       $form= new RequestForm();
        $form->name=$request->input("name");
        $form->email=$request->input("email");
        $form->message=$request->input("message");
        $form->save();
        Mail::to('dimvue5430@yandex.ru')->send(new Feedback(['name'=>$form->name,'email'=>$form->email,'message'=>$form->email]));
    }
}
