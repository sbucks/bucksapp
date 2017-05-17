import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReveldataService {

  fid: any;
  constructor(private http: Http) { }

  getRevelData(fid) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log('entered the Service ' + JSON.stringify(fid));
    return this.http.post('entries/values', JSON.stringify(fid), {headers: headers}).map(res => res.json());
  }

  getPartyData(week) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log('entered the Service ' + JSON.stringify(week));
    return this.http.post('entries/partyvalues',
      JSON.stringify(week), {headers: headers}).map(res => res.json()
    );
  }

}
