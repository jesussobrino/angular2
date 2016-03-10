import { Component, Output, EventEmitter } from 'angular2/core';
import { Coordinate } from './coordinate';

@Component({
  selector: 'map-coordinates-form',
  templateUrl: 'app/ts/google-maps-app/coordinates-form.html'
})

export class CoordinatesForm {
  defaultValue = new Coordinate(39.17129, -3.84889, "Malagon");
  model = new Coordinate(this.defaultValue.lat, this.defaultValue.long, this.defaultValue.location);
  @Output() onUpdated = new EventEmitter<Coordinate>();

  updateCoordinates(validForm:boolean) {
    if(validForm){
      this.onUpdated.emit(new Coordinate(this.model.lat, this.model.long, this.model.location));
    }else{
      alert('Wrong params');
    }
  }

  reset(){
    this.model = new Coordinate(this.defaultValue.lat, this.defaultValue.long, this.defaultValue.location);
    this.onUpdated.emit(new Coordinate(this.defaultValue.lat, this.defaultValue.long, this.defaultValue.location));
  }
}
