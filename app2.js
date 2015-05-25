// Write code here
$(function() {
    var $loonsCon = $("#looney-toons-wrapper");
    var loonTemp = _.template($("#looney-toons-template").html());

    _(loons).each(function(loon) {
        var $loon = $(loonTemp(loon));
        $loonsCon.append($loon);
    });
});
