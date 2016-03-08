import { EventEmitter, Output, Component } from 'angular2/core';

@Component({
    selector: 'my-google-maps-app',
    template: '<div>' +
    '<google-map latitude={{lat}} longitude={{long}} disableDefaultUI>' +
    ' <google-map-marker latitude={{lat}} longitude={{long}} title={{location}} click-events="true" (google-map-marker-click)="clickedMarker()"></google-map-marker>' +
    '</google-map>' +
    '<button class="fancy" (click)="switchLocation()" >Switch places</button>' +
    '</div>'
})

export class GoogleMapsAppComponent {
    lat:string;
    long:string;
    location:string;

    constructor() {
        this.lat = "39.17129";
        this.long = "-3.84889";
        this.location = "Malagon";
    }

    clickedMarker() {
        this.switchLocation();
    }

    switchLocation() {
        if (this.location === "Malagon") {
            this.lat = "38.98334";
            this.long = "-3.92716";
            this.location = "Ciudad Real";
        } else {
            this.lat = "39.17129";
            this.long = "-3.84889";
            this.location = "Malagon";
        }
    }
}
