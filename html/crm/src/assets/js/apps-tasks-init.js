"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Searching !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#tasksSearch").bind("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".single-task-list").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Tasks Completed  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).on("change", "[data-checked-action='task-action']", function () {
	if ($(this).prop("checked")) {
		$(this).closest(".single-task-list").addClass("task-completed");
	} else {
		$(this).closest(".single-task-list").removeClass("task-completed");
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! BS5 DateRangePicker !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	const taskDateRange = document.getElementById("taskDateRange");
	const taskDateRangeAdd = document.getElementById("taskDateRangeAdd");
	new DateRangePicker(taskDateRange, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
	new DateRangePicker(taskDateRangeAdd, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Notes Editor !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	new Quill("#notesEditor", {
		placeholder: "Compose an epic...@mention, #tag",
		theme: "snow",
	});
	new Quill("#notesEditorAdd", {
		placeholder: "Compose an epic...@mention, #tag",
		theme: "snow",
	});
});
