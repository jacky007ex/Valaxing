import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyTripPage } from '../pages/myTrip/myTrip';
import { HomePage } from '../pages/home/home';
import { RewardPage } from '../pages/reward/reward';
import { ProfilePage } from '../pages/profile/profile';
import { HotelPage } from '../pages/hotel/hotel';
import { FlightPage } from '../pages/flight/flight';
import { TabsPage } from '../pages/tabs/tabs';

import { FlightSearchBox } from '../pages/flight/searchBox';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

var config = { 
    apiKey: "AIzaSyBL3irOxw4fzsPvPqBLdsrSq3D9ylrsGdY",
    authDomain: "koala-dev-207914.firebaseapp.com",
    databaseURL: "https://koala-dev-207914.firebaseio.com",
    projectId: "koala-dev-207914",
    storageBucket: "koala-dev-207914.appspot.com",
    messagingSenderId: "33024264534" 
}

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    HotelPage,
    FlightPage,
    TabsPage,
    MyTripPage,
    HomePage,
    RewardPage,
    FlightSearchBox
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    HotelPage,
    FlightPage,
    TabsPage,
    HomePage,
    MyTripPage,
    RewardPage,
    FlightSearchBox
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
