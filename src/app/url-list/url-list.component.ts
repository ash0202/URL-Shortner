import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from '../url-service.service';
import { URLModel } from '../UrlModel';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  urlList:Array<URLModel>=[]
  constructor(private service:UrlServiceService) { }

  ngOnInit(): void {
    this.populateData()
  }
  populateData()
  {
    this.service.getAllUrl().subscribe((data) => {
      this.urlList = data
     })
  
  }
  deleteUrl(id?:number)
  {
    this.service.delete(id).subscribe((data)=>{
      this.populateData();
    })
  }
  incrementCount(id?:number)
  {
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
    })
   
    
  }
}
