$(window).bind("load", function(){
    $(window).on("scroll", 
    function flip(){
        const flips = document.querySelectorAll('.flip');

        for(var i = 0; i < flips.length; i++){

            var windowheight = window.innerHeight;
            var fliptop = flips[i].getBoundingClientRect().top;
            var flippoint = 200;

            if(fliptop < windowheight - flippoint){
                flips[i].classList.add('active');
            }
            else{
                flips[i].classList.remove('active');
            }
        }
    });
});