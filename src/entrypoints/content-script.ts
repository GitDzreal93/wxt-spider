import { defineContentScript } from 'wxt/content-script';

export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    console.log('Content script loaded');

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === 'scrapeText') {
        const text = document.body.innerText;
        sendResponse({ text });
      }
    });
  },
});