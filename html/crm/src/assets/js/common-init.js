"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Navigation !-->
<--!----------------------------------------------------------------!-->
*/
$(window).resize(function () {
	var win = $(this);
	if (win.width() >= 1024) {
		$("html").addClass("minimenu");
		$(".logo-full").hide();
		$(".logo-abbr").show();
		$("#menu-mini-button").hide();
		$("#menu-expend-button").show();
	}
	if (win.width() > 1600) {
		$("html").removeClass("minimenu");
		$(".logo-full").show();
		$(".logo-abbr").hide();
		$("#menu-mini-button").show();
		$("#menu-expend-button").hide();
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! Header Menu !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#nxl-lavel-mega-menu-open").on("click", function (e) {
		e.preventDefault();
		$("html").addClass("nxl-lavel-mega-menu-open");
	});
	$("#nxl-lavel-mega-menu-hide").on("click", function (e) {
		e.preventDefault();
		$("html").removeClass("nxl-lavel-mega-menu-open");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Mega Menu !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".nxl-mega-menu-sm").on("click", function (e) {
		e.preventDefault();
		$("#mega-menu-dropdown").addClass("nxl-mega-menu-sm").removeClass("nxl-mega-menu-md nxl-mega-menu-lg nxl-mega-menu-xl nxl-mega-menu-xxl nxl-mega-menu-full");
	});
	$(".nxl-mega-menu-md").on("click", function (e) {
		e.preventDefault();
		$("#mega-menu-dropdown").addClass("nxl-mega-menu-md").removeClass("nxl-mega-menu-sm nxl-mega-menu-lg nxl-mega-menu-xl nxl-mega-menu-xxl nxl-mega-menu-full");
	});
	$(".nxl-mega-menu-lg").on("click", function (e) {
		e.preventDefault();
		$("#mega-menu-dropdown").addClass("nxl-mega-menu-lg").removeClass("nxl-mega-menu-sm nxl-mega-menu-md nxl-mega-menu-xl nxl-mega-menu-xxl nxl-mega-menu-full");
	});
	$(".nxl-mega-menu-xl").on("click", function (e) {
		e.preventDefault();
		$("#mega-menu-dropdown").addClass("nxl-mega-menu-xl").removeClass("nxl-mega-menu-sm nxl-mega-menu-md nxl-mega-menu-lg nxl-mega-menu-xxl nxl-mega-menu-full");
	});
	$(".nxl-mega-menu-xxl").on("click", function (e) {
		e.preventDefault();
		$("#mega-menu-dropdown").addClass("nxl-mega-menu-xxl").removeClass("nxl-mega-menu-sm nxl-mega-menu-md nxl-mega-menu-lg nxl-mega-menu-xl nxl-mega-menu-full");
	});
	$(".nxl-mega-menu-full").on("click", function (e) {
		e.preventDefault();
		$("#mega-menu-dropdown").addClass("nxl-mega-menu-full").removeClass("nxl-mega-menu-sm nxl-mega-menu-md nxl-mega-menu-lg nxl-mega-menu-xl nxl-mega-menu-xxl");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--!  Menu Switcher !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	$("#menu-mini-button").on("click", function () {
		$("#menu-mini-button").hide();
		$("#menu-expend-button").show();
		$("html").addClass("minimenu");
		localStorage.setItem("nexel-classic-dashboard-menu-mini-theme", "menu-mini-theme");
	});
	$("#menu-expend-button").on("click", function () {
		$("#menu-expend-button").hide();
		$("#menu-mini-button").show();
		$("html").removeClass("minimenu");
		localStorage.setItem("nexel-classic-dashboard-menu-mini-theme", "menu-expend-theme");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Search Toggle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).on("click", ".search-form-open-toggle", function (e) {
	e.preventDefault();
	$(".search-form").addClass("search-form-active").show(300);
});
$(document).on("click", ".search-form-close-toggle", function (e) {
	e.preventDefault();
	$(".search-form").removeClass("search-form-active").hide(300);
});

/*
<--!----------------------------------------------------------------!-->
<--! Apps Sidebar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".app-sidebar-open-trigger").on("click", function (e) {
		e.preventDefault();
		$(".content-sidebar").addClass("app-sidebar-open");
	});
	$(".app-sidebar-close-trigger").on("click", function (e) {
		e.preventDefault();
		$(".content-sidebar").removeClass("app-sidebar-open");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! page-header-right Toggle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).on("click", ".page-header-right-open-toggle", function (e) {
	e.preventDefault();
	$(".page-header-right-items").addClass("page-header-right-open").removeClass("page-header-right-close");
});
$(document).on("click", ".page-header-right-close-toggle", function (e) {
	e.preventDefault();
	$(".page-header-right-items").addClass("page-header-right-close").removeClass("page-header-right-open");
});

/*
<--!----------------------------------------------------------------!-->
<--! page-content-sidebar Toggle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).on("click", ".page-content-left-open-toggle", function (e) {
	e.preventDefault();
	$(".page-content-left-sidebar-wrapper").addClass("page-content-left-open").removeClass("page-content-left-close");
});
$(document).on("click", ".page-content-left-close-toggle", function (e) {
	e.preventDefault();
	$(".page-content-left-sidebar-wrapper").addClass("page-content-left-close").removeClass("page-content-left-open");
});
$(document).on("click", ".page-content-right-open-toggle", function (e) {
	e.preventDefault();
	$(".page-content-right-sidebar-wrapper").addClass("page-content-right-open").removeClass("page-content-right-close");
});
$(document).on("click", ".page-content-right-close-toggle", function (e) {
	e.preventDefault();
	$(".page-content-right-sidebar-wrapper").addClass("page-content-right-close").removeClass("page-content-right-open");
});

/*
<--!----------------------------------------------------------------!-->
<--! Counter !-->
<--!----------------------------------------------------------------!-->
$(document).ready(function () {
	var counters = $(".counter");
	var countersQuantity = counters.length;
	var counter = [];

	for (i = 0; i < countersQuantity; i++) {
		counter[i] = parseInt(counters[i].innerHTML);
	}

	var count = function (start, value, id) {
		var localStart = start;
		setInterval(function () {
			if (localStart < value) {
				localStart++;
				counters[id].innerHTML = localStart;
			}
		}, 15);
	};

	for (j = 0; j < countersQuantity; j++) {
		count(0, counter[j], j);
	}
});
*/

/*
<--!----------------------------------------------------------------!-->
<--! File Download !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".file-download").on("click", function (e) {
		e.preventDefault();
		$("#toast").toast("show");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Card Action !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var cardActionRunning = false;
	var handleCardAction = function () {
		if (cardActionRunning) {
			return false;
		}
		// collapse
		// cardActionRunning = true;
		// $(document).on("click", "[data-bs-toggle=collapse]", function (event) {
		// 	event.preventDefault();
		// 	$(this).closest(".card").find(".custom-card-action").slideToggle();
		// });
		// refresh
		$(document).on("click", "[data-bs-toggle=refresh]", function (e) {
			e.preventDefault();
			var checkIfPrivate;
			var textArea = $(this).closest(".card");
			if (!$(textArea).hasClass("card-loading")) {
				checkIfPrivate = $(textArea).find(".custom-card-action");
				e = '<div class="card-loader"><div class="spinner-border ' + ($(this).attr("data-spinner-class") ? $(this).attr("data-spinner-class") : "text-primary") + '"></div></div>';
				$(textArea).addClass("card-loading");
				(0 !== $(checkIfPrivate).length ? $(checkIfPrivate) : $(textArea)).append(e);
				setTimeout(function () {
					$(textArea).removeClass("card-loading");
					$(textArea).find(".card-loader").remove();
				}, 3000);
			}
		});
		// expand
		$(document).on("click", "[data-bs-toggle=expand]", function (a) {
			a.preventDefault();
			var fc = $(this).closest(".card");
			var cell = $(fc).find(".custom-card-action");
			var node = "card-expand";
			if (0 !== $(cell).length) {
				a = $(fc).offset().top;
				$(cell).offset().top;
			}
			if ($("body").hasClass(node) && $(fc).hasClass(node)) {
				$("body, .card").removeClass(node);
				$(".card").removeAttr("style");
				$(cell).removeAttr("style");
			} else {
				$("body").addClass(node);
				$(this).closest(".card").addClass(node);
			}
			$(window).trigger("resize");
		});
		// remove
		$(document).on("click", "[data-bs-toggle=remove]", function (event) {
			event.preventDefault();
			$(this).tooltip("dispose");
			$(this).closest(".card").remove();
		});
	};
	// AppInit
	var App = {
		init: function () {
			this.initComponent();
		},
		initComponent: function () {
			handleCardAction();
		},
	};
	$(document).ready(function () {
		App.init();
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! PerfectScrollbar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$('[data-scrollbar-target="#psScrollbarInit"]').each(function () {
		new PerfectScrollbar($(this)[0], {
			useBothWheelAxes: false,
			suppressScrollX: true,
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! SweetAlert2 !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".successAlertMessage").click(function (i) {
		i.preventDefault();
		var e = Swal.mixin({
			toast: !0,
			position: "top-end",
			showConfirmButton: !1,
			timer: 3e3,
			timerProgressBar: !0,
			onOpen: function (e) {
				e.addEventListener("mouseenter", Swal.stopTimer);
				e.addEventListener("mouseleave", Swal.resumeTimer);
			},
		});
		e.fire({
			icon: "success",
			title: "Action Execute Successfully",
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Select All Checked !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#checkAll").change(function () {
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
				$("#checkAll").prop("checked", true);
			}
		} else {
			$("#checkAll").prop("checked", false);
		}
	});
	$(".items-wrapper").on("click", "input:checkbox", function () {
		$(this).closest(".single-items").toggleClass("selected", this.checked);
	});
	$(".items-wrapper input:checkbox:checked").closest(".single-items").addClass("selected");
});

/*
<--!----------------------------------------------------------------!-->
<--! Dropdown Hover !-->
<--!----------------------------------------------------------------!-->
*/
document.addEventListener("DOMContentLoaded", function () {
	if (window.innerWidth > 992) {
		document.querySelectorAll(".nxl-header .header-wrapper .dropdown").forEach(function (everyitem) {
			everyitem.addEventListener("mouseover", function (e) {
				let el_link = this.querySelector("a[data-bs-toggle]");

				if (el_link != null) {
					let nextEl = el_link.nextElementSibling;
					el_link.classList.add("show");
					nextEl.classList.add("show");
				}
			});
			everyitem.addEventListener("mouseleave", function (e) {
				let el_link = this.querySelector("a[data-bs-toggle]");

				if (el_link != null) {
					let nextEl = el_link.nextElementSibling;
					el_link.classList.remove("show");
					nextEl.classList.remove("show");
				}
			});
		});
	}
});
