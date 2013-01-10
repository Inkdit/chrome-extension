function clickHandler(href){
  chrome.tabs.create({ url: href+'?utm_medium=chrome&utm_source=notifier' });
}

$(document).ready(function() {
  var bg = chrome.extension.getBackgroundPage();

  var items = [];

  for (var i in bg.messages) {
    items.push(bg.messages[i]);
  }

  $('<ul/>', {'class': 'notification-list', html: items.join('')}).appendTo('body');

  chrome.browserAction.setBadgeText({'text': ''});

  $('a').live('click', function() {
    clickHandler(this.href);
    return false;
  });
});
