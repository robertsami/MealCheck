// house the current card reader input
var currInput = "";
// a regex to parse the card reader input seen thus far
var re=/%\d{6}(\d{9})\d=(.*)\/(.*)\?;\d{6}\d{9}\d{4}=\?$/g;
// this timer object sets off a timer from the last key stroke to clear the input
var timer = $.timer(function() { currInput = "";});
timer.set({ time: 500, autostart: false});

var numSwipes = 0;

var inSwipeForm = false;
var lastTimer;

$.fn.center = function () {
   this.css("position","absolute");
   this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
   this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
   return this;
};

$(document).ready( function () {
    $("#swipe0").center();
    $("#instructions").center();
    $(".inputMore").click(function() {
        inSwipeForm = true;
        lastTimer.pause();
    });
});

$(document).keypress(function(event) {
    if (event.keyCode != 13) {

        currInput = currInput.concat(String.fromCharCode(event.keyCode));
        var m = re.exec(currInput);
        if (m) {
            if (!inSwipeForm) {
                $.ajax({
                    type: "GET",
                    url: "/swipe/verify/",
                    data: {first_name: m[2], last_name: m[3], puid: m[1]},
                    success: function(blurb) {
                        currInput="";
                        $("#swipe" + numSwipes++).after('<div class="card" id="swipe' + numSwipes + '">' + blurb + '</div>');
                        $("#swipe" + numSwipes).css("position","absolute")
                        $("#swipe" + numSwipes).css("top", ( $(window).height() - $("#swipe" + numSwipes).height() ) / 2  + "px")
                        $("#swipe" + numSwipes).css("left", (-1 * $("#swipe" + numSwipes).width()) + "px");

                        if (blurb == "member") {
                            $("#swipe" + numSwipes).css("background-color", "#00FF00");
                        }
                        else if (blurb == "not member") {
                            $("#swipe" + numSwipes).css("background-color", "#FF0000");
                        }

                        $("#swipe0").css("display", "none");
                        move("#swipe" + numSwipes)
                            .set("left", ( $(window).width() - $("#swipe" + numSwipes).width() ) / 2 + "px")
                            .end(function () { $("#swipe0").css("display", "block"); });

                        var swipeId = numSwipes;

                        lastTimer = $.timer(
                                function() {
                                    $("#swipe0").css("display", "none");
                                    move("#swipe" + swipeId).set("left", $(window).width() + "px").end();
                                }
                            ).set({ time: 5000, autostart: true});
                        
                        $("#b").text(blurb);

                    }
                });
            } else {
                $("#first_name_in").attr("value", m[2]);
                $("#last_name_in").attr("value", m[3]);
            }
        }

        timer.reset();
    }


});