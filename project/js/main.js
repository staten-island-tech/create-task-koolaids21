import { troops } from "../js/card.js";

const Domselectors = {
  CARDDISPLAY: document.getElementById("cardDisplay"),
  generatebutton: document.getElementById("generateButton"),
};

function generatecard() {
  const randomIndex = Math.floor(Math.random() * troops.length);
  return troops[randomIndex];
}

function generatenew() {
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
Domselectors.generatebutton.addEventListener("click", generatenew);
