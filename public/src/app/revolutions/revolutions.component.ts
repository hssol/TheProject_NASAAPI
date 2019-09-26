import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
@Component({
  selector: 'app-revolutions',
  templateUrl: './revolutions.component.html',
  styleUrls: ['./revolutions.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class RevolutionsComponent implements OnInit {

  constructor(private _http:HttpService) { }
  errorsPresent: Boolean;
  errors: any;
  ApiLon: any;
  ApiLat: any;
  lat = this.ApiLat;
  lng = this.ApiLon;

  markers = [
    { lat: this.lat, lng: this.lng }
  ];

  ngOnInit() {
    this.getData();
  }
  getData(){
    let Observable = this._http.getDataFromAPI('http://api.open-notify.org/iss-now.json');
    Observable.subscribe(data=>{
      console.log('ISS Successfully pinged', data);
      if(data['message'] == 'error'){
        this.errorsPresent = true;
        this.errors = data['data'];
      }
      else{
        this.errorsPresent = false;
        this.ApiLat = data['iss_position']['latitude'];
        this.ApiLon = data['iss_position']['longitude'];
      }
    })
  }
}