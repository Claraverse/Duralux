"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! File Uploader !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$(".upload-pic").attr("src", e.target.result);
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	$(".file-upload").on("change", function () {
		readURL(this);
	});
	$(".upload-button").on("click", function () {
		$(".file-upload").click();
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! DatePicker !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	const issueDate = document.getElementById("issueDate");
	const dueDate = document.getElementById("dueDate");
	new Datepicker(issueDate, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
	new Datepicker(dueDate, {
		clearBtn: true,
		allowOneSidedRange: true,
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Cleave Formatting !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	// <--! Credit Card !-->
	new Cleave(".input-credit-card", {
		creditCard: true,
		onCreditCardTypeChanged: function (type) {
			console.log(type);
			var card = $(".input-credit-card-type").find("." + type);
			if (card.length) {
				card.addClass("text-primary");
				card.siblings().removeClass("text-primary");
			} else {
				$(".input-credit-card-type div").removeClass("text-primary");
			}
		},
	});
	//	<--! Date Formatting !-->
	new Cleave(".input-date-formatting", {
		date: true,
		datePattern: ["m", "Y"],
	});
	//	<--! Blocks Formatting !-->
	new Cleave(".input-Blocks-formatting", {
		blocks: [3],
	});
});
