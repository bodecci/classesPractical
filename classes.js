let deck = [];

class Card {
  constructor(number, suit){
    this.number = number;
    this.suit = suit;
    this.faceUp = false;
  }//end constructor
  color(){
    if(this.suit === 'Spades' || this.suit === 'Clubs'){
      return 'BLACK';
    }//end BLACK
      else{
        return 'RED';
      }//end RED
  }//end color method
  flip(){
    this.faceUp = !this.faceUp;// toggles the boolean
    return this;// return the Card itself
  }//end flip method
};//end Card

function createDeck(){
  for (let i=0; i<4; i++){
    let suit = 'Hearts';
    if(i === 1){
      suit = 'Spades';
    }//end if Spades
    else if(i === 2){
      suit = 'Clubs';
    }//end else if Clubs
    else if (i === 3) {
      suit = 'Diamonds';
    }//end else if Diamonds
    for(let j=0; j<13; j++){
      deck.push(new Card(j+1, suit) );
    }//end card loop
  }//end suit loop
}//end createDeck

createDeck();

function drawCard(){

}//end drawCard
