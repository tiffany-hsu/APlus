

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AssessServiceService {

  constructor(private http: Http) { }

  getListsIndex() {
    return this.http.get( 'http://localhost:8080/json/courses.json')
    .map(response => response.json());
  }

  getItems(index: string) {
    return this.http.get( 'http://localhost:8080/json/courses/' + index + '.json')
    .map(response => response.json());
  }

}
/*
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AssessServiceService { //export class AssessServiceService {

  //constructor() { }
  constructor(private http: Http) { }
  
  /*getListsIndex() {
    return this.http.get( 'http://localhost:8080/json/courses.json')
    .map(response => response.json());
  }

  getItems(index: string) {
    return this.http.get( 'http://localhost:8080/json/courses/' + index + '.json')
    .map(response => response.json());
  }*/

