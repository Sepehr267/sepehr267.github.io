hljs.highlightAll();
        
function copyToClipboard(selector) {
    var text = document.querySelector(selector).innerText;
    navigator.clipboard.writeText(text).then(function() {
        alert('Copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}