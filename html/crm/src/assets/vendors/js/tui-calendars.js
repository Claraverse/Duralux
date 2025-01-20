"use strict";

/* eslint-disable require-jsdoc, no-unused-vars */

var CalendarList = [];

function CalendarInfo() {
	this.id = null;
	this.name = null;
	this.checked = true;
	this.color = null;
	this.bgColor = null;
	this.borderColor = null;
	this.dragBgColor = null;
}

function addCalendar(calendar) {
	CalendarList.push(calendar);
}

function findCalendar(id) {
	var found;

	CalendarList.forEach(function (calendar) {
		if (calendar.id === id) {
			found = calendar;
		}
	});

	return found || CalendarList[0];
}

function hexToRGBA(hex) {
	var radix = 16;
	var r = parseInt(hex.slice(1, 3), radix),
		g = parseInt(hex.slice(3, 5), radix),
		b = parseInt(hex.slice(5, 7), radix),
		a = parseInt(hex.slice(7, 9), radix) / 255 || 1;
	var rgba = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

	return rgba;
}

(function () {
	var calendar;
	var id = 0;

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Office";
	calendar.color = "#5485e4";
	calendar.bgColor = "#5485e4";
	calendar.dragBgColor = "#5485e4";
	calendar.borderColor = "#5485e4";
	addCalendar(calendar);

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Family";
	calendar.color = "#25b865";
	calendar.bgColor = "#25b865";
	calendar.dragBgColor = "#25b865";
	calendar.borderColor = "#25b865";
	addCalendar(calendar);

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Friend";
	calendar.color = "#d13b4c";
	calendar.bgColor = "#d13b4c";
	calendar.dragBgColor = "#d13b4c";
	calendar.borderColor = "#d13b4c";
	addCalendar(calendar);

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Travel";
	calendar.color = "#17a2b8";
	calendar.bgColor = "#17a2b8";
	calendar.dragBgColor = "#17a2b8";
	calendar.borderColor = "#17a2b8";
	addCalendar(calendar);

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Privete";
	calendar.color = "#e49e3d";
	calendar.bgColor = "#e49e3d";
	calendar.dragBgColor = "#e49e3d";
	calendar.borderColor = "#e49e3d";
	addCalendar(calendar);

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Holidays";
	calendar.color = "#5856d6";
	calendar.bgColor = "#5856d6";
	calendar.dragBgColor = "#5856d6";
	calendar.borderColor = "#5856d6";
	addCalendar(calendar);

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Company";
	calendar.color = "#3dc7be";
	calendar.bgColor = "#3dc7be";
	calendar.dragBgColor = "#3dc7be";
	calendar.borderColor = "#3dc7be";
	addCalendar(calendar);

	calendar = new CalendarInfo();
	id += 1;
	calendar.id = String(id);
	calendar.name = "Birthdays";
	calendar.color = "#475e77";
	calendar.bgColor = "#475e77";
	calendar.dragBgColor = "#475e77";
	calendar.borderColor = "#475e77";
	addCalendar(calendar);
})();
