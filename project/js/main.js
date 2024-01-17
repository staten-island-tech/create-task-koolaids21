  import {troops} from '../js/card.js'

const Domselectors = {
  troop: document.querySelector("#app"),
};

Domselectors.troop.addEventListener("click", () =>{   //click this button to generate a random card that you should use in your next deck
function Algorithm(x) {
  Domselectors.troop.innerHTML = "";
  x.forEach((agent) => {
    Domselectors.troop.insertAdjacentHTML(
      "beforeend",
      ` <div class="card">
        </div>`
    );
  });
}}
)

troops.forEach();