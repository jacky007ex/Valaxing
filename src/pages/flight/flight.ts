import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-flight',
  templateUrl: 'flight.html'
})
export class FlightPage {
  public slide1$ : Observable<any[]>;
  slide1 = new Array<any>();
  slide1_firebaseRef = 'flights/slide1/slides';
  slide1_title = 'Popular Destinations';

  public slide2$ : Observable<any[]>;
  slide2 = new Array<any>();
  slide2_firebaseRef = 'flights/slide2/slides';
  slide2_title = 'Long Destinations';

  createObj = {
    name_us: 'Taipei',
    name_tw: '台北',
    name_cn: '台北',
    createTime: (new Date()).toISOString(),
    imgUrl: '',
    img: ''
  };

  constructor(public navCtrl: NavController, public afd: AngularFireDatabase,) {
    this.getDataFromFireBase();
    //this.pushDataToFirebase();
  }

  getDataFromFireBase() {
    this.slide1$ = this.afd.list(this.slide1_firebaseRef).valueChanges();
    this.slide2$ = this.afd.list(this.slide2_firebaseRef).valueChanges();

    this.slide1$.subscribe(
      returnList => {
        this.slide1 = returnList;
      });
    this.slide2$.subscribe(
      returnList => {
        this.slide2 = returnList;
      });
  }

  pushDataToFirebase(){
    this.afd.list(this.slide1_firebaseRef).push(this.createObj);
  }

  getflights($event){
    let q = $event.target.value;
    console.log(q);
  }
}
