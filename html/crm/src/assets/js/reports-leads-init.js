"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Inquiry Tracking !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 350,
			width: "100%",
			stacked: !1,
			type: "bar",
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			show: !1,
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "30%",
				distributed: false,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "K";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: ["#3454D1", "#e5e7eb"],
		series: [
			{
				name: "New",
				data: [20, 30, 40, 50, 46, 42, 38, 34, 30, 28, 26, 25],
			},
			{
				name: "Resolved",
				data: [15, 25, 35, 45, 41, 38, 33, 28, 23, 18, 13, 10],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "10px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -5,
				offsetY: 0,
				style: {
					color: "#64748b",
				},
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: !1,
				},
			},
			yaxis: {
				lines: {
					show: !1,
				},
			},
		},
		dataLabels: {
			enabled: !1,
		},
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				fontSize: "12px",
				fontFamily: "Inter",
			},
		},
		legend: {
			show: !1,
			labels: {
				fontSize: "12px",
				colors: "#64748b",
			},
			fontSize: "12px",
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#leads-inquiry-tracking"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Inquiry Channel !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "bar",
			height: 350,
			stacked: true,
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
				horizontal: false,
			},
		},
		colors: ["#283c50", "#3454d1", "#fb8500", "#25b865", "#ffb703"],
		series: [
			{
				name: "Leads",
				data: [4, 5, 4, 6, 3, 4, 5, 4, 6, 3, 4, 5],
			},
			{
				name: "Active",
				data: [3, 4, 3, 6, 5, 3, 3, 6, 2, 5, 4, 3],
			},
			{
				name: "Pending",
				data: [4, 5, 4, 6, 3, 4, 5, 4, 6, 3, 4, 6],
			},
			{
				name: "Resolved",
				data: [4, 5, 4, 6, 3, 4, 5, 4, 6, 3, 4, 5],
			},
			{
				name: "Calcelled",
				data: [4, 5, 4, 6, 3, 4, 5, 4, 6, 3, 4, 5],
			},
		],
		xaxis: {
			categories: ["JAN/22", "FEB/22", "MAR/22", "APR/22", "MAY/22", "JUN/22", "JUL/22", "AUG/22", "SEP/22", "OCT/22", "NOV/22", "DEC/22"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "10px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + " K";
				},
				offsetX: -5,
				offsetY: 0,
				style: {
					color: "#64748b",
				},
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: !1,
				},
			},
			yaxis: {
				lines: {
					show: !1,
				},
			},
		},
		dataLabels: {
			enabled: !1,
		},
		tooltip: {
			shared: !0,
			inverseOrder: !0,
			y: {
				formatter: function (e) {
					return +e + " GB";
				},
			},
			style: {
				fontSize: "11px",
				fontFamily: "Inter",
			},
		},
		legend: {
			show: !0,
			position: "top",
			horizontalAlign: "left",
			fontSize: "12px",
			fontFamily: "Inter",
			labels: {
				fontSize: "12px",
				colors: "#64748b",
			},
			markers: {
				width: 10,
				height: 10,
				radius: 25,
			},
			itemMargin: {
				horizontal: 15,
				vertical: 5,
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#leads-inquiry-channel"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".lead-progress-1").circleProgress({
		max: 100,
		value: 60,
		textFormat: function () {
			return "$975 USD";
		},
	});
	$(".lead-progress-2").circleProgress({
		max: 100,
		value: 55,
		textFormat: function () {
			return "$850 USD";
		},
	});
	$(".lead-progress-3").circleProgress({
		max: 100,
		value: 50,
		textFormat: function () {
			return "$1500 USD";
		},
	});
});
