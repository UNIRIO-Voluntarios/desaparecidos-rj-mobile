import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebApiService } from '../../providers/web-api-service';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'page-login',
  providers: [WebApiService],
  templateUrl: 'login.html'
})

export class LoginPage {
  public username; password; autenticacao; user;

  constructor(public navCtrl: NavController, public navParams: NavParams, private webapi: WebApiService, public loadingCtrl: LoadingController, public http: Http) {

  }
  montaURL(user){
    return this.autenticacao = "https://desaparecidos-rj-web1.herokuapp.com/webserver/loginmobile/?" + encodeURIComponent(JSON.stringify(user));

  }
  dadosUsuario(){
    this.user = {
        "username" : this.username,
        "password" : this.password
    };

    return this.user;
  }


  logar(){ 
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', this.username);
    urlSearchParams.append('password', this.password);
    this.http.post('http://desaparecidos-rj.guilhermecaeiro.me/webserver/loginmobile/', urlSearchParams).subscribe(
      data => {
        this.navCtrl.push(HomePage);
      },
      err => {
        alert("Usuário ou senha incorretos");
      }, () => {});
    /*
    this.webapi.enviarDadosServidor(this.montaURL(this.dadosUsuario())).subscribe( //monta URL com os dados do Json
      data => { //se não houver erro, entrará nesse bloco de comandoz
        this.navCtrl.push(HomePage);

      }, err => { //em caso de erro, entrará nesse bloco de comando
        //alert("Usuário ou Senha incorretos");
         alert(err);
      }, () => {}
    );
    */
  }
}
