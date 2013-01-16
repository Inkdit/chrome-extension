
function getWebEstimateUrl() {
  var actionBarRight = document.getElementsByClassName('invoice-action-buttons')[0];

  for(var i = 0; i < actionBarRight.children.length; i++) {
    var button = actionBarRight.children[i];
    if(button.nodeName == "A" && button.innerText == 'View the Web Estimate')
      return button.href;
  }

  // if we get here we haven't found the button; that's an error.
}

function getImportUrl(estimateUrl) {
  var u = encodeURIComponent(estimateUrl);
//  return 'http://localhost:3000/i/harvest/import-estimate?url=' + u;
  return 'https://inkdit.com/i/harvest/import-estimate?url=' + u;
}

var actionBarLeft = document.getElementsByClassName('f-left')[0];

// set up our link
var newButton = document.createElement('a');

// make it match the other buttons in the toolbar
newButton.className = 'btn-action btn-chrome';
newButton.innerHTML = '<img src="https://inkdit.com/assets/icons/16-inkdit.png" style="vertical-align:middle"> Send Through Inkdit';

// TODO: don't create the button if this fails
var estimateUrl = getWebEstimateUrl();
newButton.href = getImportUrl(estimateUrl);

actionBarLeft.appendChild(newButton);
