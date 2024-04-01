function Selector(selector, element) {
  const inputField = document.querySelector(selector);
  if (inputField) {
    inputField.focus();
    document.execCommand('insertText', false, element);
  } else {
    console.error(`Input field with selector not found.`);
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  password = request.password;
  username = request.username;
  if (request.action === 'login') {
    Selector('input[name="pc-login-username"]', username);
    Selector('input[name="pc-login-password"]', password);
  
    const loginButton = document.querySelector('[name="pc-login-btn"]');
    if (loginButton) {
      loginButton.click();
    } else {
      console.error('Login button not found.');
    }
  } else {
    console.error('Login form inputs not found.');
  }
});
