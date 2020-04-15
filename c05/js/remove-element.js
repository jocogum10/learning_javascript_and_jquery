var removeEl = document.getElementsByTagName('li')[3];  // the element to remove

var containerEl = removeEl.parentNode;                  // its containing element

containerEl.removeChild(removeEl);                      // removing the element