// popup.js
function startProcess() {
  document.querySelectorAll('#thumbnail >yt-image >img')[18].click();
  setTimeout(() => {
    document.querySelectorAll('#subscribe-button-shape >button')[0].click();
  }, 10000); 
}


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('startProcess').addEventListener('click', function() {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: startProcess
      });
    });
  });
});
