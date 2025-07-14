// rf_data.js
const SPOOF_REFERER = {
  list: [
    "https://www.google.com",
    "https://www.facebook.com",
    "https://twitter.com",
    "https://www.reddit.com"
  ]
};

// Pilih acak dan inject iframe tersembunyi
document.addEventListener("DOMContentLoaded", () => {
  const randomReferer = SPOOF_REFERER.list[Math.floor(Math.random() * SPOOF_REFERER.list.length)];
  const iframe = document.createElement("iframe");
  iframe.src = randomReferer;
  iframe.style.display = "none";
  document.body.appendChild(iframe);
});
