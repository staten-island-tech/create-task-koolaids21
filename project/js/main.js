import { clashRoyaleCards } from "../js/card.js";

function generateRandomCard() {
  const randomIndex = Math.floor(Math.random() * clashRoyaleCards.length);
  return clashRoyaleCards[randomIndex];
}

function updateCardDisplay() {
  const cardDisplay = document.getElementById("cardDisplay");
  const randomCard = generateRandomCard();
  cardDisplay.textContent = "Generated Card: " + randomCard.name;
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", updateCardDisplay);
