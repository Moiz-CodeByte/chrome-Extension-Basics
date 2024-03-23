console.log("I am from popup.js");

chrome.action.setBadgeText(
    {
      text: "0"
    });
chrome.action.setBadgeBackgroundColor(
       { color: '#ffff'}
      );
chrome.action.getBadgeText({}, (result) => {
    console.log(result);
});


