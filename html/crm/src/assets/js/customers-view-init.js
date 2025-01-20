"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! SweetAlert2 !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$('[data-action-target="#acSecctingsActionMessage"]').click(function (i) {
		i.preventDefault();
		const o = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success m-1",
				cancelButton: "btn btn-danger m-1",
			},
			buttonsStyling: !1,
		});
		o.fire({
			title: "Delete Account",
			text: "You want to delete this account!!!",
			icon: "warning",
			showCancelButton: !0,
			confirmButtonText: "Yes, Delete it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: !0,
		}).then((e) => {
			e.value ? o.fire("Deleted!", "Account Deleted Successfully.", "success") : e.dismiss === Swal.DismissReason.cancel && o.fire("Cancelled", "Your imaginary file is safe :)", "error");
		});
	});
});
