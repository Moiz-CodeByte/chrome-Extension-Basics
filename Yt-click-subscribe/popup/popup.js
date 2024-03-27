// console.log("I am from popup.js");



// let btn = document.getElementById('btn');
// let text = document.getElementById('text');


   
   
//     // chrome.runtime.sendMessage({message : "response from popup"}, (response) => {
//     //     text.innerHTML= response.message
//     //     console.log(response.message);

//     // });
// //}):
document.getElementById('startButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: openYouTubeAndSubscribe
      });
    });
  });
  