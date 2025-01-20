"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Searching !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#notesSearch").bind("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".single-note-item").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});
