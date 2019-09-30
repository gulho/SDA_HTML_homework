$('#userForm').submit(function (e) {
    e.preventDefault();
    var firstName = $('#firstName').val().trim();
    var password = $('#password').val().trim();
    var gender = $('#gender').val();
    var address = $('#address').val().trim();
    var marital = $('#marital').val();
    var games = [];
    var agreement = $('#agreement').is(':checked');

    $('.games:checked').each(function() {
        games.push($(this).val());
    });


    $('#errors').empty();
    if(firstName == "") {
        showError("First name is mandatory")
    }
    if(password == "") {
        showError("Password is mandatory")
    }
    if(address == "") {
        showError("Address is mandatory")
    }
    if(!agreement) {
        showError("Agreement must be checked");
    }
    return false;
});

function showError(str) {
    var alert = $('<div>').addClass("alert alert-danger").attr("role", "alert").text(str)
    $('#errors').append(alert);
}