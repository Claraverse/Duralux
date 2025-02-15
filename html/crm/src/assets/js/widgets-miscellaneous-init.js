"use strict";
/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".times-progress-chart").circleProgress({
		max: 100,
		value: 40,
		textFormat: "percent",
	});
	$(".tasks-progress-chart").circleProgress({
		max: 100,
		value: 50,
		textFormat: "percent",
	});
	$(".projects-progress-chart").circleProgress({
		max: 100,
		value: 65,
		textFormat: "percent",
	});
	$(".project-progress-1, .team-progress-1, .goal-progress-1").circleProgress({
		max: 100,
		value: 40,
		textFormat: "percent",
	});
	$(".project-progress-2, .team-progress-2, .goal-progress-2").circleProgress({
		max: 100,
		value: 65,
		textFormat: "percent",
	});
	$(".project-progress-3, .team-progress-3, .goal-progress-3").circleProgress({
		max: 100,
		value: 50,
		textFormat: "percent",
	});
	$(".project-progress-4, .team-progress-4, .goal-progress-4").circleProgress({
		max: 100,
		value: 75,
		textFormat: "percent",
	});
	$(".sales-progress-1").circleProgress({
		max: 100,
		value: 50,
		textFormat: function () {
			return "$450 USD";
		},
	});
	$(".sales-progress-2").circleProgress({
		max: 100,
		value: 60,
		textFormat: function () {
			return "$550 USD";
		},
	});
	$(".sales-progress-3").circleProgress({
		max: 100,
		value: 70,
		textFormat: function () {
			return "$850 USD";
		},
	});
	$(".sales-progress-4").circleProgress({
		max: 100,
		value: 80,
		textFormat: function () {
			return "$900 USD";
		},
	});
	$(".goal-progress").circleProgress({
		max: 100,
		value: 63,
		textFormat: "percent",
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Selling Status !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Selling Status",
				data: [25, 60, 20, 90, 45, 100, 55],
			},
		],
		chart: {
			type: "area",
			height: 215,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.5,
				stops: [0, 90, 100],
			},
		},
		colors: ["#17a2b8"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
		},
		dataLabels: {
			enabled: !1,
		},
		tooltip: {
			theme: "dark",
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Roboto",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#selling-status-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Conversion Status !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Conversion Status",
				data: [44, 75, 41, 70, 52, 76, 51, 71, 55, 82, 55, 82],
			},
		],
		chart: {
			type: "bar",
			height: 200,
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				horizontal: !1,
				endingShape: "rounded",
				columnWidth: "20%",
			},
		},
		colors: ["#fff"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
		},
		dataLabels: {
			enabled: !1,
		},
		xaxis: {
			categories: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			labels: {
				show: !0,
				style: {
					colors: "#fff",
					fontFamily: "Roboto",
				},
			},
			axisBorder: {
				show: !1,
			},
		},
		yaxis: {
			labels: {
				show: !1,
			},
		},
		tooltip: {
			theme: "dark",
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				colors: "#000",
				fontFamily: "Roboto",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#conversion-statistic-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Traffic Source !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "New Visitors",
				data: [20, 45, 10, 75, 35, 80, 45, 100, 55, 110, 75, 135],
				type: "area",
			},
			{
				name: "Returning Visitos",
				data: [25, 60, 20, 90, 45, 100, 65, 125, 75, 135, 90, 145],
				type: "area",
			},
		],
		chart: {
			type: "area",
			height: 215,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			curve: "smooth",
			width: [1.5, 1.5],
			dashArray: [0, 4],
			lineCap: "round",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.5,
				stops: [0, 90, 100],
			},
		},
		colors: ["#e49e3d", "#fd7e14"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
		},
		dataLabels: {
			enabled: !1,
		},
		tooltip: {
			theme: "dark",
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Roboto",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#traffic-source-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Total Sales !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 150,
			sparkline: {
				enabled: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#93a9ff"],
		fill: {
			type: "solid",
			opacity: 0.4,
		},
		stroke: {
			curve: "smooth",
			width: 3,
		},
		series: [
			{
				name: "Total Sales",
				data: [20, 10, 18, 12, 25, 10, 20],
			},
		],
		yaxis: {
			min: 0,
			max: 30,
		},
		tooltip: {
			theme: "dark",
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
	};
	var chart = new ApexCharts(document.querySelector("#total-sales-color-graph"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Total Comments !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 150,
			sparkline: {
				enabled: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#ff9999"],
		fill: {
			type: "solid",
			opacity: 0.4,
		},
		stroke: {
			curve: "smooth",
			width: 3,
		},
		series: [
			{
				name: "Total Comments",
				data: [10, 20, 18, 25, 12, 10, 20],
			},
		],
		yaxis: {
			min: 0,
			max: 30,
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			y: {
				title: {
					formatter: function () {
						return "Total Comment";
					},
				},
			},
			marker: {
				show: false,
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#total-comment-color-graph"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Income Status !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 150,
			sparkline: {
				enabled: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#64ffaa"],
		fill: {
			type: "solid",
			opacity: 0.4,
		},
		stroke: {
			curve: "smooth",
			width: 3,
		},
		series: [
			{
				name: "Income Status",
				data: [20, 10, 25, 18, 18, 10, 12],
			},
		],
		yaxis: {
			min: 0,
			max: 30,
		},
		tooltip: {
			theme: "dark",
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			y: {
				title: {
					formatter: function () {
						return "Income Status";
					},
				},
			},
			marker: {
				show: false,
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#total-income-color-graph"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Earnings  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Earnings",
				data: [25, 60, 20, 90, 45, 100, 55],
			},
		],
		chart: {
			type: "area",
			height: 130,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 2,
			curve: "smooth",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.5,
				stops: [0, 90, 100],
			},
		},
		colors: ["#25b865"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
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
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#earnings-card-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Expense  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Expenses",
				data: [25, 60, 20, 90, 45, 100, 55],
			},
		],
		chart: {
			type: "area",
			height: 130,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 2,
			curve: "smooth",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.5,
				stops: [0, 90, 100],
			},
		},
		colors: ["#d13b4c"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
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
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#expense-card-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Revenue  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Revenue",
				data: [25, 60, 20, 90, 45, 100, 55],
			},
		],
		chart: {
			type: "area",
			height: 130,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 2,
			curve: "smooth",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.5,
				stops: [0, 90, 100],
			},
		},
		colors: ["#3454D1"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
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
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#revenue-card-area-chart"), options);
	chart.render();
});
