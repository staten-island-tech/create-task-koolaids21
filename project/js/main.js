import { troops } from "../js/card.js";

const Domselectors = {
  CARDDISPLAY: document.getElementById("cardDisplay"),
  generatebutton: document.getElementById("generateButton"),
};

function generatecard() {
  // function generates a card by selecting a random array inside the big array troops by using math random.
  const randomIndex = Math.floor(Math.random() * troops.length);
  return troops[randomIndex];
}

Domselectors.generatebutton.addEventListener("click", generatenew);

function generatenew() {
  // function will generate a new card when the button is pressed
  const randomCard = generatecard();
  Domselectors.CARDDISPLAY.insertAdjacentHTML(
    "beforeend",
    `
      <div class ="card">
      <p>Generated Card: 
      ${randomCard.name}
       Description:
      ${randomCard.description}<p/>
      </div>`
  );
  cardlimit();
}

function cardlimit() {
  const carddisplayed = Domselectors.CARDDISPLAY.querySelectorAll(".card");
  const cardAmount = carddisplayed.length;

  if (cardAmount > 8) {
    const extracards = cardAmount - 8;
    for (let i = 0; i < extracards; i++) {
      Domselectors.CARDDISPLAY.removeChild(carddisplayed[i]);
    }
  }
}
