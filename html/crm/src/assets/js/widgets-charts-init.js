"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Bounce Rate !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Bounce Rate (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#64748a"],
	};
	var chart = new ApexCharts(document.querySelector("#bounce-rate"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Page Views !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Page Views (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#3454d1"],
	};
	var chart = new ApexCharts(document.querySelector("#page-views"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Site Impression !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Site Impression (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#e49e3d"],
	};
	var chart = new ApexCharts(document.querySelector("#site-impressions"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Conversions Rate !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Site Impression (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#25b865"],
	};
	var chart = new ApexCharts(document.querySelector("#conversions-rate"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Income Bar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "bar",
			height: 120,
			stacked: !0,
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
			},
		},
		grid: {
			show: !1,
		},
		grid: {
			padding: {
				top: 0,
				right: 20,
				bottom: 0,
				left: 10,
			},
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
		legend: {
			show: !1,
		},
		colors: ["#3454D1"],
		dataLabels: {
			enabled: !1,
		},
		stroke: {
			curve: "smooth",
		},
		series: [
			{
				name: "Income",
				data: [40, 55, 45, 58, 47, 61, 49, 65, 54, 69, 57, 73],
			},
		],
		xaxis: {
			show: !1,
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				show: !1,
				style: {
					colors: "#A0ACBB",
					fontFamily: "Inter",
				},
			},
		},
		yaxis: {
			labels: {
				show: !1,
			},
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#income-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Expense Bar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "bar",
			height: 120,
			stacked: !0,
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
			},
		},
		grid: {
			show: !1,
		},
		grid: {
			padding: {
				top: 0,
				right: 20,
				bottom: 0,
				left: 10,
			},
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
		legend: {
			show: !1,
		},
		colors: ["#D13B4C"],
		dataLabels: {
			enabled: !1,
		},
		stroke: {
			curve: "smooth",
		},
		series: [
			{
				name: "Expenses",
				data: [40, 55, 45, 58, 47, 61, 49, 65, 54, 69, 57, 73],
			},
		],
		xaxis: {
			show: !1,
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				show: !1,
				style: {
					colors: "#A0ACBB",
					fontFamily: "Inter",
				},
			},
		},
		yaxis: {
			labels: {
				show: !1,
			},
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#expense-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Order Bar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "bar",
			height: 120,
			stacked: !0,
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
			},
		},
		grid: {
			show: !1,
		},
		grid: {
			padding: {
				top: 0,
				right: 20,
				bottom: 0,
				left: 10,
			},
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
		legend: {
			show: !1,
		},
		colors: ["#25B865"],
		dataLabels: {
			enabled: !1,
		},
		stroke: {
			curve: "smooth",
		},
		series: [
			{
				name: "Income",
				data: [40, 55, 45, 58, 47, 61, 49, 65, 54, 69, 57, 73],
			},
		],
		xaxis: {
			show: !1,
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				show: !1,
				style: {
					colors: "#A0ACBB",
					fontFamily: "Inter",
				},
			},
		},
		yaxis: {
			labels: {
				show: !1,
			},
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#order-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Revenue Bar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "bar",
			height: 120,
			stacked: !0,
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
			},
		},
		grid: {
			show: !1,
		},
		grid: {
			padding: {
				top: 0,
				right: 20,
				bottom: 0,
				left: 10,
			},
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
		legend: {
			show: !1,
		},
		colors: ["#E49E3D"],
		dataLabels: {
			enabled: !1,
		},
		stroke: {
			curve: "smooth",
		},
		series: [
			{
				name: "Pending",
				data: [40, 55, 45, 58, 47, 61, 49, 65, 54, 69, 57, 73],
			},
		],
		xaxis: {
			show: !1,
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				show: !1,
				style: {
					colors: "#A0ACBB",
					fontFamily: "Inter",
				},
			},
		},
		yaxis: {
			labels: {
				show: !1,
			},
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#revenue-bar-chart"), options);
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
			height: 100,
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
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return "Total Sales";
					},
				},
			},
			marker: {
				show: false,
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
			height: 100,
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
			height: 100,
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
<--! Total Visitors !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 100,
			sparkline: {
				enabled: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#ffca7d"],
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
				name: "Total Visitors",
				data: [18, 10, 20, 10, 12, 25, 20],
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
						return "Total Visitors";
					},
				},
			},
			marker: {
				show: false,
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#total-visitors-color-graph"), options);
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

/*
<--!----------------------------------------------------------------!-->
<--! Task Completed !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Task Completed",
				data: [44, 55, 41, 60, 52, 66, 51],
			},
		],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 0.5,
			curve: "smooth",
			dashArray: [2, 2, 2, 2],
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.75,
				stops: [0, 90, 100],
			},
		},
		colors: ["#3454d1"],
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
			categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
		},
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "Tasks";
				},
			},
			style: {
				fontSize: "12px",
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#task-completed-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! New Tasks !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "New Tasks",
				data: [44, 55, 41, 60, 52, 66, 51],
			},
		],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 0.5,
			curve: "smooth",
			dashArray: [2, 2, 2, 2],
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.75,
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
		xaxis: {
			categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
		},
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "Projects";
				},
			},
			style: {
				fontSize: "12px",
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#new-tasks-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Project Done !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Project Done",
				data: [44, 55, 41, 60, 52, 66, 51],
			},
		],
		chart: {
			type: "area",
			height: 100,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 0.5,
			curve: "smooth",
			dashArray: [2, 2, 2, 2],
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.75,
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
		xaxis: {
			categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
		},
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "Projects";
				},
			},
			style: {
				fontSize: "12px",
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#project-done-area-chart"), options);
	chart.render();
});

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
<--! Time Logged !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 350,
			type: "area",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		xaxis: {
			categories: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "11px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + " Mins";
				},
				offsetX: -22,
				offsetY: 0,
				style: {
					fontSize: "11px",
					color: "#64748b",
				},
			},
		},
		stroke: {
			width: 2,
			curve: "smooth",
			lineCap: "round",
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
		},
		legend: {
			show: !1,
		},
		colors: ["#3454d1"],
		dataLabels: {
			enabled: !1,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.8,
				stops: [0, 100],
			},
		},
		series: [
			{
				name: "Time Logged",
				data: [20, 45, 25, 60, 30, 65, 35, 75, 60, 80, 65, 95],
				type: "area",
			},
		],
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + " Mins";
				},
			},
			style: {
				fontSize: "11px",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#logged-time-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Billable Time !-->
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
				return val + " Mins";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: ["#e5e7eb", "#3454D1"],
		series: [
			{
				name: "Total Time",
				data: [20, 30, 40, 50, 46, 42, 38, 34, 30, 28, 26, 25],
			},
			{
				name: "Billable Time",
				data: [15, 25, 35, 45, 41, 38, 33, 28, 23, 18, 13, 10],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"],
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
					return +e + " Mins";
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
					return +e + " Mins";
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
	var chart = new ApexCharts(document.querySelector("#billable-time-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Payment Records !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 380,
			width: "100%",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			width: [1, 2, 3],
			curve: "smooth",
			lineCap: "round",
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "30%",
			},
		},
		colors: ["#3454d1", "#a2acc7", "#E1E3EA"],
		series: [
			{
				name: "Payment Rejected",
				type: "bar",
				data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 21],
			},
			{
				name: "Payment Completed",
				type: "line",
				data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 41],
			},
			{
				name: "Awaiting Payment",
				type: "bar",
				data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 56],
			},
		],
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
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
					colors: "#A0ACBB",
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
					color: "#A0ACBB",
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
				colors: "#A0ACBB",
			},
			fontSize: "12px",
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#payment-records-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Leads Overview !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			width: 307,
			type: "donut",
		},
		dataLabels: {
			enabled: !1,
		},
		series: [20, 15, 10, 18, 10, 15, 16, 14, 10],
		labels: ["New", "Contacted", "Qualified", "Working", "Customer", "Proposal", "Leads", "Prograss", "Others"],
		colors: ["#3454d1", "#1565c0", "#1976d2", "#1e88e5", "#2196f3", "#42a5f5", "#64b5f6", "#90caf9", "#aad6fa"],
		stroke: {
			width: 0,
			lineCap: "round",
		},
		legend: {
			show: !1,
			position: "bottom",
			fontFamily: "Inter",
			fontWeight: 500,
			labels: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
			markers: {
				width: 10,
				height: 10,
			},
			itemMargin: {
				horizontal: 20,
				vertical: 5,
			},
		},
		plotOptions: {
			pie: {
				donut: {
					size: "85%",
					labels: {
						show: !1,
						name: {
							show: !1,
							fontSize: "16px",
							colors: "#A0ACBB",
							fontFamily: "Inter",
						},
						value: {
							show: !1,
							fontSize: "30px",
							fontFamily: "Inter",
							color: "#A0ACBB",
							formatter: function (o) {
								return o;
							},
						},
					},
				},
			},
		},
		responsive: [
			{
				breakpoint: 380,
				options: {
					chart: {
						width: 280,
					},
					legend: {
						show: !1,
					},
				},
			},
		],
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#leads-overview-donut"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Visitors Overview !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 385,
			type: "area",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		xaxis: {
			categories: ["JAN/22", "FEB/22", "MAR/22", "APR/22", "MAY/22", "JUN/22", "JUL/22"],
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
				offsetX: -22,
				offsetY: 0,
				style: {
					fontSize: "10px",
					color: "#64748b",
				},
			},
		},
		stroke: {
			curve: "smooth",
			width: [1, 1, 1, 1],
			dashArray: [3, 3, 3, 3],
			lineCap: "round",
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
		},
		legend: {
			show: !1,
		},
		colors: ["#3454d1", "#25b865", "#d13b4c"],
		dataLabels: {
			enabled: !1,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 90, 100],
			},
		},
		series: [
			{
				name: "Unique Visitors",
				data: [20, 45, 10, 75, 35, 80, 40],
				type: "area",
			},
			{
				name: "Unique Page Views",
				data: [25, 60, 20, 90, 45, 100, 55],
				type: "area",
			},
			{
				name: "Unique Impression",
				data: [30, 40, 15, 70, 30, 85, 45],
				type: "area",
			},
		],
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
	};
	var chart = new ApexCharts(document.querySelector("#visitors-overview-statistics-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Click By Country !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			width: 300,
			type: "donut",
		},
		dataLabels: {
			enabled: !1,
		},
		labels: ["Australia", "United State", "Bangladesh"],
		stroke: {
			width: 0,
		},
		series: [64, 25, 45],
		legend: {
			show: !1,
		},
		colors: ["#FF9F43", "#DC3545", "#3454D1"],
		plotOptions: {
			pie: {
				donut: {
					size: "80%",
				},
			},
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				fontSize: "11px",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#click-by-country-donut"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Website Analytics !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "bar",
			height: 425,
			toolbar: {
				show: !1,
			},
		},
		series: [
			{
				name: "New Visitors",
				data: [44, 55, 41, 64, 22, 43, 21, 41, 64, 22, 43, 21],
			},
			{
				name: "Returning Visitors",
				data: [53, 32, 33, 52, 13, 44, 32, 33, 52, 13, 44, 32],
			},
		],
		plotOptions: {
			bar: {
				horizontal: !1,
				endingShape: "rounded",
				columnWidth: "25%",
			},
		},
		dataLabels: {
			enabled: !1,
			offsetX: -6,
			style: {
				fontSize: "12px",
				colors: ["#fff"],
			},
		},
		stroke: {
			show: !1,
			width: 1,
			colors: ["#fff"],
		},
		colors: ["#E1E3EA", "#3454d1"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					colors: "#64748b",
					fontFamily: "Inter",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (o) {
					return +o + "K";
				},
				offsetX: -22,
				offsetY: 0,
				style: {
					color: "#64748b",
					fontFamily: "Inter",
				},
			},
		},
		grid: {
			padding: {
				top: 0,
				right: 0,
				bottom: 30,
				left: 0,
			},
			strokeDashArray: 3,
			borderColor: "#e9ecef",
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
		legend: {
			show: !0,
			labels: {
				colors: "#64748b",
			},
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#websitean-alytics-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Billed Area !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 262,
			type: "area",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		xaxis: {
			categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23"],
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
				offsetX: -22,
				offsetY: 0,
				style: {
					fontSize: "10px",
					color: "#64748b",
				},
			},
		},
		stroke: {
			curve: "smooth",
			width: [1, 1, 1, 1],
			dashArray: [3, 3, 3, 3],
			lineCap: "round",
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
		},
		legend: {
			show: !1,
		},
		colors: ["#3454d1", "#25b865"],
		dataLabels: {
			enabled: !1,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 90, 100],
			},
		},
		series: [
			{
				name: "Unbilled  Hours",
				data: [45, 10, 75, 35, 80, 40],
				type: "area",
			},
			{
				name: "Billed Hours",
				data: [60, 20, 90, 45, 100, 55],
				type: "area",
			},
		],
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
	};
	var chart = new ApexCharts(document.querySelector("#billed-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Sales Pipeline [Leads]  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
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
				columnWidth: "20%",
				distributed: true,
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
		colors: colors,
		series: [
			{
				name: "Leads",
				data: [20, 30, 40, 50, 46, 42, 38, 34, 30, 28, 26, 25],
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
	var chart = new ApexCharts(document.querySelector("#leads-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! [Proposal]  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
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
				columnWidth: "20%",
				distributed: true,
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
		colors: colors,
		series: [
			{
				name: "Proposal",
				data: [28, 30, 32, 35, 38, 41, 44, 47, 50, 40, 30, 20],
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
	var chart = new ApexCharts(document.querySelector("#proposal-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Sales Pipeline [Contract]  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
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
				columnWidth: "20%",
				distributed: true,
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
		colors: colors,
		series: [
			{
				name: "Contract",
				data: [10, 20, 30, 40, 50, 60, 55, 50, 45, 40, 35, 30],
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
	var chart = new ApexCharts(document.querySelector("#contract-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Sales Pipeline [Project]  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
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
				columnWidth: "20%",
				distributed: true,
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
		colors: colors,
		series: [
			{
				name: "Project",
				data: [10, 20, 30, 40, 50, 60, 65, 50, 45, 40, 35, 30],
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
	var chart = new ApexCharts(document.querySelector("#project-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Session Device !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			width: 270,
			type: "donut",
		},
		dataLabels: {
			enabled: !1,
		},
		labels: ["Desktop", "Tablet", "Mobile", "Others"],
		stroke: {
			width: 0,
			lineCap: "round",
		},
		series: [64, 25, 45, 15],
		legend: {
			show: !1,
			position: "bottom",
			fontFamily: "Inter",
			fontWeight: 500,
			labels: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
			markers: {
				width: 10,
				height: 10,
			},
			itemMargin: {
				horizontal: 20,
				vertical: 5,
			},
		},
		colors: ["#FF9F43", "#475e77", "#DC3545", "#3454D1"],
		plotOptions: {
			pie: {
				donut: {
					size: "80%",
					labels: {
						show: !1,
						name: {
							show: !1,
							fontSize: "16px",
							colors: "#64748b",
							fontFamily: "Inter",
						},
						value: {
							show: !1,
							fontSize: "30px",
							fontFamily: "Inter",
							color: "#64748b",
							formatter: function (o) {
								return o;
							},
						},
					},
				},
			},
		},
		responsive: [
			{
				breakpoint: 380,
				options: {
					chart: {
						width: 280,
					},
					legend: {
						show: !1,
					},
				},
			},
		],
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#session-device-donut"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Project Statistics !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 365,
			type: "area",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			curve: "smooth",
			width: [1, 1, 1, 1],
			dashArray: [3, 3, 3, 3],
			lineCap: "round",
		},
		xaxis: {
			categories: ["Satarday", "Sunday", "Monday", "Thusday", "Wensday", "Thusday", "Friday"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "11px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -22,
				offsetY: 0,
				style: {
					fontSize: "11px",
					color: "#64748b",
				},
			},
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
		},
		legend: {
			show: !1,
		},
		dataLabels: {
			enabled: !1,
		},
		colors: ["#3454d1", "#25b865", "#e49e3d"],
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 100],
			},
		},
		series: [
			{
				name: "Tasks Completed",
				data: [20, 45, 25, 60, 30, 65, 35],
				type: "area",
			},
			{
				name: "Project Complated",
				data: [30, 25, 40, 35, 50, 40, 60],
				type: "area",
			},
			{
				name: "Upcomming Project",
				data: [45, 20, 50, 25, 65, 30, 75],
				type: "area",
			},
		],
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				fontSize: "11px",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#project-statistics-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Weekly Time Spent !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 320,
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
				columnWidth: "20%",
				distributed: true,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "MIN";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: colors,
		series: [
			{
				name: "Spent",
				data: [200, 300, 400, 500, 460, 420, 380],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["SAT", "SUN", "MON", "THU", "WEN", "THU", "FRI"],
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
					return +e + "M";
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
					return +e + " MIN";
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
	var chart = new ApexCharts(document.querySelector("#weekly-time-spent-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Visitors Area !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var optionsVisitors = {
		series: [
			{ name: "New Visitors", data: [18, 21, 40, 28, 31, 47, 51, 32, 45, 36, 65, 26] },
			{ name: "Retuning Visitors", data: [30, 11, 23, 18, 32, 30, 36, 15, 58, 45, 22, 34] },
		],
		chart: {
			height: 350,
			type: "area",
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			curve: "smooth",
			width: 2,
		},
		colors: ["#3454D1", "#FFA21D"],
		dataLabels: {
			enabled: !1,
		},
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontFamily: "Inter",
					fontSize: "11px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -22,
				offsetY: 0,
				style: {
					fontFamily: "Inter",
					fontSize: "11px",
					color: "#64748b",
				},
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				inverseColors: !1,
				opacityFrom: 0.45,
				opacityTo: 0.05,
				stops: [20, 100, 100, 100],
			},
		},
		markers: {
			size: 3,
			strokeWidth: 3,
			hover: {
				size: 4,
				sizeOffset: 2,
			},
		},
		legend: {
			show: !1,
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
		},
	};

	var chartCountries = new ApexCharts(document.querySelector("#visitors-area-chart"), optionsVisitors);
	chartCountries.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Top Countries !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var optionsCountries = {
		chart: {
			type: "bar",
			height: 400,
			fontFamily: "inherit",
			toolbar: {
				show: false,
			},
		},
		legend: {
			show: false,
		},
		series: [{ name: "Visitors", data: [87, 82, 68, 49, 41] }],
		colors: ["#3454d1", "#ffa21d", "#ea4d4d", "#25b865", "#283c50"],
		grid: {
			strokeDashArray: 4,
			position: "back",
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
		plotOptions: {
			bar: {
				columnWidth: "15%",
				horizontal: false,
				distributed: true,
				endingShape: "rounded",
				dataLabels: {
					position: "top",
				},
			},
		},
		labels: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: false,
		},
		xaxis: {
			categories: ["USA", "India", "UK", "France", "Canada"],
			axisTicks: {
				show: true,
			},
			axisBorder: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: true,
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return val + "k";
				},
			},
		},
	};

	var chartCountries = new ApexCharts(document.querySelector("#top-countries-bar-chart"), optionsCountries);
	chartCountries.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Earning & Expense !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Earning",
				data: [
					{
						x: "Jan",
						y: 322,
					},
					{
						x: "Feb",
						y: 324,
					},
					{
						x: "Mar",
						y: 329,
					},
					{
						x: "Apr",
						y: 342,
					},
					{
						x: "May",
						y: 348,
					},
					{
						x: "Jun",
						y: 334,
					},
					{
						x: "Jul",
						y: 325,
					},
					{
						x: "Aug",
						y: 316,
					},
					{
						x: "Sep",
						y: 318,
					},
					{
						x: "Oct",
						y: 330,
					},
					{
						x: "Nov",
						y: 355,
					},
					{
						x: "Dec",
						y: 366,
					},
				],
			},
			{
				name: "Expense",
				data: [
					{
						x: "Jan",
						y: -162,
					},
					{
						x: "Feb",
						y: -90,
					},
					{
						x: "Mar",
						y: -50,
					},
					{
						x: "Apr",
						y: -77,
					},
					{
						x: "May",
						y: -35,
					},
					{
						x: "Jun",
						y: -45,
					},
					{
						x: "Jul",
						y: -88,
					},
					{
						x: "Aug",
						y: -120,
					},
					{
						x: "Sep",
						y: -156,
					},
					{
						x: "Oct",
						y: -123,
					},
					{
						x: "Nov",
						y: -88,
					},
					{
						x: "Dec",
						y: -66,
					},
				],
			},
		],
		chart: {
			type: "bar",
			height: 480,
			stacked: !0,
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "15%",
			},
		},
		colors: ["#3454D1", "#FFA21D"],
		dataLabels: {
			enabled: !1,
		},
		legend: {
			labels: {
				colors: "#A0ACBB",
			},
			fontFamily: "Inter",
		},
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					colors: "#A0ACBB",
					fontFamily: "Inter",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: 0,
				offsetY: 0,
				style: {
					color: "#A0ACBB",
					fontFamily: "Inter",
				},
			},
		},
		grid: {
			padding: {
				top: 0,
				right: 0,
				bottom: 30,
				left: 0,
			},
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
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#earning-expense-area-chart"), options);
	chart.render();
});
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
			height: 125,
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
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#earnings-area-chart"), options);
	chart.render();
});
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
			height: 125,
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
		colors: ["#FFA21D"],
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
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#expense-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Performance Overview !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var optionscandlestickchart = {
		chart: {
			toolbar: {
				show: false,
			},
			height: 500,
			type: "candlestick",
		},
		plotOptions: {
			candlestick: {
				colors: {
					upward: "#3454d1",
					downward: "#e49e3d",
				},
			},
		},
		fill: {
			opacity: 0.9,
			colors: ["#25b865"],
		},
		series: [
			{
				data: [
					{
						x: new Date(1538778600000),
						y: [6629.81, 6650.5, 6623.04, 6633.33],
					},
					{
						x: new Date(1538780400000),
						y: [6632.01, 6643.59, 6620, 6630.11],
					},
					{
						x: new Date(1538782200000),
						y: [6630.71, 6648.95, 6623.34, 6635.65],
					},
					{
						x: new Date(1538784000000),
						y: [6635.65, 6651, 6629.67, 6638.24],
					},
					{
						x: new Date(1538785800000),
						y: [6638.24, 6640, 6620, 6624.47],
					},
					{
						x: new Date(1538787600000),
						y: [6624.53, 6636.03, 6621.68, 6624.31],
					},
					{
						x: new Date(1538789400000),
						y: [6624.61, 6632.2, 6617, 6626.02],
					},
					{
						x: new Date(1538791200000),
						y: [6627, 6627.62, 6584.22, 6603.02],
					},
					{
						x: new Date(1538793000000),
						y: [6605, 6608.03, 6598.95, 6604.01],
					},
					{
						x: new Date(1538794800000),
						y: [6604.5, 6614.4, 6602.26, 6608.02],
					},
					{
						x: new Date(1538796600000),
						y: [6608.02, 6610.68, 6601.99, 6608.91],
					},
					{
						x: new Date(1538798400000),
						y: [6608.91, 6618.99, 6608.01, 6612],
					},
					{
						x: new Date(1538800200000),
						y: [6612, 6615.13, 6605.09, 6612],
					},
					{
						x: new Date(1538802000000),
						y: [6612, 6624.12, 6608.43, 6622.95],
					},
					{
						x: new Date(1538803800000),
						y: [6623.91, 6623.91, 6615, 6615.67],
					},
					{
						x: new Date(1538805600000),
						y: [6618.69, 6618.74, 6610, 6610.4],
					},
					{
						x: new Date(1538807400000),
						y: [6611, 6622.78, 6610.4, 6614.9],
					},
					{
						x: new Date(1538809200000),
						y: [6614.9, 6626.2, 6613.33, 6623.45],
					},
					{
						x: new Date(1538811000000),
						y: [6623.48, 6627, 6618.38, 6620.35],
					},
					{
						x: new Date(1538812800000),
						y: [6619.43, 6620.35, 6610.05, 6615.53],
					},
					{
						x: new Date(1538814600000),
						y: [6615.53, 6617.93, 6610, 6615.19],
					},
					{
						x: new Date(1538816400000),
						y: [6615.19, 6621.6, 6608.2, 6620],
					},
					{
						x: new Date(1538818200000),
						y: [6619.54, 6625.17, 6614.15, 6620],
					},
					{
						x: new Date(1538820000000),
						y: [6620.33, 6634.15, 6617.24, 6624.61],
					},
					{
						x: new Date(1538821800000),
						y: [6625.95, 6626, 6611.66, 6617.58],
					},
					{
						x: new Date(1538823600000),
						y: [6619, 6625.97, 6595.27, 6598.86],
					},
					{
						x: new Date(1538825400000),
						y: [6598.86, 6598.88, 6570, 6587.16],
					},
					{
						x: new Date(1538827200000),
						y: [6588.86, 6600, 6580, 6593.4],
					},
					{
						x: new Date(1538829000000),
						y: [6593.99, 6598.89, 6585, 6587.81],
					},
					{
						x: new Date(1538830800000),
						y: [6587.81, 6592.73, 6567.14, 6578],
					},
					{
						x: new Date(1538832600000),
						y: [6578.35, 6581.72, 6567.39, 6579],
					},
					{
						x: new Date(1538834400000),
						y: [6579.38, 6580.92, 6566.77, 6575.96],
					},
					{
						x: new Date(1538836200000),
						y: [6575.96, 6589, 6571.77, 6588.92],
					},
					{
						x: new Date(1538838000000),
						y: [6588.92, 6594, 6577.55, 6589.22],
					},
					{
						x: new Date(1538839800000),
						y: [6589.3, 6598.89, 6589.1, 6596.08],
					},
					{
						x: new Date(1538841600000),
						y: [6597.5, 6600, 6588.39, 6596.25],
					},
					{
						x: new Date(1538843400000),
						y: [6598.03, 6600, 6588.73, 6595.97],
					},
					{
						x: new Date(1538845200000),
						y: [6595.97, 6602.01, 6588.17, 6602],
					},
					{
						x: new Date(1538847000000),
						y: [6602, 6607, 6596.51, 6599.95],
					},
					{
						x: new Date(1538848800000),
						y: [6600.63, 6601.21, 6590.39, 6591.02],
					},
					{
						x: new Date(1538850600000),
						y: [6591.02, 6603.08, 6591, 6591],
					},
					{
						x: new Date(1538852400000),
						y: [6591, 6601.32, 6585, 6592],
					},
					{
						x: new Date(1538854200000),
						y: [6593.13, 6596.01, 6590, 6593.34],
					},
					{
						x: new Date(1538856000000),
						y: [6593.34, 6604.76, 6582.63, 6593.86],
					},
					{
						x: new Date(1538857800000),
						y: [6593.86, 6604.28, 6586.57, 6600.01],
					},
					{
						x: new Date(1538859600000),
						y: [6601.81, 6603.21, 6592.78, 6596.25],
					},
					{
						x: new Date(1538861400000),
						y: [6596.25, 6604.2, 6590, 6602.99],
					},
					{
						x: new Date(1538863200000),
						y: [6602.99, 6606, 6584.99, 6587.81],
					},
					{
						x: new Date(1538865000000),
						y: [6587.81, 6595, 6583.27, 6591.96],
					},
					{
						x: new Date(1538866800000),
						y: [6591.97, 6596.07, 6585, 6588.39],
					},
					{
						x: new Date(1538868600000),
						y: [6587.6, 6598.21, 6587.6, 6594.27],
					},
					{
						x: new Date(1538870400000),
						y: [6596.44, 6601, 6590, 6596.55],
					},
					{
						x: new Date(1538872200000),
						y: [6598.91, 6605, 6596.61, 6600.02],
					},
					{
						x: new Date(1538874000000),
						y: [6600.55, 6605, 6589.14, 6593.01],
					},
					{
						x: new Date(1538875800000),
						y: [6593.15, 6605, 6592, 6603.06],
					},
					{
						x: new Date(1538877600000),
						y: [6603.07, 6604.5, 6599.09, 6603.89],
					},
					{
						x: new Date(1538879400000),
						y: [6604.44, 6604.44, 6600, 6603.5],
					},
					{
						x: new Date(1538881200000),
						y: [6603.5, 6603.99, 6597.5, 6603.86],
					},
					{
						x: new Date(1538883000000),
						y: [6603.85, 6605, 6600, 6604.07],
					},
					{
						x: new Date(1538884800000),
						y: [6604.98, 6606, 6604.07, 6606],
					},
				],
			},
		],
		xaxis: {
			type: "datetime",
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "11px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
			labels: {
				formatter: function (e) {
					return +e + " GHz";
				},
				offsetX: -22,
				offsetY: 0,
				style: {
					fontFamily: "Inter",
					fontSize: "11px",
					color: "#64748b",
				},
			},
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
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
					return +e + " GHz";
				},
			},
			style: {
				colors: "#A0ACBB",
				fontFamily: "Inter",
			},
		},
	};

	var chartcandlestickchart = new ApexCharts(document.querySelector("#performance-overview-candlestick-chart"), optionscandlestickchart);
	chartcandlestickchart.render();
});
