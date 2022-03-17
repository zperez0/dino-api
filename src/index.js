import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import DinoFacts from './dino.js';

//create a forEach loop? ++ through a string
//push correct letters to empty array
// push remaining letters to empty array

export default class DinoLetters {
  constructor() {
    this.correctLetter = [];
    this.incorrectLetter = [];
    this.randomDinos = DinoFacts.getDinoFacts();
    console.log(randomDinos);
  }
}
//   //check for correct letters
//   correctLetters() {
//     //foreach
//     randomDinos.forEach((randomDinos) => {
//       if( randomDinos === this.correctLetter) {
//       return this.correctLetter.push();
//   } else {
//     return this.incorrectLetter.push(); 
//     }
//     })
//   }
// }

// end game 





$(document).ready(function() {
  $('#dinoName').click(function() {

    let promise = DinoFacts.getDinoFacts();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showDinosaurs').text(`Your dinosaur is ${body}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
