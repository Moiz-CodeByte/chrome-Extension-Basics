chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "logValues") {
      const chatList = document.querySelector('[aria-label="Chats"]').innerText.split(' \n·\n');
      let usersDataString = "";

      for (let i = 0; i < chatList.length; i++) {
          var href = document.querySelectorAll('[aria-label="Chats"] [role="gridcell"] a')[i];
          href = href ? href.getAttribute('href') : null;
          const userInfo = chatList[i].split('\n');
          const name = userInfo[0];
          const lastMessage = userInfo[1];

          
          usersDataString += `No: ${i+1} ,Name: ${name}, Link to profile: ${href}, Last Message: ${lastMessage}\n`;
      }
      chrome.storage.local.set({ key: usersDataString }).then(() => { console.log("Data is stored"); });
      chrome.storage.local.get(["key"]).then((result) => { console.log("Data is " + result.key); }); 

      
  }
});


 //const href = document.querySelectorAll('[aria-label="Chats"] [role="gridcell"] a')[0].getAttribute('href');
      // const Name = document.querySelectorAll('[aria-label="Chats"] [role="gridcell"] span')[0].innerText;
      // const lastMessage = document.querySelectorAll('[aria-label="Chats"] [role="gridcell"]')[0].innerText;
  // console.log("Href: "+ "https://www.facebook.com"+href);
      // console.log("Name: "+ Name + " Last Message: "+ lastMessage);

  