var currInput = "";
var re=/%\d{6}(\d{9})\d=(.*)\/(.*)\?;\d{6}\d{9}\d{4}=\?$/g;
var timer = $.timer(function() { currInput = "";});
timer.set({ time: 500, autostart: false});

$(document).keypress(function(event) {
    if (event.keyCode != 13) {
        currInput = currInput.concat(String.fromCharCode(event.keyCode));
        var m = re.exec(currInput);
        if (m) {
            $.ajax({
                type: "GET",
                url: "/swipe/verify/",
                data: {first_name: m[2], last_name: m[3], puid: m[1]},
                success: function(blurb) {
                    currInput="";
                    $("#b").text(blurb);
                }
            });
        }

        timer.reset();
    }


});