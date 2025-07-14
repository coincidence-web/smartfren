// main.js
document.addEventListener("DOMContentLoaded", () => {
  const claimBtn = document.getElementById("claimBtn");
  const countdownEl = document.getElementById("countdown");

  let countdown = CONFIG.countdownSeconds;

  claimBtn.addEventListener("click", () => {
    claimBtn.innerText = "Sedang memproses...";
    window.location.href = CONFIG.smartlink;
  });

  const timer = setInterval(() => {
    if (countdown > 0) {
      countdown--;
      countdownEl.innerText = `Akan dialihkan dalam ${countdown} detik...`;
    } else {
      clearInterval(timer);
      window.location.href = CONFIG.smartlink;
    }
  }, 1000);
});
