$('button.button--zoom').click(function(){
            $('.preview').css("background", "#E54329");
        });
$('button.button--close').click(function(){
    setTimeout(function(){
        $('.preview').css("background", "#272727");
    }, 1050);
});
