console.log("i am from background.js");

chrome.runtime.onInstalled.addListener(() => {
      chrome.tabs.create({
        url: "https://google.com"
      });
  });