(function($){
	
     $.fn.extend({  
         mobilemenu: function() {       
            return this.each(function() {
            	
            	var $ul = $(this);
            	
				if($ul.data('accordiated'))
					return false;
													
				$.each($ul.find('ul, li>div'), function(){
					$(this).data('accordiated', true);
					$(this).hide();
				});
				
				$.each($ul.find('span.grower'), function(){
					$(this).click(function(e){
						
						activate(this);
						return void(0);
					});
				});
				
				
				
				function activate(el,effect){
					$(el).toggleClass('active');
					$(el).parent('li').toggleClass('active');
					$(el).siblings('ul, div')[(effect || 'slideToggle')]((!effect)?'fast':null);
				}
				
            });
        } 
    }); 
})($);

$(document).ready(function () {
		$('div.pt_custommenu_mobile ul.dhtml').hide();
	$("ul.mobilemenu li").each(function(){
		if( $(this).children('ul').length > 0) {
			$(this).append('<span class="grower"><a href="javascript:void(0)"></a></span>');
		}
      });
	
	$('ul.mobilemenu').mobilemenu();
	$('#pt_custommenu_itemmobile').slideUp();
	$("ul.mobilemenu li.active").each(function(){
		$(this).children().next("ul").css('display', 'block');
	});
    
	//mobile
	$('.btn-navbar').click(function() {
		
		var chk = 0;
		if ( $('#navbar-inner').hasClass('navbar-inactive') && ( chk==0 ) ) {
			$('#navbar-inner').removeClass('navbar-inactive');
			$('#navbar-inner').addClass('navbar-active');
			$('#pt_custommenu_itemmobile').slideDown();
			chk = 1;
		}
		if ($('#navbar-inner').hasClass('navbar-active') && ( chk==0 ) ) {
			$('#navbar-inner').removeClass('navbar-active');
			$('#navbar-inner').addClass('navbar-inactive');			
			$('#pt_custommenu_itemmobile').slideUp();
			chk = 1;
		}
	});    
    
});