"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".progress-1").circleProgress({
		max: 100,
		value: 50,
		textFormat: function () {
			return "$450 USD";
		},
	});
	$(".progress-2").circleProgress({
		max: 100,
		value: 60,
		textFormat: function () {
			return "$550 USD";
		},
	});
	$(".progress-3").circleProgress({
		max: 100,
		value: 70,
		textFormat: function () {
			return "$850 USD";
		},
	});
	$(".progress-4").circleProgress({
		max: 100,
		value: 80,
		textFormat: function () {
			return "$900 USD";
		},
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Proposal DataTable !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#proposalList").DataTable({
		pageLength: 10,
		lengthMenu: [10, 20, 50, 100, 200, 500],
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Select All Checked !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#checkAllProposal").change(function () {
		if (this.checked) {
			$(".checkbox").each(function () {
				this.checked = true;
				$(this).parent().parent().parent().parent().addClass("selected");
			});
		} else {
			$(".checkbox").each(function () {
				this.checked = false;
				$(this).parent().parent().parent().parent().removeClass("selected");
			});
		}
	});

	$(".checkbox").click(function () {
		if ($(this).is(":checked")) {
			var isAllChecked = 0;
			$(".checkbox").each(function () {
				if (!this.checked) isAllChecked = 1;
			});
			if (isAllChecked == 0) {
				$("#checkAllProposal").prop("checked", true);
			}
		} else {
			$("#checkAllProposal").prop("checked", false);
		}
	});
	$(".items-wrapper").on("click", "input:checkbox", function () {
		$(this).closest(".single-items").toggleClass("selected", this.checked);
	});
	$(".items-wrapper input:checkbox:checked").closest(".single-items").addClass("selected");
});

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
	$('[data-alert-target="alertMessage"]').click(function (i) {
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
