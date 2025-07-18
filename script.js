const redirectURL = "https://clickadu.com/your-smartlink-dummy";
let countdownStart = 10;
let countdownEl = document.getElementById("countdown");

// IP Limiter
function hasVisitedRecently() {
  return document.cookie.includes("visited=true");
}

function setVisitCookie() {
  const d = new Date();
  d.setTime(d.getTime() + (8 * 60 * 60 * 1000)); // 8 jam
  document.cookie = "visited=true; expires=" + d.toUTCString() + "; path=/";
}

// Auto scroll ringan
function autoScroll() {
  let pos = 0;
  setInterval(() => {
    window.scrollTo(0, pos++);
  }, 1000);
}

// Countdown + redirect
function startCountdown() {
  const timer = setInterval(() => {
    countdownEl.textContent = countdownStart;
    countdownStart--;
    if (countdownStart < 0) {
      clearInterval(timer);
      window.location.href = redirectURL;
    }
  }, 1000);
}

// Adblock fallback (sederhana)
function detectAdblock(callback) {
  const bait = document.querySelector(".bait-class");
  setTimeout(() => {
    const blocked = (bait && getComputedStyle(bait).display === "none") || bait.offsetHeight === 0;
    callback(blocked);
  }, 1000);
}

// Main logic
if (!hasVisitedRecently()) {
  setVisitCookie();
  autoScroll();

  detectAdblock(function (adblocked) {
    if (adblocked) {
      console.warn("Adblock terdeteksi. Tetap redirect.");
    }
    startCountdown(); // Redirect tetap berjalan
  });
} else {
  document.querySelector(".info").textContent = "Anda sudah mengunjungi halaman ini dalam 8 jam terakhir.";
}
