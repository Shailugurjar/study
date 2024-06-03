import { AfterViewInit, Component, HostListener,OnInit  } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-providers';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
       // Set the Leaflet default image path
       L.Icon.Default.imagePath = 'assets/images/';

       // Create a map instance
       const center: L.LatLngExpression = [-0.421498116026705, 36.950147769312004];
       const propertiesmap = L.map('map').setView(center, 10);
   
       propertiesmap.invalidateSize();
   
       // Add Google Streets tile layer
       const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
         maxZoom: 10,
         subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
       });
   
       googleStreets.addTo(propertiesmap);
   
       // Add marker
       const marker = L.marker([-0.421498116026705, 36.950147769312004]).addTo(propertiesmap);
     }
}
