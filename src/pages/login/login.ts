import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
//import { Communications } from '../../providers/communications/communications';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
//import { UserPage } from '../user/user'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data: Observable<any>;
  dataSend : FormData;

  public form : FormGroup;
  public Username : any ;
  public Password : any ;

  

  constructor(public alertCtrl: AlertController, 
              public navCtrl: NavController, 
            //   public http: Http, 
            //  // public communications: Communications, 
              public fb : FormBuilder) {
     
  

  this.form = fb.group({
    Username : ["",[ Validators.required, Validators.email ]],
    Password : ["", [Validators.required, Validators.minLength(6)]]
  });
/*, Validators.pattern(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm) */
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  addEntry(){
    this.navCtrl.push(HomePage);
  }
  
  login(){

    var dataSend = new FormData();
    dataSend.append('User', this.Username);
    dataSend.append('Password', this.Password);

    /*this.communications.post('Login/LoadLogin', dataSend).then(response => {
      console.log(response);

      if(response.resultStatus === 'OK')
      {
        var objUser = response.object
        let alert = this.alertCtrl.create({
          title: 'Welcome ' ,
          subTitle: 'Hola ' + objUser.User,
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(HomePage);
        
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'El usuario o la contraseña son incorrectas',
          buttons: ['OK']
        });
        alert.present();
      }

		});*/

  }
  

  consumeServicewhitParams(){

    var dataSend = new FormData();
    dataSend.append('Producto', 'nuevoProducto');
    dataSend.append('Existencia', '17');
    dataSend.append('Precio', '5000');
    dataSend.append('Proveedor', 'Stiven');
    dataSend.append('Foto', 'http://placehold.it/150/92c952');

    // this.communications.post('Inventory/SaveInventory', dataSend).then(response => {
		// 	console.log(response);
		// });
  }

}
