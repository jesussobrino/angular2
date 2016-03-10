import { Component } from 'angular2/core';
import { Coordinate } from './coordinate';
import { CoordinatesForm } from "./coordinates-form.component";

@Component({
    selector: 'my-google-maps-app',
    templateUrl: 'app/ts/google-maps-app/google-maps-app.html',
    directives: [CoordinatesForm]
})

export class GoogleMapsAppComponent {
    model = new Coordinate(39.17129, -3.84889, "Malagon");

    clickedMarker(data) {
      console.log('data', data);
      //TODO
    }

    onUpdated(newCoordinates: Coordinate){
      this.model = newCoordinates;
    }
}
