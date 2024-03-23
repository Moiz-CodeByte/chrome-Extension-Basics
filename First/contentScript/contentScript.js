console.log("I am from contentScript.js");

chrome.runtime.sendMessage({Greating : "Hello"},(response) => {
    console.log(response);
    console.log(response.farewell);
      
  });

chrome.storage.local.set({ name: "Moji" }).then(() => { console.log("Name is set"); });

chrome.storage.local.get(["name"]).then((result) => { console.log("Name is " + result.name); }); 