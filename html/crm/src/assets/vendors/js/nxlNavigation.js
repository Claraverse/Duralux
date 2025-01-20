"use strict";
var nxl = "0";
$(document).ready(function () {
	// remove pre-loader start
	setTimeout(function () {
		$(".loader-bg").fadeOut("slow", function () {
			$(this).remove();
		});
	}, 400);
	// remove pre-loader end
	if (!$("html").hasClass("nxl-horizontal")) {
		addscroller();
	}
	if ($(".nxl-horizontal").hasClass("navbar-overlay")) {
		addscroller();
	}
	$(".hamburger:not(.is-active)").on("click", function () {
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
		} else {
			$(this).addClass("is-active");
		}
	});
	// Menu overlay layout start
	$("#overlay-menu").on("click", function () {
		menuclick();
		if ($(".nxl-navigation").hasClass("nxl-over-menu-active")) {
			rmovermenu();
		} else {
			$(".nxl-navigation").addClass("nxl-over-menu-active");
			$(".nxl-navigation").append('<div class="nxl-menu-overlay"></div>');
			$(".nxl-menu-overlay").on("click", function () {
				rmovermenu();
				$(".hamburger").removeClass("is-active");
			});
		}
	});
	// Menu overlay layout end
	// vertical-nav-toggle start
	$("#vertical-nav-toggle").on("click", function () {
		console.log("123");
		// menuclick();
		if ($("html").hasClass("minimenu")) {
			$("html").removeClass("minimenu");
			menuclick();
		} else {
			$("html").addClass("minimenu");
			$(".nxl-navbar li:not(.nxl-trigger) .nxl-submenu").removeAttr("style");
			collapseedge();
		}
	});
	// vertical-nav-toggle end
	// Menu collapse click start
	$("#mobile-collapse").on("click", function () {
		if (!$("html").hasClass("nxl-horizontal")) {
			menuclick();
		}
		if ($(".nxl-navigation").hasClass("mob-navigation-active")) {
			rmmenu();
		} else {
			$(".nxl-navigation").addClass("mob-navigation-active");
			$(".nxl-navigation").append('<div class="nxl-menu-overlay"></div>');
			$(".nxl-menu-overlay").on("click", function () {
				rmmenu();
				$(".hamburger").removeClass("is-active");
			});
		}
	});
	// Menu collapse click end
	// Menu collapse click start
	$(".nxl-horizontal #mobile-collapse").on("click", function () {
		if ($(".topbar").hasClass("mob-navigation-active")) {
			rmmenu();
		} else {
			$(".topbar").addClass("mob-navigation-active");
			$(".topbar").append('<div class="nxl-menu-overlay"></div>');
			$(".nxl-menu-overlay").on("click", function () {
				rmmenu();
				$(".hamburger").removeClass("is-active");
			});
		}
	});
	// Menu collapse click end
	// mobile header click start
	$("#header-collapse").on("click", function () {
		if ($(".nxl-header:not(.nxl-mob-header)").hasClass("mob-header-active")) {
			rmthead();
		} else {
			$(".nxl-header:not(.nxl-mob-header)").addClass("mob-header-active");
			$(".nxl-header:not(.nxl-mob-header)").append('<div class="nxl-md-overlay"></div>');
			$(".nxl-md-overlay").on("click", function () {
				rmthead();
			});
		}
	});
	$("#headerdrp-collapse").on("click", function () {
		if ($(".nxl-header:not(.nxl-mob-header) .nxl-mob-drp").hasClass("mob-drp-active")) {
			rmdrp();
		} else {
			$(".nxl-header:not(.nxl-mob-header) .nxl-mob-drp").addClass("mob-drp-active");
			$(".nxl-header:not(.nxl-mob-header)").append('<div class="nxl-md-overlay"></div>');
			$(".nxl-md-overlay").on("click", function () {
				rmdrp();
			});
		}
	});
	// mobile header click end
	// Horizontal menu click js start
	$(".nxl-horizontal .topbar .nxl-navbar>li>a").on("click", function (e) {
		setTimeout(function () {
			$(this).parents(".dropdown").children(".dropdown-menu").removeAttr("style");
		}, 1000);
	});
	// Horizontal menu click js end
	// Material form start
	$(".form-v2 .form-control").each(function () {
		formmat($(this));
	});
	$(".form-v2 .form-control").on("blur", function () {
		formmat($(this));
	});
	$(".form-v2 .form-control").on("focus", function () {
		$(this).parent(".form-group").addClass("fill");
	});

	function formmat(e) {
		var $temp = 0;
		try {
			$temp = e.attr("placeholder").length;
		} catch (err) {
			$temp = 0;
		}
		if (e.val().length > 0) {
			e.parent(".form-group").addClass("fill");
		} else {
			e.parent(".form-group").removeClass("fill");
		}
	}
	// Material form end
	if ($("html").hasClass("nxl-horizontal")) {
		horizontalmobilemenuclick();
	}
	if ($("html").hasClass("minimenu")) {
		collapseedge();
	}
});

function horizontalmobilemenuclick() {
	var vw = $(window)[0].innerWidth;
	$(".nxl-navbar li").off("click");
	$(".nxl-navbar > li:not(.nxl-caption)").on("click", function () {
		$(this).children(".nxl-submenu").removeAttr("style");
		if ($(this).hasClass("nxl-trigger")) {
			$(this).removeClass("nxl-trigger");
		} else {
			$("li.nxl-trigger").removeClass("nxl-trigger");
			$(this).addClass("nxl-trigger");
		}
	});
	$(".nxl-navbar > li:not(.nxl-caption) li").on("click", function (e) {
		e.stopPropagation();
		if ($(this).hasClass("nxl-trigger")) {
			$(this).removeClass("nxl-trigger");
		} else {
			$(this).parent(".nxl-submenu").find("li.nxl-trigger").removeClass("nxl-trigger");
			$(this).addClass("nxl-trigger");
		}
	});
}

// Menu click start
function addscroller() {
	rmmini();
	menuclick();
	// Menu scrollbar start
	if ($(".navbar-content")[0]) {
		var px = new PerfectScrollbar(".navbar-content", {
			wheelSpeed: 0.5,
			swipeEasing: 0,
			suppressScrollX: !0,
			wheelPropagation: 1,
			minScrollbarLength: 40,
		});
	}
	// Menu scrollbar end
}
// Menu click start
function menuclick() {
	var vw = $(window)[0].innerWidth;
	$(".nxl-navbar li").off("click");
	if (!$("html").hasClass("minimenu")) {
		$(".nxl-navbar li:not(.nxl-trigger) .nxl-submenu").slideUp();
		$(".nxl-navbar > li:not(.nxl-caption)").on("click", function () {
			// $(this).children('.nxl-submenu').removeAttr("style");
			if ($(this).hasClass("nxl-trigger")) {
				$(this).removeClass("nxl-trigger");
				$(this).children(".nxl-submenu").slideUp("fast");
			} else {
				$("li.nxl-trigger").children(".nxl-submenu").slideUp("fast");
				$("li.nxl-trigger").removeClass("nxl-trigger");
				$(this).addClass("nxl-trigger");
				$(this).children(".nxl-submenu").slideDown("fast");
			}
		});
		$(".nxl-navbar > li:not(.nxl-caption) li").on("click", function (e) {
			e.stopPropagation();
			if ($(this).hasClass("nxl-trigger")) {
				$(this).removeClass("nxl-trigger");
				$(this).children(".nxl-submenu").slideUp("fast");
			} else {
				$(this).parent(".nxl-submenu").find("li.nxl-trigger").children(".nxl-submenu").slideUp("fast");
				$(this).parent(".nxl-submenu").find("li.nxl-trigger").removeClass("nxl-trigger");
				$(this).addClass("nxl-trigger");
				$(this).children(".nxl-submenu").slideDown("fast");
			}
		});
	}
}

function rmdrp() {
	$(".nxl-header:not(.nxl-mob-header) .nxl-mob-drp").removeClass("mob-drp-active");
	$(".nxl-header:not(.nxl-mob-header) .nxl-md-overlay").remove();
}

function rmthead() {
	$(".nxl-header:not(.nxl-mob-header)").removeClass("mob-header-active");
	$(".nxl-header:not(.nxl-mob-header) .nxl-md-overlay").remove();
}

function rmmenu() {
	$(".nxl-navigation").removeClass("mob-navigation-active");
	$(".topbar").removeClass("mob-navigation-active");
	$(".nxl-navigation .nxl-menu-overlay").remove();
	$(".topbar .nxl-menu-overlay").remove();
}

function rmovermenu() {
	$(".nxl-navigation").removeClass("nxl-over-menu-active");
	$(".topbar").removeClass("mob-navigation-active");
	$(".nxl-navigation .nxl-menu-overlay").remove();
	$(".topbar .nxl-menu-overlay").remove();
}

function rmactive() {
	$(".nxl-navigation .nxl-navbar li").removeClass("active");
	$(".nxl-navigation .nxl-navbar li").removeClass("nxl-trigger");
	$(".topbar .dropdown").removeClass("show");
	$(".topbar .dropdown-menu").removeClass("show");
	$(".nxl-navigation .nxl-menu-overlay").remove();
	$(".topbar .nxl-menu-overlay").remove();
}

function rmmini() {
	var vw = $(window)[0].innerWidth;
	if (vw <= 1024) {
		if ($("html").hasClass("minimenu")) {
			$("html").removeClass("minimenu");
			nxl = "1";
			2;
		}
	} else {
		if (vw > 1024) {
			if (nxl == "1") {
				$("html").addClass("minimenu");
				nxl = "0";
			}
		}
	}
}
$(".email-more-link").on("click", function (e) {
	$(this).children("span").slideToggle(1);
});

// Menu click end
$(window).resize(function () {
	if (!$("html").hasClass("nxl-horizontal")) {
		rmmini();
		menuclick();
	}
	if ($("html").hasClass("nxl-horizontal")) {
		rmactive();
	}
});
$(window).scroll(function () {});
$(window).on("load", function () {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl);
	});
});
// active menu item list start
$(".nxl-navigation .nxl-navbar a").each(function () {
	var pageUrl = window.location.href.split(/[?#]/)[0];
	if (this.href == pageUrl && $(this).attr("href") != "") {
		$(this).parent("li").addClass("active");
		$(this).parent("li").parent().parent(".nxl-hasmenu").addClass("active").addClass("nxl-trigger");
		$(this).parent("li").parent().parent(".nxl-hasmenu").parent().parent(".nxl-hasmenu").addClass("active").addClass("nxl-trigger");

		$(this).parent("li").parent().parent(".sidelink").addClass("active");
		$(this).parents(".nxl-tabcontent").addClass("active");
		if ($("html").hasClass("tab-layout")) {
			var temp = $(".nxl-tabcontent.active").attr("data-value");
			$(".tab-sidemenu > li").removeClass("active");
			$('.tab-sidemenu > li > a[data-cont="' + temp + '"]')
				.parent("li")
				.addClass("active");
		}
	}
});

// Menu click for tab Layout start
$(".tab-sidemenu > ul >li").on("click", function () {
	var tempcont = $(this).children("a").attr("data-cont");
	$(".navbar-content .nxl-tabcontent").removeClass("active");
	$(".tab-sidemenu > ul > li").removeClass("active");
	$(this).addClass("active");
	$('.navbar-content .nxl-tabcontent[data-value="' + tempcont + '"]').addClass("active");
});
// Menu click for tab Layout end
// nested Layout start
$(".nxl-toggle-sidemenu").click(function () {
	if (!$(".nxl-toggle-sidemenu").hasClass("active")) {
		$(".nxl-sideoverlay,.page-navigation,.nxl-toggle-sidemenu").addClass("active");
	} else {
		$(".nxl-sideoverlay,.page-navigation,.nxl-toggle-sidemenu").removeClass("active");
	}
});
$(".nxl-sideoverlay, .nxl-toggle-sidemenu.active").click(function () {
	$(".nxl-sideoverlay,.page-navigation,.nxl-toggle-sidemenu").removeClass("active");
});
// nested Layout end
// topbar Layout start
if ($("html").hasClass("layout-topbar")) {
	$(".nxl-header .list-unstyled > .dropdown").hover(
		function () {
			$(this).children(".dropdown-menu").addClass("show");
		},
		function () {
			$(this).children(".dropdown-menu").removeClass("show");
		}
	);
}
// topbar Layout end
// horizontal submenu edge start
if ($("html").hasClass("nxl-horizontal")) {
	var hpx;
	var docH = $(window).height();
	var docW = $(window).width();

	if (docW > 1024) {
		$(".nxl-horizontal .topbar .nxl-submenu .nxl-hasmenu").hover(
			function () {
				var elm = $(this).children(".nxl-submenu");
				var off = elm.offset();
				var l = off.left;
				var t = off.top;
				var w = elm.width();
				var h = elm.height();
				var scrw = $(window).scrollTop();

				var edgepos = l + w <= docW;
				if (!edgepos) {
					elm.addClass("edge");
				}
				var isEntirelyVisible = t + h <= docH;
				if (!isEntirelyVisible) {
					var th = t - scrw;
					elm.addClass("scroll-menu");
					elm.css("max-height", "calc(100vh - " + th + "px)");
					hpx = new PerfectScrollbar(".scroll-menu", {
						wheelSpeed: 0.5,
						swipeEasing: 0,
						suppressScrollX: !0,
						wheelPropagation: 1,
						minScrollbarLength: 40,
					});
				}
			},
			function () {
				hpx.destroy();
				$(".scroll-menu").removeAttr("style");
				$(".scroll-menu").removeClass("scroll-menu");
			}
		);
	}
}
// horizontal submenu edge end
// Collapse meni edge start
function collapseedge() {
	var hpx;
	var docH = $(window).height();
	var docW = $(window).width();
	if (docW > 1024) {
		$(".minimenu .nxl-navigation .nxl-submenu .nxl-hasmenu").hover(
			function () {
				var elm = $(this).children(".nxl-submenu");
				var off = elm.offset();
				var l = off.left;
				var t = off.top;
				var w = elm.width();
				var h = elm.height();
				var scrw = $(window).scrollTop();

				var isEntirelyVisible = t + h <= docH;
				if (!isEntirelyVisible) {
					var th = t - scrw;
					elm.addClass("scroll-menu");
					elm.css("max-height", "calc(100vh - " + th + "px)");
					hpx = new PerfectScrollbar(".scroll-menu", {
						wheelSpeed: 0.5,
						swipeEasing: 0,
						suppressScrollX: !0,
						wheelPropagation: 1,
						minScrollbarLength: 40,
					});
				}
			},
			function () {
				hpx.destroy();
				$(".scroll-menu").removeAttr("style");
				$(".scroll-menu").removeClass("scroll-menu");
			}
		);
	}
}
// Collapse meni edge end
$(".prod-likes .form-check-input").change(function () {
	if ($(this).is(":checked")) {
		$(this).parent(".prod-likes").append('<div class="nxl-like"><div class="like-wrapper"><span><span class="nxl-group"><span class="nxl-dots"></span><span class="nxl-dots"></span><span class="nxl-dots"></span><span class="nxl-dots"></span></span></span></div></div>');
		$(this).parent(".prod-likes").find(".nxl-like").addClass("nxl-like-animate");
		setTimeout(function () {
			$(this).parent(".prod-likes").find(".nxl-like").remove();
		}, 3000);
	} else {
		$(this).parent(".prod-likes").find(".nxl-like").remove();
	}
});
