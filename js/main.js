$(function() {
  // Handler for .ready() called.

  $("img.info").click(function() {
  	console.log("clicked");
  	$("ul.info-sidebar").fadeToggle("fast");
});




  //Social nav toggle when clicked

  $("img.social").click(function() {
  	console.log("clicked");
  	$("ul.social-network").fadeToggle("fast");
});

});