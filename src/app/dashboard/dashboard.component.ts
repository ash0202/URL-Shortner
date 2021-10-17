import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { UrlServiceService } from '../url-service.service';
import { URLModel } from '../UrlModel'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  map=new Map()
  urlList:Array<URLModel>=[]
  myUrl:URLModel={
    longUrl:'',
    shortUrl:'',
    desc:'',
    count:0
  }
  xvalues:Array<any>=[]
  yvalues:Array<any>=[]
  color="rgba(0, 123, 255,0.2)"
  borderColor='rgba(0, 123, 255,1)'
  constructor(private service:UrlServiceService) { }

  ngOnInit(): void {
this.populateData();

this.service.getAllUrl().subscribe(data=>{
  data.forEach(item=>{
   this.xvalues.push("https://short.ly/"+item.shortUrl)
   this.yvalues.push(item.count)
  })
})

console.log(this.xvalues)
console.log(this.yvalues)

new Chart("mychart", {
  type: 'bar',
  data: {
      labels: this.xvalues,
      datasets: [{
          label: 'No of clicks of URLs',
          data: this.yvalues,
          backgroundColor: this.color,
          borderColor: this.borderColor,
          borderWidth: 1
      }]
  },
  options: {
    
    scales: {
      yAxes: [{
        ticks: {
            beginAtZero: true,
            precision:0
        },
        gridLines: {
          display: false
        }                           
      }         
    ]
  }
    
  }
});

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
