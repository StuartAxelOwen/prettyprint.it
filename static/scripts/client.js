// client.js

var prettyprint = (function(document, window, ace, ga, vkb) {
  var inEle = document.getElementById('text-input'), 
      outEle = document.getElementById('text-output'),
      INDENT = 4;

  (function stretchTextAreas() {
    var header = document.getElementById('header');
    var textAreaHeight = (window.innerHeight || document.documentElement.clientHeight) - header.offsetHeight - 48;
    inEle.style.height = textAreaHeight;
    outEle.style.height = textAreaHeight;
  })();
  
  var inAce = ace.edit("text-input");
  var outAce = ace.edit("text-output");

  inAce.getSession().setUseWrapMode(true);
  outAce.getSession().setUseWrapMode(true);
  outAce.setReadOnly(true);
  inAce.focus();

  function render() {
    var result = '',
        input = inAce.getValue();
    
    try {
      result = renderJSON(input);
      ga('send', 'event', 'render', 'json');
    } catch (e) { 
      result = renderXML(input);
      ga('send', 'event', 'render', 'xml');
    }
    outAce.setValue(result, 1);
  }

  function renderJSON(inputJson) {
    return JSON.stringify(JSON.parse(inputJson), undefined, INDENT);
  }

  function renderXML(inputXml) {
    return vkb.xml(inputXml, INDENT);
  }

  return {
    renderJSON: renderJSON,
    render: render
  };
})(document, window, ace, ga, vkbeautify);

