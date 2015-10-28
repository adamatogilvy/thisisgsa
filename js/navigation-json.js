$(function() {
	// Request for nav items via ajax
	var json = (function() {	
		var json = null;
		$.ajax({
			async: false,
			global: false,
			url: "/resources/json/gsa-navigation.json",
			dataType: "jsonp",
			jsonpCallback : "returnNav",
			success: function (data) {
				json = data;
			}
		});
		return json;
	})();
	var nav = $("#main-nav-template");
	var template = Handlebars.compile(nav.html());
	$('#main-nav').html(template(json));
	
	var mobileNav = $('#mobile-nav-template');
	var mobileTemplate = Handlebars.compile(mobileNav.html());
	$('#slideout-menu > ul').html(mobileTemplate(json));
	
	var footerNav = $('#footer-links-template');
	var footerTemplate = Handlebars.compile(footerNav.html());
	$('#footer-links').html(footerTemplate(json));
});

