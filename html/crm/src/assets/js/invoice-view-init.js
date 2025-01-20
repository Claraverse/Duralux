"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! SwiteAlert2 !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$('[data-alert-target="invoicSendMessage"]').click(function (i) {
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
			text: "You want to sent this Invoice!",
			icon: "warning",
			showCancelButton: !0,
			confirmButtonText: "Yes, sent it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: !0,
		}).then((e) => {
			e.value ? o.fire("Sent!", "Invoice sent successfully.", "success") : e.dismiss === Swal.DismissReason.cancel && o.fire("Cancelled", "Your imaginary file is safe :)", "error");
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Print JS !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".printBTN").on("click", function () {
		$(".invoice-container").print({
			globalStyles: true,
			iframe: false,
		});
	});
});
