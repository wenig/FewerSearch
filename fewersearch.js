/*-------------------------FewerSearch by Phillip Wenig---------------------------*/

$(document).ready(function () {
    $("#fewersearch").keyup(function () {
        if ($(this).val() != "") {
            var textb = $(this).val().split(" ");
            $(".feweritem").each(function () {
                var option = $(this).attr("data-fewer");
                var boolOpt = false;
                for (var i = 0; i < textb.length; i++) {
                    try {
                        if (option.toUpperCase().match(textb[i].toUpperCase()) && textb[i] != "") {
                            if (!boolOpt) {
                                $(this).parent().css("display", "block");
                            }
                        } else if (textb[i] != "") {
                            $(this).parent().css("display", "none");
                            boolOpt = true;
                        }
                    }
                    catch (err) {
                        $(this).parent().css("display", "none");
                        boolOpt = true;
                    }
                }
            });
        } else {
            $(".fewerrows").css("display", "block");
        }
    });
});