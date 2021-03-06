import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
}
  sendMessage(){
    this.sms.send('12133009188', 'Hello agent my name is ');
  }
}
