console.log("I am from popup.js");

// chrome.action.setBadgeText(
//     {
//       text: "0"
//     });
// chrome.action.setBadgeBackgroundColor(
//        { color: '#ffff'}
//       );
// chrome.action.getBadgeText({}, (result) => {
//     console.log(result);
// });

let btn = document.getElementById('btn');
let text = document.getElementById('text');

btn.addEventListener('click', () => {
    chrome.runtime.sendMessage({message : "response from popup"}, (response) => {
        text.innerHTML= response.message
        console.log(response.message);
    });
    });