import { LoadingCmp } from 'ionic-angular/umd';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import  {Transaction} from '../../database';
import { AddingPage } from '../adding/adding';

/**
 * Generated class for the TransactionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  title: string = 'Movimientos'
  transactions: any;
  addingPage: AddingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //let transaction = new Transaction(30, "Segunda transacción");
    //let transaction = new Transaction(20, "Primera transacción");
    /*let transaction = new Transaction(50, "Tercera transacción");
    transaction.save();*/
    this.loadTransactions();
  }

  loadTransactions(){
    Transaction.all().then((results)=> {
      this.transactions = results;
      console.log(this.transactions);
    })
  }

}
