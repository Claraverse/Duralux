"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Searching !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#emailSearch").bind("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".single-items").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Checked Action !-->
<--!----------------------------------------------------------------!-->
*/
$(document).on("change", "[data-checked-action='show-options']", function () {
	if ($(this).prop("checked")) {
		$(".page-header-left").addClass("show-action");
	} else {
		$(".page-header-left").removeClass("show-action");
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! Email Details !-->
<--!----------------------------------------------------------------!-->
*/
$(document).on("click", "[data-view-toggle='details']", function () {
	$(".content-area").addClass("items-details-active");
});
$(document).on("click", ".item-info-close", function () {
	$(".content-area").removeClass("items-details-active");
});

/*
<--!----------------------------------------------------------------!-->
<--! Email Editor !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	new Quill("#mailEditorModal", {
		placeholder: "Compose an epic...@mention, #tag",
		theme: "snow",
	});
	new Quill("#mailEditor", {
		placeholder: "Compose an epic...@mention, #tag",
		theme: "snow",
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! CC/BCC Toggle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#ccbccToggleModal").click(function (e) {
		e.preventDefault();
		$("#ccbccToggleModalFileds").toggle("1000");
	});
	$("#ccbccToggleContent").click(function (e) {
		e.preventDefault();
		$("#ccbccToggleContentFileds").toggle("1000");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Email Action Message !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	// Mail Send Message
	$('[data-action-target="#mailActionMessage"]').click(function (i) {
		i.preventDefault();
		const o = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success m-1",
				cancelButton: "btn btn-danger m-1",
			},
			buttonsStyling: !1,
		});
		o.fire({
			title: "Are you sure?",
			text: "You want to sent this message!",
			icon: "warning",
			showCancelButton: !0,
			confirmButtonText: "Yes, sent it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: !0,
		}).then((e) => {
			e.value ? o.fire("Sent!", "Mail Sent Successfully.", "success") : e.dismiss === Swal.DismissReason.cancel && o.fire("Cancelled", "Your imaginary file is safe :)", "error");
		});
	});
	// Mail Delete Message
	$('[data-action-target="#mailDeleteMessage"]').click(function (i) {
		i.preventDefault();
		const o = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success m-1",
				cancelButton: "btn btn-danger m-1",
			},
			buttonsStyling: !1,
		});
		o.fire({
			title: "Are you sure?",
			text: "You want to delete this message!",
			icon: "warning",
			showCancelButton: !0,
			confirmButtonText: "Yes, delete!",
			cancelButtonText: "No, cancel!",
			reverseButtons: !0,
		}).then((e) => {
			e.value ? o.fire("Deleted!", "Mail Delete Successfully.", "success") : e.dismiss === Swal.DismissReason.cancel && o.fire("Cancelled", "Your imaginary file is safe :)", "error");
		});
	});
});
