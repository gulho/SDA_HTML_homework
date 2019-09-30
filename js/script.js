$('#userForm').submit(function () {
    var firstName = $('#firstName').val();
    var password = $('#password').val();
    var gender = $('#gender').val();
    var address = $('#address').val();
    var marital = $('#marital').val();
    var games = [];
    var agreement = $('#agreement').is(':checked');

    $('.games:checked').each(function() {
        games += games.add(this.val());
    })

    console.log(games);
    return false;
});