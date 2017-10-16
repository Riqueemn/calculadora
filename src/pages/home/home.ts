import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { firebaseConfig } from '../../firebase/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero_1: string = '';
  numero_2: string = '';
  resultado: number;

  x: string = '';
  numuro = '';

  constructor(public navCtrl: NavController) {

  }



  num(x) {

    if (this.numuro == '') {
      this.numero_1 += x;
    }
    if (this.numuro == '*') {
      this.numero_2 += x;
      this.resultado = parseInt(this.numero_1) * parseInt(this.numero_2);
    }

    if (this.numuro == '+') {
      this.numero_2 += x;
      this.resultado = parseInt(this.numero_1) + parseInt(this.numero_2);
    }

    if (this.numuro == '-') {
      this.numero_2 += x;
      this.resultado = parseInt(this.numero_1) - parseInt(this.numero_2);
    }
    if (this.numuro == '/') {
      this.numero_2 += x;
      this.resultado = parseInt(this.numero_1) / parseInt(this.numero_2);
    }
    if (this.numuro == '√') {
      this.numero_2 += x;
      this.resultado = Math.sqrt(parseInt(this.numero_2));

    }


  }

  apagar() {
    this.numero_1 = '';
    this.numero_2 = '';
    this.resultado = 0;
    this.numuro = ''
  }

  addSegNum(d: string) {
    this.numuro = d;
    console.log("O numuro " + this.numuro);
  }


}







