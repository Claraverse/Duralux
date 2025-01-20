"use strict";

var tomailmodal = document.querySelector("input[name=tomailmodal]");
var ccmailmodal = document.querySelector("input[name=ccmailmodal]");
var bccmailmodal = document.querySelector("input[name=bccmailmodal]");
var tomailcontent = document.querySelector("input[name=tomailcontent]");
var ccmailcontent = document.querySelector("input[name=ccmailcontent]");
var bccmailcontent = document.querySelector("input[name=bccmailcontent]");

var userlist = [
	{
		value: 1,
		name: "WrapCoders",
		avatar: "https://en.gravatar.com/userimage/217650896/f011e8341437035d5063e32a126cb70d.png",
		email: "wrapcode.info@gmail.com",
	},
	{
		value: 2,
		name: "Suraiya Parvin Swampa",
		avatar: "https://i.pravatar.cc/80?img=1",
		email: "suraiya.swampa@outlook.com",
	},
	{
		value: 3,
		name: "Anwar Hossain Riyad",
		avatar: "https://i.pravatar.cc/80?img=2",
		email: "anwar.hossain@live.com",
	},
	{
		value: 4,
		name: "Ardeen Batisse",
		avatar: "https://i.pravatar.cc/80?img=3",
		email: "abatisse2@nih.gov",
	},
	{
		value: 5,
		name: "Graeme Yellowley",
		avatar: "https://i.pravatar.cc/80?img=4",
		email: "gyellowley3@behance.net",
	},
	{
		value: 6,
		name: "Dido Wilford",
		avatar: "https://i.pravatar.cc/80?img=5",
		email: "dwilford4@jugem.jp",
	},
	{
		value: 7,
		name: "Celesta Orwin",
		avatar: "https://i.pravatar.cc/80?img=6",
		email: "corwin5@meetup.com",
	},
	{
		value: 8,
		name: "Sally Main",
		avatar: "https://i.pravatar.cc/80?img=7",
		email: "smain6@techcrunch.com",
	},
	{
		value: 9,
		name: "Grethel Haysman",
		avatar: "https://i.pravatar.cc/80?img=8",
		email: "ghaysman7@mashable.com",
	},
	{
		value: 10,
		name: "Marvin Mandrake",
		avatar: "https://i.pravatar.cc/80?img=9",
		email: "mmandrake8@sourceforge.net",
	},
	{
		value: 11,
		name: "Corrie Tidey",
		avatar: "https://i.pravatar.cc/80?img=10",
		email: "ctidey9@youtube.com",
	},
	{
		value: 12,
		name: "Antons Esson",
		avatar: "https://i.pravatar.cc/80?img=12",
		email: "aesson1@hotmail.com",
	},
	{
		value: 13,
		name: "Archie Cantones",
		avatar: "https://i.pravatar.cc/80?img=13",
		email: "archie.cantones@gmail.com",
	},
	{
		value: 14,
		name: "Holmes Cherryman",
		avatar: "https://i.pravatar.cc/80?img=14",
		email: "holmes.cherryman@gmail.com",
	},
	{
		value: 15,
		name: "Malanie Hanvey",
		avatar: "https://i.pravatar.cc/80?img=15",
		email: "malanie.hanvey@live.com",
	},
	{
		value: 16,
		name: "Kenneth Hune",
		avatar: "https://i.pravatar.cc/80?img=16",
		email: "kenneth.hune@facebook.com",
	},
	{
		value: 17,
		name: "Antons Esson",
		avatar: "https://i.pravatar.cc/80?img=17",
		email: "aesson1@yahoo.com",
	},
	{
		value: 18,
		name: "Jesse Ross",
		avatar: "https://i.pravatar.cc/80?img=18",
		email: "jesse.ross@gmail.com",
	},
	{
		value: 19,
		name: "Madsen Daniel",
		avatar: "https://i.pravatar.cc/80?img=19",
		email: "madsen.daniel@msn.com",
	},
	{
		value: 20,
		name: "Valentine Maton",
		avatar: "https://i.pravatar.cc/80?img=20",
		email: "valentine.maton@gmail.com",
	},
];

/*
<--!----------------------------------------------------------------!-->
<--! Tagify [tomailmodal] !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	function tagTemplate(tagData) {
		return `
			<tag title="${tagData.email}"
					contenteditable='false'
					spellcheck='false'
					tabIndex="-1"
					class="tagify__tag ${tagData.class ? tagData.class : ""}"
					${this.getAttributes(tagData)}>
				<x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
				<div>
					<div class='tagify__tag__avatar-wrap'>
						<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
					</div>
					<span class='tagify__tag-text'>${tagData.name}</span>
				</div>
			</tag>
		`;
	}

	function suggestionItemTemplate(tagData) {
		return `
			<div ${this.getAttributes(tagData)}
				class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
				tabindex="0"
				role="option">
				${
					tagData.avatar
						? `
				<div class='tagify__dropdown__item__avatar-wrap'>
					<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
				</div>`
						: ""
				}
				<strong>${tagData.name}</strong>
				<span class="text-gray-500">${tagData.email}</span>
			</div>
		`;
	}

	function dropdownHeaderTemplate(suggestions) {
		return `
			<div class="${this.settings.classNames.dropdownItem} ${this.settings.classNames.dropdownItem}__addAll">
				<strong>${this.value.length ? `Add Remaining ${suggestions.length}` : "Add All"}</strong>
				<span>${suggestions.length} members</span>
			</div>
		`;
	}

	var tagify = new Tagify(tomailmodal, {
		tagTextProp: "name", // very important since a custom template is used with this property as text
		enforceWhitelist: true,
		skipInvalid: true, // do not remporarily add invalid tags
		dropdown: {
			closeOnSelect: false,
			enabled: 0,
			classname: "users-list",
			searchKeys: ["name", "email"], // very important to set by which keys to search for suggesttions when typing
		},
		templates: {
			tag: tagTemplate,
			dropdownItem: suggestionItemTemplate,
			dropdownHeader: dropdownHeaderTemplate,
		},
		whitelist: userlist,
	});

	// listen to dropdown suggestion items selection
	tagify.on("dropdown:select", onSelectSuggestion);

	function onSelectSuggestion(e) {
		console.log(this);
		console.log(e.detail.elm.className, e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`));

		if (e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`)) tagify.dropdown.selectAll();
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! Tagify [ccmailmodal] !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	function tagTemplate(tagData) {
		return `
			<tag title="${tagData.email}"
					contenteditable='false'
					spellcheck='false'
					tabIndex="-1"
					class="tagify__tag ${tagData.class ? tagData.class : ""}"
					${this.getAttributes(tagData)}>
				<x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
				<div>
					<div class='tagify__tag__avatar-wrap'>
						<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
					</div>
					<span class='tagify__tag-text'>${tagData.name}</span>
				</div>
			</tag>
		`;
	}

	function suggestionItemTemplate(tagData) {
		return `
			<div ${this.getAttributes(tagData)}
				class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
				tabindex="0"
				role="option">
				${
					tagData.avatar
						? `
				<div class='tagify__dropdown__item__avatar-wrap'>
					<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
				</div>`
						: ""
				}
				<strong>${tagData.name}</strong>
				<span class="text-gray-500">${tagData.email}</span>
			</div>
		`;
	}

	function dropdownHeaderTemplate(suggestions) {
		return `
			<div class="${this.settings.classNames.dropdownItem} ${this.settings.classNames.dropdownItem}__addAll">
				<strong>${this.value.length ? `Add Remaining ${suggestions.length}` : "Add All"}</strong>
				<span>${suggestions.length} members</span>
			</div>
		`;
	}

	var tagify = new Tagify(ccmailmodal, {
		tagTextProp: "name", // very important since a custom template is used with this property as text
		enforceWhitelist: true,
		skipInvalid: true, // do not remporarily add invalid tags
		dropdown: {
			closeOnSelect: false,
			enabled: 0,
			classname: "users-list",
			searchKeys: ["name", "email"], // very important to set by which keys to search for suggesttions when typing
		},
		templates: {
			tag: tagTemplate,
			dropdownItem: suggestionItemTemplate,
			dropdownHeader: dropdownHeaderTemplate,
		},
		whitelist: userlist,
	});

	// listen to dropdown suggestion items selection
	tagify.on("dropdown:select", onSelectSuggestion);

	function onSelectSuggestion(e) {
		console.log(this);
		console.log(e.detail.elm.className, e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`));

		if (e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`)) tagify.dropdown.selectAll();
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! Tagify [bccmailmodal] !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	function tagTemplate(tagData) {
		return `
			<tag title="${tagData.email}"
					contenteditable='false'
					spellcheck='false'
					tabIndex="-1"
					class="tagify__tag ${tagData.class ? tagData.class : ""}"
					${this.getAttributes(tagData)}>
				<x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
				<div>
					<div class='tagify__tag__avatar-wrap'>
						<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
					</div>
					<span class='tagify__tag-text'>${tagData.name}</span>
				</div>
			</tag>
		`;
	}

	function suggestionItemTemplate(tagData) {
		return `
			<div ${this.getAttributes(tagData)}
				class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
				tabindex="0"
				role="option">
				${
					tagData.avatar
						? `
				<div class='tagify__dropdown__item__avatar-wrap'>
					<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
				</div>`
						: ""
				}
				<strong>${tagData.name}</strong>
				<span class="text-gray-500">${tagData.email}</span>
			</div>
		`;
	}

	function dropdownHeaderTemplate(suggestions) {
		return `
			<div class="${this.settings.classNames.dropdownItem} ${this.settings.classNames.dropdownItem}__addAll">
				<strong>${this.value.length ? `Add Remaining ${suggestions.length}` : "Add All"}</strong>
				<span>${suggestions.length} members</span>
			</div>
		`;
	}

	var tagify = new Tagify(bccmailmodal, {
		tagTextProp: "name", // very important since a custom template is used with this property as text
		enforceWhitelist: true,
		skipInvalid: true, // do not remporarily add invalid tags
		dropdown: {
			closeOnSelect: false,
			enabled: 0,
			classname: "users-list",
			searchKeys: ["name", "email"], // very important to set by which keys to search for suggesttions when typing
		},
		templates: {
			tag: tagTemplate,
			dropdownItem: suggestionItemTemplate,
			dropdownHeader: dropdownHeaderTemplate,
		},
		whitelist: userlist,
	});

	// listen to dropdown suggestion items selection
	tagify.on("dropdown:select", onSelectSuggestion);

	function onSelectSuggestion(e) {
		console.log(this);
		console.log(e.detail.elm.className, e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`));

		if (e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`)) tagify.dropdown.selectAll();
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! Tagify [tomailcontent] !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	function tagTemplate(tagData) {
		return `
			<tag title="${tagData.email}"
					contenteditable='false'
					spellcheck='false'
					tabIndex="-1"
					class="tagify__tag ${tagData.class ? tagData.class : ""}"
					${this.getAttributes(tagData)}>
				<x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
				<div>
					<div class='tagify__tag__avatar-wrap'>
						<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
					</div>
					<span class='tagify__tag-text'>${tagData.name}</span>
				</div>
			</tag>
		`;
	}

	function suggestionItemTemplate(tagData) {
		return `
			<div ${this.getAttributes(tagData)}
				class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
				tabindex="0"
				role="option">
				${
					tagData.avatar
						? `
				<div class='tagify__dropdown__item__avatar-wrap'>
					<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
				</div>`
						: ""
				}
				<strong>${tagData.name}</strong>
				<span class="text-gray-500">${tagData.email}</span>
			</div>
		`;
	}

	function dropdownHeaderTemplate(suggestions) {
		return `
			<div class="${this.settings.classNames.dropdownItem} ${this.settings.classNames.dropdownItem}__addAll">
				<strong>${this.value.length ? `Add Remaining ${suggestions.length}` : "Add All"}</strong>
				<span>${suggestions.length} members</span>
			</div>
		`;
	}

	var tagify = new Tagify(tomailcontent, {
		tagTextProp: "name", // very important since a custom template is used with this property as text
		enforceWhitelist: true,
		skipInvalid: true, // do not remporarily add invalid tags
		dropdown: {
			closeOnSelect: false,
			enabled: 0,
			classname: "users-list",
			searchKeys: ["name", "email"], // very important to set by which keys to search for suggesttions when typing
		},
		templates: {
			tag: tagTemplate,
			dropdownItem: suggestionItemTemplate,
			dropdownHeader: dropdownHeaderTemplate,
		},
		whitelist: userlist,
	});

	// listen to dropdown suggestion items selection
	tagify.on("dropdown:select", onSelectSuggestion);

	function onSelectSuggestion(e) {
		console.log(this);
		console.log(e.detail.elm.className, e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`));

		if (e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`)) tagify.dropdown.selectAll();
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! Tagify [ccmailcontent] !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	function tagTemplate(tagData) {
		return `
			<tag title="${tagData.email}"
					contenteditable='false'
					spellcheck='false'
					tabIndex="-1"
					class="tagify__tag ${tagData.class ? tagData.class : ""}"
					${this.getAttributes(tagData)}>
				<x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
				<div>
					<div class='tagify__tag__avatar-wrap'>
						<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
					</div>
					<span class='tagify__tag-text'>${tagData.name}</span>
				</div>
			</tag>
		`;
	}

	function suggestionItemTemplate(tagData) {
		return `
			<div ${this.getAttributes(tagData)}
				class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
				tabindex="0"
				role="option">
				${
					tagData.avatar
						? `
				<div class='tagify__dropdown__item__avatar-wrap'>
					<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
				</div>`
						: ""
				}
				<strong>${tagData.name}</strong>
				<span class="text-gray-500">${tagData.email}</span>
			</div>
		`;
	}

	function dropdownHeaderTemplate(suggestions) {
		return `
			<div class="${this.settings.classNames.dropdownItem} ${this.settings.classNames.dropdownItem}__addAll">
				<strong>${this.value.length ? `Add Remaining ${suggestions.length}` : "Add All"}</strong>
				<span>${suggestions.length} members</span>
			</div>
		`;
	}

	var tagify = new Tagify(ccmailcontent, {
		tagTextProp: "name", // very important since a custom template is used with this property as text
		enforceWhitelist: true,
		skipInvalid: true, // do not remporarily add invalid tags
		dropdown: {
			closeOnSelect: false,
			enabled: 0,
			classname: "users-list",
			searchKeys: ["name", "email"], // very important to set by which keys to search for suggesttions when typing
		},
		templates: {
			tag: tagTemplate,
			dropdownItem: suggestionItemTemplate,
			dropdownHeader: dropdownHeaderTemplate,
		},
		whitelist: userlist,
	});

	// listen to dropdown suggestion items selection
	tagify.on("dropdown:select", onSelectSuggestion);

	function onSelectSuggestion(e) {
		console.log(this);
		console.log(e.detail.elm.className, e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`));

		if (e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`)) tagify.dropdown.selectAll();
	}
});

/*
<--!----------------------------------------------------------------!-->
<--! Tagify [bccmailcontent] !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	function tagTemplate(tagData) {
		return `
			<tag title="${tagData.email}"
					contenteditable='false'
					spellcheck='false'
					tabIndex="-1"
					class="tagify__tag ${tagData.class ? tagData.class : ""}"
					${this.getAttributes(tagData)}>
				<x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
				<div>
					<div class='tagify__tag__avatar-wrap'>
						<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
					</div>
					<span class='tagify__tag-text'>${tagData.name}</span>
				</div>
			</tag>
		`;
	}

	function suggestionItemTemplate(tagData) {
		return `
			<div ${this.getAttributes(tagData)}
				class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
				tabindex="0"
				role="option">
				${
					tagData.avatar
						? `
				<div class='tagify__dropdown__item__avatar-wrap'>
					<img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
				</div>`
						: ""
				}
				<strong>${tagData.name}</strong>
				<span class="text-gray-500">${tagData.email}</span>
			</div>
		`;
	}

	function dropdownHeaderTemplate(suggestions) {
		return `
			<div class="${this.settings.classNames.dropdownItem} ${this.settings.classNames.dropdownItem}__addAll">
				<strong>${this.value.length ? `Add Remaining ${suggestions.length}` : "Add All"}</strong>
				<span>${suggestions.length} members</span>
			</div>
		`;
	}

	var tagify = new Tagify(bccmailcontent, {
		tagTextProp: "name", // very important since a custom template is used with this property as text
		enforceWhitelist: true,
		skipInvalid: true, // do not remporarily add invalid tags
		dropdown: {
			closeOnSelect: false,
			enabled: 0,
			classname: "users-list",
			searchKeys: ["name", "email"], // very important to set by which keys to search for suggesttions when typing
		},
		templates: {
			tag: tagTemplate,
			dropdownItem: suggestionItemTemplate,
			dropdownHeader: dropdownHeaderTemplate,
		},
		whitelist: userlist,
	});

	// listen to dropdown suggestion items selection
	tagify.on("dropdown:select", onSelectSuggestion);

	function onSelectSuggestion(e) {
		console.log(this);
		console.log(e.detail.elm.className, e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`));

		if (e.detail.elm.classList.contains(`${tagify.settings.classNames.dropdownItem}__addAll`)) tagify.dropdown.selectAll();
	}
});
