import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../core/services/user.service';
import { StorageService } from '../../core/services/storage.service';
import { AlertService } from '../../core/services/alert.service';

import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';

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

  public disabled: boolean = false;
  private login: FormGroup;

  constructor(
    public nav: NavController,
    private formBuilder: FormBuilder,
    private userService: AuthService,
    private storage: StorageService,
    private alertService: AlertService,
    private menu: MenuController
  ) {

    this.menu.enable(false);

    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
  }

  ionViewCanEnter() {
    return !this.userService.authenticated();
  }

  public formLogin(): void {
    this.disabled = true;
    this.userService.login(this.login.value.email, this.login.value.password)
      .subscribe(user => {
         if(user.success) {
          this.alertService.alert(`Bienvenido ${user.data.user.fullname}!`, 'success');
          this.userService.setLogin(true);
          this.storage.saveStorageUser(user);
          this.menu.enable(true);
          this.nav.setRoot(WelcomePage);
          localStorage.id = user.data.user.user_id;
          console.log(user.data.user.user_id);
         } else {
           this.alertService.alert('Verifique correo o contraseña', 'danger');
           this.disabled = false;
         }
        }, err => {
          this.alertService.alert('Verifique correo o contraseña', 'danger');
          this.disabled = false;
      });
    }
}
