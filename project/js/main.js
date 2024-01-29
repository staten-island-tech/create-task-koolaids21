import { troops } from "../js/card.js";

function generatecard() {
  // function generates a card by selecting a random array inside the big array troops by using math random.
  const randomIndex = Math.floor(Math.random() * troops.length);
  return troops[randomIndex];
}
function generatenewcard() {
  // function will generate a new card when the button is pressed
  const carddisplay = document.getElementById("cardDisplay");
  const randomCard = generatecard();
  carddisplay.textContent =
    "Generated Card: " +
    randomCard.name +
    " Description: " +
    randomCard.description;
}
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generatenewcard);
