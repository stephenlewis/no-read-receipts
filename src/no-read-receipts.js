(function() {
  function processNodes(nodes) {
    for(var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(node.tagName != "BUTTON") {
        return;
      }
      if(node.getAttribute("name") == "Later") {
        var text = node.parentNode.parentNode.innerText;
        if(text.match(/read receipts requested/i)) {
          node.click();
        }
      }
    }
  };

  var observer = new WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      processNodes(mutation.addedNodes);
    });
  });
  observer.observe(document, { childList: true, subtree: true });
})();