import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { WebApiService } from '../../providers/web-api-service';
import { ResultsPage } from '../results/results';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [WebApiService],

})
export class List {

 public paramsUrl;
 public pessoas;
 public teste;

  constructor(public navCtrl: NavController, private navParams: NavParams, private webapi: WebApiService) {
    this.paramsUrl = navParams.get('paramsUrl');

    // Call API to get people searched
    this.webapi.searchPeople(this.paramsUrl).subscribe(
      data => { this.pessoas = data.json()     
        this.pessoas= this.pessoas.desaparecidos;
      },

      err => {    
        console.error(JSON.stringify(err))
        alert("Cheguei aqui com falha");         
        alert(JSON.stringify(err));
      },
      () => {}
    );           
  }

  ionViewDidLoad() {
    console.log('Lista teste');
  }

obterImagem(pessoa) {

    // alert("cheguei ate aqui");

    return `http://104.131.39.194:8000${pessoa.cartazete}`;
  }


irParaResultadoDaBusca(pessoa){
    this.navCtrl.push(ResultsPage, {pessoa:pessoa});

}


}
