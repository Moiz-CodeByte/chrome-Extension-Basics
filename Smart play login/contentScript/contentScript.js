chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'login') {
    const usernameInput = document.querySelector('input[name="pc-login-username"]');
    const passwordInput = document.querySelector('input[name="pc-login-password"]');
    if (usernameInput && passwordInput) {
      usernameInput.value = request.username;
      passwordInput.value = request.password;
      const loginButton = document.querySelector('[name="pc-login-btn"]');
      if (loginButton) {
        loginButton.click();
      } else {
        console.error('Login button not found.');
      }
    } else {
      console.error('Login form inputs not found.');
    }
  }
});
