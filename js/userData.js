$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
};
if ($.urlParam("id") !== 0) {
    $.get("https://5d7e077fd756030014184069.mockapi.io/user/" + $.urlParam("id"),
        function (result) {
            $('#userData').append(JSON.stringify(result));
        });
}