import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-page-redirect',
  templateUrl: './page-redirect.component.html',
  styleUrls: ['./page-redirect.component.css']
})
export class PageRedirectComponent implements OnInit {

  constructor(private router:Router,private activatedRouter:ActivatedRoute,private service:UrlServiceService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe((data)=>{
      let id=data.id
      let url=this.service.getById(id);
      console.log(url)
      url.forEach((data)=>{
        //console.log(data)
       
      /*  this.myUrl.longUrl=data.longUrl
        this.myUrl.shortUrl=data.shortUrl
        this.myUrl.desc=data.desc
        this.myUrl.count=data.count+1*/
        data.count=data.count+1
        console.log(data)
        this.service.updateCount(id,data).subscribe()
        window.location.href =data.longUrl;
      })
     
    })
  }

}
