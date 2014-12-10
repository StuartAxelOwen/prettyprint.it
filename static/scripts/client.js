// client.js

var prettyprint = (function(document, window) {
  var inEle = document.getElementById('text-input');
  var outEle = document.getElementById('text-output');

  (function stretchTextAreas() {
    var header = document.getElementById('header');
    var textAreaHeight = (window.innerHeight || document.documentElement.clientHeight) - header.offsetHeight - 48;
    inEle.style.height = textAreaHeight;
    outEle.style.height = textAreaHeight;
  })();
  inEle.focus();

  function render() {
    renderJSON();
  }

  function renderJSON() {
    outEle.value = JSON.stringify(JSON.parse(inEle.value), undefined, 2);
  }

  return {
    renderJSON: renderJSON,
    render: render
  };
})(document, window);
