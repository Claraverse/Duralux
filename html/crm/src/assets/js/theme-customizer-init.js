"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Theme Customizer !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	$(document).on("click", ".cutomizer-open-trigger", function (e) {
		e.preventDefault();
		$(".theme-customizer").addClass("theme-customizer-open");
	});
	$(document).on("click", ".cutomizer-close-trigger", function (e) {
		e.preventDefault();
		$(".theme-customizer").removeClass("theme-customizer-open");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Navigation !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	if (window.localStorage !== undefined) {
	} else {
		alert("Your browser is outdated!");
	}

	let appNavigation = localStorage["app-navigation"];
	let appNavigationLight = '[data-app-navigation="app-navigation-light"]';
	let appNavigationDark = '[data-app-navigation="app-navigation-dark"]';

	if (appNavigation) {
		$("html").addClass(appNavigation);
		$('[name="app-navigation"][data-app-navigation="' + appNavigation + '"]').prop("checked", true);
	}

	$(appNavigationLight).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-navigation-light").removeClass("app-navigation-dark");
		localStorage.setItem("app-navigation", $this.data("app-navigation"));
	});
	$(appNavigationDark).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-navigation-dark").removeClass("app-navigation-light");
		localStorage.setItem("app-navigation", $this.data("app-navigation"));
	});

	/* <--! Reset Navigation !-->*/
	$("[data-style='reset-app-navigation']").on("click", function (e) {
		e.preventDefault();
		location.reload(true);
		window.localStorage.removeItem("app-navigation");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Header !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	if (window.localStorage !== undefined) {
	} else {
		alert("Your browser is outdated!");
	}

	let appHeader = localStorage["app-header"];
	let appHeaderLight = '[data-app-header="app-header-light"]';
	let appHeaderDark = '[data-app-header="app-header-dark"]';

	if (appHeader) {
		$("html").addClass(appHeader);
		$('[name="app-header"][data-app-header="' + appHeader + '"]').prop("checked", true);
	}

	$(appHeaderLight).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-header-light").removeClass("app-header-dark");
		localStorage.setItem("app-header", $this.data("app-header"));
	});
	$(appHeaderDark).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-header-dark").removeClass("app-header-light");
		localStorage.setItem("app-header", $this.data("app-header"));
	});

	/* <--! Reset Header !-->*/
	$("[data-style='reset-app-header']").on("click", function (e) {
		e.preventDefault();
		location.reload(true);
		window.localStorage.removeItem("app-header");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Apps Skin !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	if (window.localStorage !== undefined) {
	} else {
		alert("Your browser is outdated!");
	}

	let appSkin = localStorage["app-skin"];
	let appSkinLight = '[data-app-skin="app-skin-light"]';
	let appSkinDark = '[data-app-skin="app-skin-dark"]';

	if (appSkin) {
		$("html").addClass(appSkin);
		$('[name="app-skin"][data-app-skin="' + appSkin + '"]').prop("checked", true);
	}

	$(appSkinLight).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").removeClass("app-skin-dark");
		localStorage.setItem("app-skin", $this.data("app-skin"));
	});
	$(appSkinDark).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-skin-dark").removeClass("app-skin-light");
		localStorage.setItem("app-skin", $this.data("app-skin"));
	});

	/* <--! Reset Skin !-->*/
	$("[data-style='reset-app-skin']").on("click", function (e) {
		e.preventDefault();
		location.reload(true);
		window.localStorage.removeItem("app-skin");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Light/Dark !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	var e = localStorage.getItem("app-skin-dark") ? localStorage.getItem("app-skin-dark") : "app-skin-light";
	localStorage.setItem("app-skin-dark", e),
		"app-skin-dark" == localStorage.getItem("app-skin-dark") && $("html").addClass("app-skin-dark") && $(".dark-button").addClass("active") && $(".light-button").removeClass("active"),
		$(".dark-button").on("click", function (e) {
			e.preventDefault();
			$(".dark-button").hide().addClass("active"), $(".light-button").show().removeClass("active"), $("html").addClass("app-skin-dark"), localStorage.setItem("app-skin-dark", "app-skin-dark");
		}),
		$(".light-button").on("click", function (e) {
			e.preventDefault();
			$(".light-button").hide().addClass("active"), $(".dark-button").show().removeClass("active"), $("html").removeClass("app-skin-dark"), localStorage.setItem("app-skin-dark", "app-skin-light");
		});

	/* <--! Reset Light/Dark !--> */
	$("[data-style='reset-app-skin']").on("click", function (e) {
		e.preventDefault();
		location.reload(true);
		window.localStorage.removeItem("app-skin-dark");
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Apps Typography !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	if (window.localStorage !== undefined) {
	} else {
		alert("Your browser is outdated!");
	}

	let fontFamily = localStorage["font-family"];
	let fontFamilyLato = '[data-font-family="app-font-family-lato"]';
	let fontFamilyRubik = '[data-font-family="app-font-family-rubik"]';
	let fontFamilyInter = '[data-font-family="app-font-family-inter"]';
	let fontFamilyCinzel = '[data-font-family="app-font-family-cinzel"]';
	let fontFamilyNunito = '[data-font-family="app-font-family-nunito"]';
	let fontFamilyRoboto = '[data-font-family="app-font-family-roboto"]';
	let fontFamilyUbuntu = '[data-font-family="app-font-family-ubuntu"]';
	let fontFamilyPoppins = '[data-font-family="app-font-family-poppins"]';
	let fontFamilyRaleway = '[data-font-family="app-font-family-raleway"]';
	let fontFamilySystemUI = '[data-font-family="app-font-family-system-ui"]';
	let fontFamilyNotoSans = '[data-font-family="app-font-family-noto-sans"]';
	let fontFamilyFiraSans = '[data-font-family="app-font-family-fira-sans"]';
	let fontFamilyWorkSans = '[data-font-family="app-font-family-work-sans"]';
	let fontFamilyOpenSans = '[data-font-family="app-font-family-open-sans"]';
	let fontFamilyMavenPro = '[data-font-family="app-font-family-maven-pro"]';
	let fontFamilyQuicksand = '[data-font-family="app-font-family-quicksand"]';
	let fontFamilyMontserrat = '[data-font-family="app-font-family-montserrat"]';
	let fontFamilyJosefinSans = '[data-font-family="app-font-family-josefin-sans"]';
	let fontFamilyIBMPlexSans = '[data-font-family="app-font-family-ibm-plex-sans"]';
	let fontFamilySourceSansPro = '[data-font-family="app-font-family-source-sans-pro"]';
	let fontFamilyMontserratAlt = '[data-font-family="app-font-family-montserrat-alt"]';
	let fontFamilyRobotoSlab = '[data-font-family="app-font-family-roboto-slab"]';

	if (fontFamily) {
		$("html").addClass(fontFamily);
		$('[name="font-family"][data-font-family="' + fontFamily + '"]').prop("checked", true);
	}

	$(fontFamilyLato).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-lato").removeClass("app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyRubik).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-rubik").removeClass("app-font-family-lato app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyInter).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-inter").removeClass("app-font-family-lato app-font-family-rubik app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyCinzel).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-cinzel").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyNunito).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-nunito").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyRoboto).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-roboto").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyUbuntu).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-ubuntu").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyPoppins).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-poppins").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyRaleway).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-raleway").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilySystemUI).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-system-ui").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyNotoSans).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-noto-sans").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyFiraSans).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-fira-sans").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyWorkSans).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-work-sans").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyOpenSans).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-open-sans").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyMavenPro).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-maven-pro").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyQuicksand).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-quicksand").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro  app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyMontserrat).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-montserrat").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyJosefinSans).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-josefin-sans").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyIBMPlexSans).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-ibm-plex-sans").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilySourceSansPro).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-source-sans-pro").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyMontserratAlt).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-montserrat-alt").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-roboto-slab");
		localStorage.setItem("font-family", $this.data("font-family"));
	});
	$(fontFamilyRobotoSlab).on("change", function (e) {
		e.preventDefault();
		let $this = $(this);
		$("html").addClass("app-font-family-roboto-slab").removeClass("app-font-family-lato app-font-family-rubik app-font-family-inter app-font-family-cinzel app-font-family-source-sans-pro app-font-family-nunito app-font-family-roboto app-font-family-ubuntu app-font-family-poppins app-font-family-raleway app-font-family-system-ui app-font-family-noto-sans app-font-family-fira-sans app-font-family-work-sans app-font-family-open-sans app-font-family-maven-pro app-font-family-quicksand app-font-family-montserrat app-font-family-josefin-sans app-font-family-ibm-plex-sans app-font-family-montserrat-alt");
		localStorage.setItem("font-family", $this.data("font-family"));
	});

	/* <--! Reset Font Family !-->*/
	$("[data-style='reset-font-family']").on("click", function (e) {
		e.preventDefault();
		location.reload(true);
		window.localStorage.removeItem("font-family");
	});
});
/*
<--!----------------------------------------------------------------!-->
<--! Reset Common Default Style !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	if (window.localStorage !== undefined) {
	} else {
		alert("Your browser is outdated!");
	}
	$("[data-style='reset-all-common-style']").on("click", function (e) {
		e.preventDefault();
		window.localStorage.removeItem("app-navigation");
		window.localStorage.removeItem("app-header");
		window.localStorage.removeItem("app-skin-dark");
		window.localStorage.removeItem("font-family");
		location.reload(true);
	});
});
