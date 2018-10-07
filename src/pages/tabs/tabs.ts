import { Component } from '@angular/core';

import { HotelPage } from '../hotel/hotel';
import { FlightPage } from '../flight/flight';
import { HomePage } from '../home/home';
import { MyTripPage } from '../myTrip/myTrip';
import { RewardPage } from '../reward/reward';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyTripPage;
  tab3Root = RewardPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
