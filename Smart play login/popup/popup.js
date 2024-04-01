document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('loginBtn').addEventListener('click', function () {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'login', username: username, password: password });
    });
  });
});
