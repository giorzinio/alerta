import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usercreds = {
    codigo: '',
    clave: ''
  };
  constructor(private api: ApiService, public navCtrl:NavController) { 

  }

  ngOnInit() {
  }
  ingresar() {
    // this.auth.authenticate(this.usercreds).then(data => {
    //   if(data) {
    //     this.navCtrl.navigateRoot('admision');
    //   }
    // });
    this.navCtrl.navigateRoot('home');
  }
}
