/* global  $*/

$(function () {
     
    'use strict';
    var userError = true,
        cityError = true,
        cellError = true,
        msgError  = true;
    
    $('.username').blur(function() {
        
        if ($(this).val().length < 4) {
            
            $(this).css('border','1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            userError  = true;
            
        } else {
            $(this).css('border','1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
            userError = false;
        }
        
    });
    
    
    $('.city').blur(function() {
        
        if ($(this).val().length < 4) {
            
            $(this).css('border','1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            cityError = true;
            
        } else {
            $(this).css('border','1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
             cityError = false;
        }
          
    });
    
        $('.cell').blur(function() {
        
        if ($(this).val().length <  11){
            
            $(this).css('border','1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            cellError = true;
            
        } else {
            $(this).css('border','1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
             cellError = false;
        }
          
    });
    
        $('.mg').blur(function() {
        
        if ($(this).val().length < 11){
            
            $(this).css('border','1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            msgError = true;
            
        } else {
            $(this).css('border','1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
             msgError = false;
        }
          
    });
    
    $('.contact-form').submit(function(e){
        
         if (userError === true || cityError === true || cellError === true || msgError  === true) {
             
             e.preventDefault();
             
             $('.username, .city, .mg , .cell').blur();
         }
        
    
        
      });
    
});