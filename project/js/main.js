import { troops } from "../js/card.js";

const Domselectors = {
  CARDDISPLAY: document.getElementById("cardDisplay"),
  PreviouslyGeneratedCard: document.getElementById("generatedcards"),
  generatebutton: document.getElementById("generateButton"),
}

function generatecard() {
  // function generates a card by selecting a random array inside the big array troops by using math random.
  const randomIndex = Math.floor(Math.random() * troops.length);
  return troops[randomIndex];
}

function generatenew() {
  // function will generate a new card when the button is pressed
  const randomCard = generatecard();
  Domselectors.CARDDISPLAY.insertAdjacentHTML=
      `
      <div class ="card">
      <p>Generated Card: 
      ${randomCard.name}
       Description:
      ${randomCard.description}<p/>
      </div>`
  
}
generateButton.addEventListener("click", generatenew);


for (let i = 0; i < troops.length; i++){
  if( i === 30 ){

  }
}