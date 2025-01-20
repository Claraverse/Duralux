"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Payment DataTable !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#paymentList").DataTable({
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
	$("#checkAllPayment").change(function () {
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
				$("#checkAllPayment").prop("checked", true);
			}
		} else {
			$("#checkAllPayment").prop("checked", false);
		}
	});
	$(".items-wrapper").on("click", "input:checkbox", function () {
		$(this).closest(".single-items").toggleClass("selected", this.checked);
	});
	$(".items-wrapper input:checkbox:checked").closest(".single-items").addClass("selected");
});
