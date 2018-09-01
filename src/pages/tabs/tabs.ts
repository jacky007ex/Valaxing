import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HotelPage } from '../hotel/hotel';
import { FlightPage } from '../flight/flight';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FlightPage;
  tab2Root = HotelPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
