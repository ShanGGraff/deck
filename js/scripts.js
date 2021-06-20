//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  let deck = [];
  let suits = ["heart", "club", "spade", "diamonds"]; 
  let value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  value.forEach(function(number) {
    suits.forEach(function(card) {
      let x = number + " of " + card;
      deck.push(x);
    });
  });
  playDeck = deck.join(" ");
  $(".container").text(playDeck);
});