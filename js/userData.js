$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
};
if ($.urlParam("id") !== 0) {
    $.get("https://5d7e077fd756030014184069.mockapi.io/user/" + $.urlParam("id"),
        function (result) {
            $('#userId').html(result.id);
            $('#firstName').html(result.firstName);
            $('#password').html(result.password);
            $('#gender').html(result.gender);
            $('#address').html(result.address);
            $("#dob").html(result.dob);
            $("#games").html(result.games);
            $("#maritalStatus").html(result.maritalStatus);
            $("#acceptAgreement").html(result.acceptAgreement?"true":"false");
        },
        "json");
}