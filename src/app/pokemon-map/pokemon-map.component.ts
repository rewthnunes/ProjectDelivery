import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';  
import { MapService } from './pokemon-map.service'; 

@Component({
  selector: 'app-pokemon-map',
  templateUrl: './pokemon-map.component.html',
  styleUrls: ['./pokemon-map.component.css']
})
export class PokemonMapComponent implements OnInit {

  options: any;

  overlays: any[];

  google: any;

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;

  returnService: any;

  objOrigin = {'lat': 0, 'lon': 0, 'local': ''};
  objDestination = {'lat': 0, 'lon': 0, 'local': ''};
  responseOrigin: any;
  responseDestination: any;

  constructor(
      private messageService: MessageService,
      private mapService: MapService
    ) { }

  ngOnInit() {

    this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();

  }

  handleMapClick(event) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
}

handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;

    if(isMarker) {
        let title = event.overlay.getTitle();
        this.infoWindow.setContent('' + title + '');
        this.infoWindow.open(event.map, event.overlay);
        event.map.setCenter(event.overlay.getPosition());

        this.messageService.add({severity:'info', summary:'Marker Selected', detail: title});
    }
    else {
        this.messageService.add({severity:'info', summary:'Shape Selected', detail: ''});
    }
}

addMarker() {
    if(this.objDestination.lat !== 0 && this.objOrigin.lat) {
        alert('Clean to a new consult!');
        return false;
    }

    if(this.objOrigin.lat === 0) {
        this.objOrigin.lat = this.selectedPosition.lat();
        this.objOrigin.lon = this.selectedPosition.lng();    
        this.searchPlace(this.objOrigin.lat, this.objOrigin.lon, true);    
    } else {
        this.objDestination.lat = this.selectedPosition.lat();
        this.objDestination.lon = this.selectedPosition.lng();
        this.searchPlace(this.objDestination.lat, this.objDestination.lon, false);        
    }
 
    this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle }));
}

handleDragEnd(event) {
    this.messageService.add({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
}

initOverlays() {

    if(!this.overlays || !this.overlays.length) {
        this.overlays = [
            new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
            new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
            new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
            new google.maps.Polygon({paths: [
                {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
            }),
            //new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
            new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
        ];
    }
}


calculate() {

}

searchPlace(lat, lon, flag){
debugger;
    this.mapService.getLocate(lat, lon).subscribe(
        data => {
            if(data) {
                if(flag) this.responseOrigin = data.display_name.split(","); 
                else this.responseDestination = data.display_name.split(",");
            }
        }, error => {
            console.error();            
        }
    );
}

clear() {
    this.overlays = [];
    this.selectedPosition = false;
    this.objOrigin = {'lat': 0, 'lon': 0, 'local': ''};
    this.objDestination = {'lat': 0, 'lon': 0, 'local': ''};
    this.responseOrigin = '';
    this.responseDestination = '';
}  


}
