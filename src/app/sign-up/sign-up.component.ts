import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formGroup:FormGroup
  constructor() { 
    this.formGroup=new FormGroup({
      'email':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required]),
      'confirm-password':new FormControl('',[Validators.required]),
      'dob':new FormControl('',[Validators.required]),
      
      
    })
    
   }
  

  ngOnInit(): void {
  }

}
