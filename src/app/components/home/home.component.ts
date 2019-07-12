/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { CoordinateService } from '../../services/coordinate.service';
import { Shape } from '../../models/shape';
import { Coordinate } from '../../models/coordinate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild('map') gmapElement: any;
  map: google.maps.Map;
  latitude: number;
  longitude: number;
  title = 'GeometryMap';
  saveEnabled: Boolean = false;
  coordinates = [];
  allShapes: Shape[];
  shapeName: String = '';
  myDrawnPolygons = [];
  latToCheck;
  lngToCheck;
  options = {
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [google.maps.drawing.OverlayType.POLYGON]
    },
    polygonOptions: {
      draggable: true,
      editable: true
    },
    drawingMode: google.maps.drawing.OverlayType.POLYGON
  };

  constructor(private coordinateService: CoordinateService) {

  }
  ngOnInit(): void {

    this.latitude = 22.719568;
    this.longitude = 75.857727;
    var mapProp = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 3,
    };


    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var drawingManager = new google.maps.drawing.DrawingManager(this.options);
    drawingManager.setMap(this.map);
    var self = this;
    this.getAllShapes();
    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
      var path = polygon.getPath()
      var coordinates = [];

      for (var i = 0; i < path.length; i++) {
        coordinates.push({
          lat: path.getAt(i).lat(),
          lng: path.getAt(i).lng()
        });
      }
      self.saveEnabled = true;
      self.coordinates = coordinates;
      console.log(coordinates);
      // self.coordinateService.saveCoordinates(coordinates).subscribe(res=>{},err=>{});

    });

    google.maps.event.addListener(this.map, 'click', function (e) {
      console.log(e)
      self.placeMarker(e);
    });
  }

  saveCoordinates() {
    this.coordinateService.saveCoordinates(this.shapeName, this.coordinates).subscribe(res => { }, err => { });
  }

  getAllShapes(): any {
    this.coordinateService.getAllShapes().subscribe(res => {
      this.allShapes = res as Shape[]
    }, err => {

    })
  }

  changeShape(id: Number) {
    this.clearMap();
    var shapeCoords = [];
    var coordinatesArray: Coordinate[] = this.allShapes.find(shape => shape.id == id).coordinates;
    for (let index = 0; index < coordinatesArray.length; index++) {
      shapeCoords.push(
        { lat: parseFloat(coordinatesArray[index].lat), lng: parseFloat(coordinatesArray[index].lng) }
      );
    }
    var drawShape = new google.maps.Polygon({
      paths: shapeCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    drawShape.setMap(this.map);
    this.myDrawnPolygons.push(drawShape);
  }

  clearMap() {
    for (var i = 0; i < this.myDrawnPolygons.length; i++) {
      this.myDrawnPolygons[i].setMap(null);
    }
  }

  checkIfPointInside() {
    var point = new google.maps.LatLng(this.latToCheck, this.lngToCheck)
    var exists = google.maps.geometry.poly.containsLocation(point, this.myDrawnPolygons[0])
    alert(exists);
  }
  placeMarker(location) {
    console.log(location.latLng.lat())
    console.log(location.latLng.lng())
    var marker = new google.maps.Marker({
      position: { lat: location.latLng.lat(), lng: location.latLng.lng() },
      map: this.map,
      title: 'Latitude: ' + location.latLng.lat() + ' Longitude: ' + location.latLng.lng()
    });
    marker.setMap(this.map);
  }
}
