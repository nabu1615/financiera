$(function() {
	var top = $(".border-top"),
		right = $(".border-right"),
		bottom = $(".border-bottom"),
		left = $(".border-left");
	TweenLite.to(top, 1.5, {width: "100%"});
	TweenLite.to(right, 1.5, {height: "100%"});
	TweenLite.to(bottom, 1.5, {width: "100%"});
	TweenLite.to(left, 1.5, {height: "100%"});
});
