"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Calling Message Sidebar Toggle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".chat-message-sidebar-toggle").click(function () {
		$(".chat-calling-text-message-sidebar").toggleClass("active");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! TimeTracker !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".timetracker").timetracker();
	$(".call-received").click(function () {
		$(".call-received").hide(), $(".call-ended").show(), $(".timetracker").addClass("active"), $(".ringing").removeClass("active");
	});
	$(".call-ended").click(function () {
		$(".call-ended").hide(), $(".call-received").show(), $(".timetracker").removeClass("active"), $(".ringing").addClass("active");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Emoji Picker !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".emoji-picker").emojioneArea();
});
