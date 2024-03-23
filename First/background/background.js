console.log("i am from background.js");

// chrome.runtime.onInstalled.addListener(() => {
//       chrome.tabs.create({
//         url: "https://google.com"
//       });
//   });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request);
//     console.log(sender);
//     // console.log(sendResponse);
//     sendResponse({ farewell: "Goodbye"});
    
// });
//commemt this alarm immediately otherwise ur system will stuck in mean time.
// chrome.alarms.create('demoAlarm', {
//     delayInMinutes: 1/60,
//     periodInMinutes: 1/60
//   });
//   chrome.alarms.onAlarm.addListener((alarm) =>{
//     if(alarm.name === 'demoAlarm'){
//         console.log("Alarm fired do somethig..."+ new Date().getSeconds());
//     }
//   });

chrome.contextMenus.create({
    id: 'menu1',
     title: "Menu 1",
     contexts: ['all']
    });
chrome.contextMenus.create({
        id: 'menu2',
         title: "Menu 2",
         contexts: ['all']
        });
chrome.contextMenus.create({
            id: 'menu3',
             title: "Menu 3",
             contexts: ['all']
            });
chrome.contextMenus.remove('menu3');
chrome.contextMenus.onClicked.addListener((info,tab) =>{
    console.log(info);
    console.log(tab);
})