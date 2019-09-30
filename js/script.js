$('#userForm').submit(function (e) {
    e.preventDefault();
    var firstName = $('#firstName').val().trim();
    var password = $('#password').val().trim();
    var gender = $('#gender').val();
    var address = $('#address').val().trim();
    var dayOfBirth = $('#dayOfBirth').val();
    var marital = $('#marital').val();
    var games = [];
    var agreement = $('#agreement').is(':checked');
    var errors = $('#errors');
    errors.empty();
    $('.games:checked').each(function () {
        games.push($(this).val());
    });

    //$('#errors').empty();
    if (firstName === "") {
        showError("First name is mandatory");
    }
    if (password === "") {
        showError("Password is mandatory");
    }
    if (address === "") {
        showError("Address is mandatory");
    }
    if (dayOfBirth === "") {
        showError("Day of birth is mandatory");
    }
    if (!agreement) {
        showError("Agreement must be checked");
    }
    if (errors.children().length === 0) {
        $.post("https://5d7e077fd756030014184069.mockapi.io/user",
            {
                "firstName": firstName,
                "password": password,
                "gender": gender,
                "address": address,
                "dob": dayOfBirth,
                "games": games,
                "maritalStatus": marital,
                "acceptAgreement": agreement
            },
            function (response) {
                window.location.href = "userData.html?id=" + response.id;
            }
        );
    }
    return false;
});

function showError(str) {
    var alert = $('<div>').addClass("alert alert-danger").attr("role", "alert").text(str)
    $('#errors').append(alert);
}