function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
chrome.runtime.onMessage.addListener( async function(message, sender, sendResponse) {
    if (message.action === 'startProcess') {
            await sleep(4000);
            document.querySelectorAll('#thumbnail >yt-image >img')[2].click();
            await sleep(2000);
            let title =document.querySelector("#title > h1 > yt-formatted-string").innerText;
            chrome.storage.local.set({ name: title }).then(() => { console.log("Title is set"); });
            chrome.storage.local.get(["name"]).then((result) => { console.log("Title is " + result.name); }); 
          }
          
        });
    
    