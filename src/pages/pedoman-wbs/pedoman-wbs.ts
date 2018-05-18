<<<<<<< HEAD
import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams } from 'ionic-angular';
=======
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
>>>>>>> bdca98409d092080b984aa539e101ec9d0658b34

/**
 * Generated class for the PedomanWbsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-wbs',
  templateUrl: 'pedoman-wbs.html',
})
export class PedomanWbsPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanWbsPage');
  }

  downloadAndOpenPdf(){
    window.open("http://www.petrokimia-gresik.com/Resources/Docs/Pedoman%20WBS.pdf",'_system', 'location=yes');
  }

}
