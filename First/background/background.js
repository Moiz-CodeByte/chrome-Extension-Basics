console.log("i am from background.js");

// chrome.runtime.onInstalled.addListener(() => {
//       chrome.tabs.create({
//         url: "https://google.com"
//       });
//   });
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//      console.log(request);
//      console.log(sender);
//     console.log(sendResponse);
//     sendResponse({ farewell: "Goodbye"})

//     })
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    console.log(sender);
    // console.log(sendResponse);
    sendResponse({ farewell: "Goodbye"});
    
});