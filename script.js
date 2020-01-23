function anim(elem) {
    var sizemax = elem.css("width");
    elem.hide();
    elem.css("width",0);
    setTimeout(function() {
        elem.show();
        elem.css("width",sizemax);
        //elem.animate({width:sizemax},1000);
    }, 700);
}

//$("#contact-container").hide();
// switch language
if ($(location).attr('search') === '?lang=FR') {
    $(".fr").show();
    $(".en").hide();
} else {
    $(".en").show();
    $(".fr").hide();
};

$(document).ready(function() {
    //animations progress bar
    anim($("#bar-3il"));
    anim($("#bar-toeic"));
    anim($("#bar-uqac"));
    anim($("#bar-python"));
    anim($("#bar-cpp"));
    anim($("#bar-java"));
    anim($("#bar-web"));
    anim($("#bar-c"));
    anim($("#bar-csharp"));
    anim($("#bar-php"));
    anim($("#bar-postgre"));
    anim($("#bar-oracle"));
    anim($("#bar-mysql"));
    anim($("#bar-qt"));
    anim($("#bar-jquery"));
    anim($("#bar-dotnetcore"));
    anim($("#bar-unity"));
    anim($("#bar-unreal"));

    // Hide or Show sections

    $("#education-show").click(function(event) {
        $("#education-content").slideToggle(100);
        if ($("#education-show").html() === '<i class="fas fa-minus-square"></i>') {
            $("#education-show").html('<i class="fas fa-plus-square"></i>');
        } else {
            $("#education-show").html('<i class="fas fa-minus-square"></i>');
        }
    });

    $("#skill-show").click(function(event) {
        $("#skill-content").slideToggle(100);
        if ($("#skill-show").html() === '<i class="fas fa-minus-square"></i>') {
            $("#skill-show").html('<i class="fas fa-plus-square"></i>');
        } else {
            $("#skill-show").html('<i class="fas fa-minus-square"></i>');
        }
    });

    $("#blog-show").click(function(event) {
        $("#blog-content").slideToggle(100);
        if ($("#blog-show").html() === '<i class="fas fa-minus-square"></i>') {
            $("#blog-show").html('<i class="fas fa-plus-square"></i>');
        } else {
            $("#blog-show").html('<i class="fas fa-minus-square"></i>');
        }
    });

    $("#work-show").click(function(event) {
        $("#work-content").slideToggle(100);
        if ($("#work-show").html() === '<i class="fas fa-minus-square"></i>') {
            $("#work-show").html('<i class="fas fa-plus-square"></i>');
        } else {
            $("#work-show").html('<i class="fas fa-minus-square"></i>');
        }
    });

    $("#contact-show").click(function(event) {
        $("#contact-container").slideToggle(100);
        if ($("#contact-show").html() === '<i class="fas fa-minus-square"></i>') {
            $("#contact-show").html('<i class="fas fa-plus-square"></i>');
        } else {
            $("#contact-show").html('<i class="fas fa-minus-square"></i>');
        }
    });
});
