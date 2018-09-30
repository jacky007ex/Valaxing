import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
    selector: 'page-flight',
    templateUrl: 'searchBox.html'
  })
  
export class FlightSearchBox {
    searchObj;
    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.searchObj = this.params.get('obj');
        if(this.searchObj!=null)
            console.log(this.searchObj.name_us);
        
        //let d = new Date();
        
        //this.searchObj.expireTime = d.toISOString();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
  