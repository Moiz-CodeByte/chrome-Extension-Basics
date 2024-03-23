console.log("I am from contentScript.js");

chrome.runtime.sendMessage({Greating : "Hello"},(response) => {
    console.log(response);
    console.log(response.farewell);
      
  });