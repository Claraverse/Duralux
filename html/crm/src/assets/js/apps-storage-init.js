"use strict";
/*
<--!----------------------------------------------------------------!-->
<--! Searching !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#storageSearch").bind("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".content-area-body .card").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! SweetSlert2 !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$('[data-action-target="#fileFolderDeleteAction"]').click(function (i) {
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
			text: "You want to delete this file or folder!",
			icon: "warning",
			showCancelButton: !0,
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: !0,
		}).then((e) => {
			e.value ? o.fire("Deleted!", "File or Folder Delete Successfully.", "success") : e.dismiss === Swal.DismissReason.cancel && o.fire("Cancelled", "Your imaginary file is safe :)", "error");
		});
	});
});
