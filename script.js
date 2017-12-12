$('.toolbar-commenting').append($("<div></div>", {
    "class": "toolbar-group"
}).load(chrome.extension.getURL("buttons.html")));

$(document).on('click', '.template1', function() {
    $('.menu-template').text($(this).text())
    $.get(chrome.extension.getURL('template_bugfix.md'), function(data) {
        $('#issue_body').val(data);
    });
});

$(document).on('click', '.template2', function() {
    $('.menu-template').text($(this).text())
    $.get(chrome.extension.getURL('template_feature.md'), function(data) {
        $('#issue_body').val(data);
    });
});