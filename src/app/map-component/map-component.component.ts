import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']  
})
export class MapComponentComponent {

  constructor(private apiService: ApiService) { }
  countryDetails: any;

  onSave(event: any) {
    const countryID = event.target.id;
      this.apiService.countryData(countryID).subscribe(
        data => {
            this.countryDetails = {
              name: data[1][0].name,
              capitalCity: data[1][0].capitalCity,
              region: data[1][0].region.value,
              incomeLevel: data[1][0].incomeLevel.value,
              latitude: data[1][0].latitude,
              longitude: data[1][0].longitude
            }
          }
      )
    }
  

  }
