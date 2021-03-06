import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CropService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  cropByIdResponsable(id: any, token: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      })
    };
    return this.http.get(this.url + '/list-crop-responsable/?id=' + id, httpOptions);
  }

  saveCropFunction(crop: any, token: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      })
    };
    return this.http.post(this.url + '/create-crop', crop, httpOptions);
  }

  listAllCrops(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.url + '/list-crop', httpOptions);
  }

  listCropById(id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.url + '/list-crop-id/?id=' + id, httpOptions);
  }
}
