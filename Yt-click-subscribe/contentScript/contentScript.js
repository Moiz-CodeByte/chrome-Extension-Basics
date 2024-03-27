//document.querySelectorAll('#thumbnail > yt-img > img')[3].click();
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: openYouTubeAndSubscribe
    });
  });
  
  function openYouTubeAndSubscribe() {
    const thumbnail = document.querySelectorAll('#thumbnail > yt-image > img')[3];
    if (thumbnail) {
      thumbnail.click();
      setTimeout(() => {
        const subscribeButton = document.querySelector('ytd-subscribe-button-renderer > paper-button');
        if (subscribeButton) {
          subscribeButton.click();
        }
      }, 2000); // Adjust the delay as needed to ensure the page loads properly
    }
  }
  