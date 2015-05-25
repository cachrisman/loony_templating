// Write code here
$(function() {
    var $loonsCon = $("#looney-toons-wrapper");
    var loonTemp = _.template($("#looney-toons-template").html());

    var $loon_html = $(loonTemp({collection: loons}));
    $loonsCon.append($loon_html);
});
