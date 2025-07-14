// rf_data.js
const SPOOF_REFERER = {
  list: [
  "https://coinmarketcap.com/airdrop/",
  "https://dappradar.com/quest",
  "https://zealy.io/c/crypto-community/questboard",
  "https://galxe.com/quest",
  "https://faucetpay.io/faucet-list",
  "https://www.binance.com/en/giveaway",
  "https://www.okx.com/jumpstart",
  "https://community.trustwallet.com/c/announcements",
  "https://www.reddit.com/r/cryptocurrencydeals/",
  "https://www.coingecko.com/account/candy"
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
