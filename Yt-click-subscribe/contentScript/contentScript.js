function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
chrome.runtime.onMessage.addListener( async function(message, sender, sendResponse) {
    if (message.action === 'startProcess') {
            await sleep(4000);
            document.querySelectorAll('#thumbnail >yt-image >img')[2].click();
            await sleep(3000);
            document.querySelectorAll('#subscribe-button-shape >button')[0].click();
            await sleep(2000);
            window.scrollBy(0,400)
            await sleep(2000);
           document.querySelector('#placeholder-area').click()
            await sleep(5000);
            const commentInput = document.querySelector('#contenteditable-root');
            commentInput.focus();
            document.execCommand('insertText', false, 'Hello World');
            await sleep(5000);
            document.querySelector('#submit-button > yt-button-shape > button').click();
          }
            
        });
    
    