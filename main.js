// main.js
document.addEventListener("DOMContentLoaded", () => {
  const claimBtn = document.getElementById("claimBtn");
  const countdownEl = document.getElementById("countdown");

  let countdown = CONFIG.countdownSeconds;
  let interacted = false;

  function markInteracted() {
    interacted = true;
  }

  function userInteracted() {
    interacted = true;
    claimBtn.innerText = "Sedang memproses...";
    window.location.href = CONFIG.smartlink;
  }

  claimBtn.addEventListener("click", userInteracted);
  document.body.addEventListener("mousemove", markInteracted);
  document.body.addEventListener("touchstart", markInteracted);

  const timer = setInterval(() => {
    if (countdown > 0) {
      countdown--;
      countdownEl.innerText = interacted ? "Mengalihkan..." : `Menunggu interaksi... ${countdown}`;
    } else {
      clearInterval(timer);

      // Setelah countdown selesai → scroll ringan
      window.scrollBy({ top: 150, behavior: 'smooth' });

      // Tunggu 5 detik → redirect jika masih tidak ada interaksi
      setTimeout(() => {
        if (!interacted) {
          window.location.href = CONFIG.smartlink;
        }
      }, 5000);
    }
  }, 1000);
});
