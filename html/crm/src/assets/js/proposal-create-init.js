"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Quill Editor !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	new Quill('[data-editor-target="editor"]', {
		placeholder: "Compose an epic...",
		theme: "snow",
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! SwiteAlert2 !-->
<--!----------------------------------------------------------------!-->
*/

$(document).ready(function () {
	$('[data-alert-target="#alertMessage"]').click(function (i) {
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
			text: "You want to sent this Proposal!",
			icon: "warning",
			showCancelButton: !0,
			confirmButtonText: "Yes, sent it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: !0,
		}).then((e) => {
			e.value ? o.fire("Sent!", "Proposal sent successfully.", "success") : e.dismiss === Swal.DismissReason.cancel && o.fire("Cancelled", "Your imaginary file is safe :)", "error");
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! DatePicker !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	const startDate = document.getElementById("startDate");
	const dueDate = document.getElementById("dueDate");
	new Datepicker(startDate, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
	new Datepicker(dueDate, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
});
