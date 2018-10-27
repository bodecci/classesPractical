

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

 let card0 = new Card(6, 'Clubs');
 let card1 = new Card(1, 'Spades');
 let card2 = new Card(3, 'Hearts');
