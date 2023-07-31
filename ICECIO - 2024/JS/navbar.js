$(document).ready(function() {
	// Get current page path
	var path = window.location.pathname.split("/").pop();
  
	// Account for home page with empty path
	if (path === '') {
	  path = 'index.html';
	}
  
	// Find target link and add active class
	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	target.parent().addClass('active');
  });
  