import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLModel } from './UrlModel';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  urlList:Array<URLModel>=[]
  constructor(private http:HttpClient) { }

  saveUrl(url:URLModel)
  {
    this.urlList.push(url)
    //console.log(this.urlList)
    return this.http.post(`https://615ea2fe3d1491001755aa19.mockapi.io/url`,url)
    
  }
  getAllUrl()
  {
    return this.http.get<Array<URLModel>>(`https://615ea2fe3d1491001755aa19.mockapi.io/url`)
  }
  delete(id?:number)
  {
  return this.http.delete(`https://615ea2fe3d1491001755aa19.mockapi.io/url/${id}`)
  }
  updateCount(id:number | undefined,url:URLModel)
  {
    console.log(url)
    return this.http.put(`https://615ea2fe3d1491001755aa19.mockapi.io/url/${id}`,url)
  }
  getById(id?:number)
  {
    return this.http.get<URLModel>(`https://615ea2fe3d1491001755aa19.mockapi.io/url/${id}`)
  }
}
