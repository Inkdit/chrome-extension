var messages = [];

function gotNotifications(data) {
  var new_messages = [];

  $.each(data, function(key, val) {
    var messageContent = val.html;

    if (messages.indexOf(messageContent) == -1){
      chrome.browserAction.setBadgeText({'text': 'New'});
      chrome.browserAction.setBadgeBackgroundColor({'color': '#668823'});
    }

    new_messages.push(messageContent);
  });

  messages = new_messages;
}

function checkNotifications() {
  $.ajax({
    url:      'https://inkdit.com/n.json',
    dataType: 'json',
    headers:  {
      // jQuery doesn't send this header on cross-domain requests by default.
      "X-Requested-With": "XMLHttpRequest"
    },
    success:  gotNotifications
  });
}

checkNotifications();
setInterval(checkNotifications, 5000);
