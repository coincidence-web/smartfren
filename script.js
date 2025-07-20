
document.addEventListener("DOMContentLoaded", function () {
  function redirectToSmartlink() {
    saveVisitTime();
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = getRandomSmartlink() + "?src=landing";
      a.rel = "noreferrer";
      a.target = "_self";
      a.click();
    }, 500);
  }

  function redirectToPage2() {
    window.location.href = "page2.html";
  }

  function startCountdown() {
    let count = 5;
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;
    const timer = setInterval(() => {
      count--;
      countdownEl.textContent = count;
      if (count <= 0) clearInterval(timer);
    }, 1000);
  }

  function checkAccess() {
    if (hasVisitedRecently()) {
      document.body.innerHTML = "<h1 class='warning'>Akses Dibatasi</h1><p>Silakan coba kembali setelah 8 jam.</p>";
      return;
    }

    const bait = document.createElement('div');
    bait.className = 'adsbox';
    bait.style = 'height:1px; width:1px; position:absolute; left:-9999px;';
    document.body.appendChild(bait);

    setTimeout(() => {
      if (bait.offsetHeight === 0) {
        redirectToPage2();
      } else {
        document.referrer = getRandomReferer();
        redirectToSmartlink();
      }
      bait.remove();
    }, 100);
  }

  function page2Logic() {
    let scrollY = 0;
    const scrollInterval = setInterval(() => {
      scrollY += 2;
      window.scrollTo({ top: scrollY, behavior: "smooth" });
      if (scrollY > 100) clearInterval(scrollInterval);
    }, 300);

    setTimeout(() => {
      window.location.href = getRandomSmartlink() + "?fallback=" + new Date().getTime();
    }, 7000);
  }

  // Routing logic based on page
  if (document.body.classList.contains("index-page")) {
    startCountdown();
    checkAccess();
  }

  if (document.body.classList.contains("page2")) {
    page2Logic();
  }
});
