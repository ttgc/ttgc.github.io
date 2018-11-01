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
    anim($("#bar-toeic"));
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

    //Contact form
    // $("#feedbackForm").submit(function(event) {
    //     var url = 'https://discordapp.com/api/webhooks/502588410322747402/kbHPoiSDRvsSGVjjI5zqKAeD4Qawgw9OZLXSWo3jg0OlEjLx_hFswqDA_Aa-HtfdSzhH';
    //     var data = {
    //         content: `You have been contacted on your CV page by __**${$("#name").val()}**__\nEmail adress : __*${$("#email").val()}*__\n\n${$("#message").val()}`
    //         /*embeds: [{
    //             title: 'CV Contact Form',
    //             description: 'You have been contacted on your CV page !',
    //             url: `mailto:${$("#email").val()}`,
    //             color: 255,
    //             author: {
    //                 name: $("#name").val(),
    //                 url: `mailto:${$("#email").val()}`
    //             },
    //             fields: [{
    //                 name: 'Email :',
    //                 value: $("#email").val(),
    //                 inline: true
    //             }, {
    //                 name: 'Message :',
    //                 value: $("#message").val(),
    //                 inline: true
    //             }]
    //         }]*/
    //     }
    //     var test = $.post(url,data,function(data,status) {
    //         console.log(`Status ${status}\n\n${data}`);
    //         alert("Message sent !");
    //     })
    //         .fail(function(error) {
    //             console.log(`${error.responseText}`);
    //         });
    // });

    //Download
    /*$("#download").click(function(event) {
        var printDoc = new jsPDF();
        var specialElementHandlers = {
            '#ignorePDF': function (element, renderer) {
                return true;
            }
        };
        printDoc.save('PIOT Thomas - CV.pdf');
    });*/

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
