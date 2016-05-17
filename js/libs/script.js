
   $(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').stop(true,false).slideDown(400);
           
            },
            function(){
                $(this).children('.sub-menu').stop(true,false).slideUp(400);
               
            }
        );
    
        $( '.dropdown' ).hover(
            function(){          
                $('.sub-menu').animate({backgroundColor:"#144F5C",}, 800 );    
            },
            function(){      
                $('.sub-menu').animate({backgroundColor:"#4C6D78",}, 800 );
            }
        );


 $('.frame-checks-not-standart').nStCheck()
    }); 

    (function($) {
$(function() {

  $('input, select').styler();

});
})(jQuery);