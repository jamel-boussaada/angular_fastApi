jQuery(document).ready(function($) {

	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs_slider li span").click(function() {
		$("ul.tabs_slider li").removeClass("active");
		$(this).parent().addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).parent().attr("rel"); 
		$("#"+activeTab) .fadeIn().addClass("animatetab");  
	});
	
	if(POS_HOME_PRODUCTTAB_PAGINATION==null || POS_HOME_PRODUCTTAB_PAGINATION =="") {POS_HOME_PRODUCTTAB_PAGINATION = false} else { POS_HOME_PRODUCTTAB_PAGINATION = true}
	if(POS_HOME_PRODUCTTAB_NAV==null || POS_HOME_PRODUCTTAB_NAV =="") {POS_HOME_PRODUCTTAB_NAV = false} else {POS_HOME_PRODUCTTAB_NAV = true}
	var test=[0, 1 ,2, 3];
	test.forEach(function(j) {
		$(".productTabContent" + j).owlCarousel({
			smartSpeed: POS_HOME_PRODUCTTAB_SPEED,
			dots :POS_HOME_PRODUCTTAB_PAGINATION,
			nav : POS_HOME_PRODUCTTAB_NAV,
			scrollPerPage: true,
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:2,
				},
				768:{
					items:3,
				},
				992:{
					items:4,
				},
				1200:{
					items:POS_HOME_PRODUCTTAB_ITEMS,
				}
			}
		});
		
	});
});
