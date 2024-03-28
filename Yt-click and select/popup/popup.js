//popup.js
document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('startProcess').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'startProcess'});
    });
  });
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "updateText") {
    
      document.getElementById('text').innerHTML = message.name;
  }
});
  
