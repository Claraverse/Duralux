/*
<--!----------------------------------------------------------------!-->
<--! Select2 Active JS !-->
<--!----------------------------------------------------------------!-->
*/
//icon format
function iformat(icon) {
	var originalOption = icon.element;
	return $('<span class="hstack gap-3"><i class=" ' + $(originalOption).data("icon") + '"></i> ' + icon.text + "</span>");
}
//bg format
function bgformat(bg) {
	var originalOption = bg.element;
	return $('<span class="hstack gap-2"> <span class="wd-7 ht-7 rounded-circle ' + $(originalOption).data("bg") + '"></span> ' + bg.text + "</span>");
}
//storage format
function storageformat(storage) {
	var originalOption = storage.element;
	return $('<span class="hstack gap-3"> <img src="' + "./../assets/images/storage-icons" + "/" + $(originalOption).data("storage") + '.png" class="avatar-image avatar-sm" /> ' + storage.text + "</span>");
}
//user format
function userformat(user) {
	var originalOption = user.element;
	return $('<span class="hstack gap-3"> <img src="' + "./../assets/images/avatar" + "/" + $(originalOption).data("user") + '.png" class="avatar-image avatar-sm" /> ' + user.text + "</span>");
}
//payment format
function paymentformat(payment) {
	var originalOption = payment.element;
	return $('<span class="hstack gap-3"> <img src="' + "./../assets/images/payment" + "/" + $(originalOption).data("payment") + '.svg" class="avatar-image avatar-sm" /> ' + payment.text + "</span>");
}
//flag format
function flagformat(flag) {
	var originalOption = flag.element;
	return $('<span class="hstack gap-3"> <img src="' + "./../assets/vendors/img/flags/1x1" + "/" + $(originalOption).data("flag") + '.svg" class="avatar-image avatar-sm" /> ' + flag.text + "</span>");
}
//country format
function countryformat(country) {
	var originalOption = country.element;
	return $('<span class="hstack gap-3"> <img src="' + "./../assets/vendors/img/flags/1x1" + "/" + $(originalOption).data("country") + '.svg" class="avatar-image avatar-sm" /> ' + country.text + "</span>");
}
//tzone format
function tzoneformat(tzone) {
	var originalOption = tzone.element;
	return $('<span class="hstack gap-3 text-truncate-1-line"> <i class="me-2 ' + $(originalOption).data("tzone") + '"></i> ' + tzone.text + "</span>");
}
//state format
function stateformat(state) {
	var originalOption = state.element;
	return $('<span class="hstack gap-3"> <img src="' + "./../assets/vendors/img/flags/us" + "/" + $(originalOption).data("state") + '.png" class="avatar-image avatar-sm" /> ' + state.text + "</span>");
}
//city format
function cityformat(city) {
	var originalOption = city.element;
	return $('<span class="hstack gap-3"> <span class="wd-7 ht-7 rounded-circle ' + $(originalOption).data("city") + '"></span> ' + city.text + "</span>");
}
//language format
function languageformat(language) {
	var originalOption = language.element;
	return $('<span class="hstack gap-3"> <span class="wd-7 ht-7 rounded-circle ' + $(originalOption).data("language") + '"></span> ' + language.text + "</span>");
}
//currency format
function currencyformat(currency) {
	var originalOption = currency.element;
	return $('<span class="hstack gap-3"> <img src="' + "./../assets/vendors/img/flags/1x1" + "/" + $(originalOption).data("currency") + '.svg" class="avatar-image avatar-sm" /> ' + currency.text + "</span>");
}
//programming format
function programmingformat(programming) {
	var originalOption = programming.element;
	return $('<span class="hstack gap-3"> <i class="fa-brand ' + $(originalOption).data("programming") + '"></i> ' + programming.text + "</span>");
}
// Default
$("[data-select2-selector='default']").select2({
	theme: "bootstrap-5",
});
// Icon + Visibility + Privacy
$("[data-select2-selector='icon'], [data-select2-selector='visibility'], [data-select2-selector='privacy'").select2({
	theme: "bootstrap-5",
	templateResult: iformat,
	templateSelection: iformat,
});
// Storage
$("[data-select2-selector='storage']").select2({
	theme: "bootstrap-5",
	templateResult: storageformat,
	templateSelection: storageformat,
});
// Tag
$("[data-select2-selector='tag'], [data-select2-selector='status'], [data-select2-selector='priority'], [data-select2-selector='label'], [data-select2-selector='type']").select2({
	theme: "bootstrap-5",
	templateResult: bgformat,
	templateSelection: bgformat,
});
// User
$("[data-select2-selector='user']").select2({
	theme: "bootstrap-5",
	templateResult: userformat,
	templateSelection: userformat,
});
// Payment
$("[data-select2-selector='payment']").select2({
	theme: "bootstrap-5",
	templateResult: paymentformat,
	templateSelection: paymentformat,
});
// Flag
$("[data-select2-selector='flag']").select2({
	theme: "bootstrap-5",
	templateResult: flagformat,
	templateSelection: flagformat,
});
// Country
$("[data-select2-selector='country']").select2({
	theme: "bootstrap-5",
	templateResult: countryformat,
	templateSelection: countryformat,
});
// Time Zone
$("[data-select2-selector='tzone']").select2({
	theme: "bootstrap-5",
	templateResult: tzoneformat,
	templateSelection: tzoneformat,
});
// State
$("[data-select2-selector='state']").select2({
	theme: "bootstrap-5",
	templateResult: stateformat,
	templateSelection: stateformat,
});
// City
$("[data-select2-selector='city']").select2({
	theme: "bootstrap-5",
	templateResult: cityformat,
	templateSelection: cityformat,
});
// Language
$("[data-select2-selector='language']").select2({
	theme: "bootstrap-5",
	templateResult: languageformat,
	templateSelection: languageformat,
});
// Currency
$("[data-select2-selector='currency']").select2({
	theme: "bootstrap-5",
	templateResult: currencyformat,
	templateSelection: currencyformat,
});
// Programming
$("[data-select2-selector='programming']").select2({
	theme: "bootstrap-5",
	templateResult: programmingformat,
	templateSelection: programmingformat,
});
