function pullData() {
    var result = [];
    $.ajax({
        url: '../php/serverPull.php',
        type: 'POST',
        dataType: 'json',
        async: false,
        success: function(response) {
            result = response;
        }
    });
    return result;
}

var test = pullData();

