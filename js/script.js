function initAdvice() {
  const utils = {
    diceButton: document.querySelector(".card-dice img"),
    number: document.querySelector(".card h2"),
    advice: document.querySelector(".card p"),
    userEvents: ["click", "touchstart"],
  };

  function showOnScreen(number, advice) {
    utils.number.innerText = `Advice #${number}`;
    utils.advice.innerText = `"${advice}"`;
  }

  async function generateNewAdvice() {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const adviceJSON = await advice.json();
    const number = adviceJSON.slip.id;
    const text = adviceJSON.slip.advice;
    showOnScreen(number, text);
  }

  generateNewAdvice();

  utils.userEvents.forEach((userEvent) => {
    utils.diceButton.addEventListener(userEvent, generateNewAdvice);
  });
}

initAdvice();
