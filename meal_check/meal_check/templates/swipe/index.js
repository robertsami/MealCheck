$(document).ready(function() {
    $("button").click(function() {
        $("#b").text("abc");
    });
});

$(document).keypress(function(event) {
    if (lastTime + 2 < (new Date).getSeconds()) {
        event = event || window.event;
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        currentInput = currentInput + charStr;
        lastTime = (new Date).getSeconds();
    }
    alert(currentInput);
});