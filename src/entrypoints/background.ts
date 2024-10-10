import { defineBackground } from 'wxt/background';

export default defineBackground(() => {
  console.log('Background script loaded');

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'scrapeText') {
      chrome.tabs.sendMessage(sender.tab!.id!, { action: 'scrapeText' }, (response) => {
        sendResponse(response);
      });
      return true; // Indicates that the response is asynchronous
    }
  });
});