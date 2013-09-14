// house the current card reader input
var currInput = "";
// a regex to parse the card reader input seen thus far
var re=/%\d{6}(\d{9})\d=(.*)\/(.*)\?;\d{6}\d{9}\d{4}=\?$/g;
// this timer object sets off a timer from the last key stroke to clear the input
var timer = $.timer(function() { currInput = "";});
timer.set({ time: 500, autostart: false});

var numSwipes = 0;

$.fn.center = function () {
   this.css("position","absolute");
   this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
   this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
   return this;
};

$(document).ready( function () {
    $("#member_status").center();
});

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
                    $("body").add("<div class="card" id=swipe" + numSwipes + "> " + blurb + "</div>")
                                .css("position","absolute")
                                .css("top", ( $(window).height() - this.height() ) / 2  + "px")
                                .css("left", -this.width() + "px");

                    move("#swipe" + numSwipes).set("left", ( $(window).width() - this.width() ) / 2 + "px");
                    $("#b").text(blurb);
                }
            });
        }

        timer.reset();
    }


});