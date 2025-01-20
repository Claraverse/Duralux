"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Create Project !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#project-type").validate();
	$("#project-details").validate();
	$("#project-settings").validate();
	$("#project-budgets").validate();
	$("#project-create-steps").steps({
		headerTag: "div.step-title",
		bodyTag: "section.step-body",
		transitionEffect: "slideLeft",
		titleTemplate: "#title#",
		enableAllSteps: true,
		onStepChanging: function (event, currentIndex, newIndex) {
			if (newIndex < currentIndex) {
				return true;
			}
			var form = $(".body.current form");
			if (form.length == 1) {
				form.validate().settings.ignore = ":disabled,:hidden";
				return form.valid();
			}
			return true;
		},
		onFinishing: function (event, currentIndex) {
			var form = $(".body.current form");
			if (form.length == 1) {
				form.validate().settings.ignore = ":disabled";
				return form.valid();
			}
			return true;
		},
		onFinished: function (event, currentIndex) {
			const o = Swal.mixin({
				customClass: {
					confirmButton: "btn btn-success m-1",
					cancelButton: "btn btn-danger m-1",
				},
				buttonsStyling: !1,
			});
			o.fire({
				title: "Created & Finished",
				text: "You want to create and finish this project!!!",
				icon: "warning",
				showCancelButton: !0,
				confirmButtonText: "Yes, Create it!",
				cancelButtonText: "No, cancel!",
				reverseButtons: !0,
				type: "success",
			}).then((e) => {
				e.value ? o.fire("Project Created!", "Project Created Successfully.", "success") : e.dismiss === Swal.DismissReason.cancel && o.fire("Cancelled", "Your imaginary file is safe :)", "error");
			});
		},
	});
	$("#projectClient, #tragetAssigned").select2({
		theme: "bootstrap-5",
		templateResult: userformat,
		templateSelection: userformat,
	});
	$("#billingType, #projectStatus, #projectTags, #tragetTags, [data-select2-teammates='teammates']").select2({
		theme: "bootstrap-5",
		templateResult: bgformat,
		templateSelection: bgformat,
	});
	$("#sendcontactsNotifications").select2({
		theme: "bootstrap-5",
		templateResult: iformat,
		templateSelection: iformat,
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Quill Editor !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	new Quill("#projectDescription", {
		placeholder: "Compose an epic...",
		theme: "snow",
	});
	new Quill("#targetDescription", {
		placeholder: "Compose an epic...",
		theme: "snow",
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! DatePicker !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	const projectReleaseDate = document.getElementById("projectReleaseDate");
	const targetReleaseDate = document.getElementById("targetReleaseDate");
	new Datepicker(projectReleaseDate, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
	new Datepicker(targetReleaseDate, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! File Uploader !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#choose-file").change(function () {
		var i = $(this).prev("label").clone();
		var file = $("#choose-file")[0].files[0].name;
		$(this).prev("label").text(file);
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Sticky Steps !-->
<--!----------------------------------------------------------------!-->

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 100) {
		$(".steps").addClass("sticky");
	} else {
		$(".steps").removeClass("sticky");
	}
});
*/
