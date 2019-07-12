import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  getAllShapes(): any {
   return this.http.get("http://localhost:8080/mapapi/getAllShapes");
  }
  saveCoordinates(shapeName:String,coordinates: any): any {
    var data={
      'name':shapeName,
      'coordinates':coordinates
    };
    return this.http.post("http://localhost:8080/mapapi/saveCoordinates",data);
  }

  constructor(private http:HttpClient) { }
}
