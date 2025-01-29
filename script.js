function openCard() {
  document.querySelector('.card').classList.add('open');

  // Create floating petal confetti when opening the card
  for (let i = 0; i < 20; i++) {
      let petal = document.createElement("div");
      petal.classList.add("petal-confetti");
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = (3 + Math.random() * 3) + "s";
      document.body.appendChild(petal);

      // Remove petals after animation
      setTimeout(() => {
          petal.remove();
      }, 5000);
  }
}
