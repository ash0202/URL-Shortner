import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlServiceService } from '../url-service.service';
import { URLModel } from '../UrlModel';

@Component({
  selector: 'app-addurl',
  templateUrl: './addurl.component.html',
  styleUrls: ['./addurl.component.css']
})
export class AddurlComponent implements OnInit {

  formGroup:FormGroup
  myObj:URLModel={
    longUrl : '',
    shortUrl : '',
    desc:'',
    count : 0,
    
  }
  constructor(private service:UrlServiceService,private router:Router) { 

    this.formGroup=new FormGroup({
      'longUrl':new FormControl('',[Validators.required]),
      'desc':new FormControl('',[Validators.required])
    })


  }

  ngOnInit(): void {
  }
  saveURL(){
    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.formGroup.valid){
      console.log(this.formGroup.value);
      this.myObj={
        longUrl:this.formGroup.value.longUrl,
        shortUrl:this.generateShort(),
        count:0,
        desc:this.formGroup.value.desc
      }
      this.service.saveUrl(this.myObj).subscribe(() => {
        this.router.navigate(['/dashboard'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }
  generateShort(){
    let res="";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let charactersLength=characters.length;
    for(let i=0;i<4;i++)
    { 
      res+=characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return res;
  }
}
